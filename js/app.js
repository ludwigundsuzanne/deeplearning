/* Fil d'Ariane — application locale, sans serveur. Toutes les données vivent dans localStorage. */
(function () {
  "use strict";

  const STORE_KEY = "fil-ariane-v1";
  const SEED_VERSION = 1;
  const STEP_NAMES = ["Révisions", "Lecture", "Rappel", "Bilan"];
  const KIND_LABEL = { cours: "Cours", debat: "Débat", synthese: "Synthèse", guide: "Séance guidée" };
  const NODE_TYPES = { personne: "Personne", oeuvre: "Œuvre", evenement: "Événement", idee: "Idée", lieu: "Lieu", discipline: "Discipline" };
  const TYPE_COLOR = { personne: "var(--lapis)", oeuvre: "var(--rust)", evenement: "var(--amber)", idee: "var(--verdigris)", lieu: "var(--ink-2)", discipline: "var(--ink-3)" };

  /* ---------- Utilitaires ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const pad = (n) => String(n).padStart(2, "0");
  const iso = (d) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const today = () => iso(new Date());
  const addDays = (s, n) => { const d = parseISO(s); d.setDate(d.getDate() + n); return iso(d); };
  const parseISO = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const daysBetween = (a, b) => Math.round((parseISO(b) - parseISO(a)) / 86400000);
  const fmtDate = (s, opts) => { try { return parseISO(s.slice(0, 10)).toLocaleDateString("fr-FR", opts || { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return s; } };
  const plural = (n, one, many) => n + " " + (n > 1 ? many : one);
  const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const fmtDuration = (sec) => { const m = Math.floor(sec / 60), s = Math.floor(sec % 60); return pad(m) + ":" + pad(s); };

  function md(src) {
    if (!src) return "";
    const inline = (t) => esc(t).replace(/(\d) (?=\d{3}\b)/g, "$1\u00a0")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*(?!\s)(.+?)\*/g, "$1<em>$2</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    const lines = String(src).replace(/\r/g, "").split("\n");
    let html = "", list = null, para = [];
    const flushPara = () => { if (para.length) { html += "<p>" + inline(para.join(" ")) + "</p>"; para = []; } };
    const flushList = () => { if (list) { html += "</" + list + ">"; list = null; } };
    for (const raw of lines) {
      const line = raw.trimEnd();
      let m;
      if (!line.trim()) { flushPara(); flushList(); continue; }
      if ((m = line.match(/^(#{1,3})\s+(.*)$/))) { flushPara(); flushList(); const lvl = m[1].length < 3 ? 2 : 3; html += `<h${lvl}>${inline(m[2])}</h${lvl}>`; continue; }
      if ((m = line.match(/^\s*[-*]\s+(.*)$/))) { flushPara(); if (list !== "ul") { flushList(); html += "<ul>"; list = "ul"; } html += "<li>" + inline(m[1]) + "</li>"; continue; }
      if ((m = line.match(/^\s*\d+[.)]\s+(.*)$/))) { flushPara(); if (list !== "ol") { flushList(); html += "<ol>"; list = "ol"; } html += "<li>" + inline(m[1]) + "</li>"; continue; }
      if ((m = line.match(/^>\s?(.*)$/))) { flushPara(); flushList(); html += "<blockquote>" + inline(m[1]) + "</blockquote>"; continue; }
      flushList(); para.push(line.trim());
    }
    flushPara(); flushList();
    return html;
  }

  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"];
  const roman = (n) => ROMAN[n - 1] || String(n);
  const QUOTES = [
    ["Une vie sans examen ne vaut pas d'être vécue.", "Socrate, selon Platon", "Apologie de Socrate, 38a"],
    ["Chacun appelle barbarie ce qui n'est pas de son usage.", "Montaigne", "Essais, I, 31, « Des cannibales »"],
    ["Que sais-je ?", "Montaigne", "Essais, II, 12"],
    ["Aie le courage de te servir de ton propre entendement.", "Emmanuel Kant", "Qu'est-ce que les Lumières ?, 1784"],
    ["L'homme est né libre, et partout il est dans les fers.", "Jean-Jacques Rousseau", "Du contrat social, I, 1"],
    ["Le silence éternel de ces espaces infinis m'effraie.", "Blaise Pascal", "Pensées"],
    ["Ils font un désert et l'appellent paix.", "Tacite", "Agricola, 30"],
    ["Les forts font ce qu'ils peuvent et les faibles subissent ce qu'ils doivent.", "Thucydide", "La Guerre du Péloponnèse, V, 89"],
    ["L'histoire est la science des hommes dans le temps.", "Marc Bloch", "Apologie pour l'histoire"],
    ["Nous autres, civilisations, nous savons maintenant que nous sommes mortelles.", "Paul Valéry", "La Crise de l'esprit, 1919"],
    ["Le passé est un pays étranger : on y fait les choses autrement.", "L. P. Hartley", "Le Messager, 1953"],
    ["Il n'y a pas de document de culture qui ne soit aussi un document de barbarie.", "Walter Benjamin", "Sur le concept d'histoire, 1940"],
    ["Ceux qui ne peuvent se souvenir du passé sont condamnés à le répéter.", "George Santayana", "La Vie de la raison, 1905"],
    ["Gouverner un grand pays, c'est comme faire frire un petit poisson.", "Laozi", "Daodejing, 60"],
    ["Ce que tu ne veux pas qu'on te fasse, ne le fais pas aux autres.", "Confucius", "Entretiens, XV"],
    ["L'homme est par nature un animal politique.", "Aristote", "Politique, I"],
    ["Il faut être absolument moderne.", "Arthur Rimbaud", "Une saison en enfer, 1873"],
    ["Scripta manent, verba volant.", "Proverbe latin", "Les écrits restent, les paroles s'envolent"]
  ];
  function quoteOfDay() { const d = parseISO(today()); const n = Math.floor(d.getTime() / 86400000); return QUOTES[((n % QUOTES.length) + QUOTES.length) % QUOTES.length]; }

  /* ---------- Icônes ---------- */
  const I = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICON = {
    today: I('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    path: I('<path d="M4 19c4 0 4-6 8-6s4 6 8 6"/><path d="M4 11c4 0 4-6 8-6s4 6 8 6"/>'),
    review: I('<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 2h12a2 2 0 0 1 2 2v12"/>'),
    notebook: I('<path d="M5 3h12a2 2 0 0 1 2 2v16H7a2 2 0 0 1-2-2z"/><path d="M5 17a2 2 0 0 1 2-2h12"/><path d="M9 7h6"/>'),
    links: I('<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="9" cy="18" r="2.5"/><path d="M8.3 7l7.4.6M7 8.3l1.4 7.3M16.4 10l-5.5 6.4"/>'),
    synth: I('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
    settings: I('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>'),
    more: I('<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>'),
    play: I('<path d="M7 4v16l13-8z"/>'),
    back: I('<path d="M15 18l-6-6 6-6"/>'),
    next: I('<path d="M9 18l6-6-6-6"/>'),
    up: I('<path d="M18 15l-6-6-6 6"/>'),
    down: I('<path d="M6 9l6 6 6-6"/>'),
    edit: I('<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>'),
    trash: I('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
    plus: I('<path d="M12 5v14M5 12h14"/>'),
    star: I('<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>'),
    check: I('<path d="M5 12l5 5L20 7"/>'),
    download: I('<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>'),
    upload: I('<path d="M12 21V9M7 14l5-5 5 5M5 3h14"/>'),
    copy: I('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>'),
    close: I('<path d="M6 6l12 12M18 6L6 18"/>'),
    book: I('<path d="M4 4h5a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-5a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h6z"/>')
  };
  const LOGO = '<svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 16m-2 0a2 2 0 1 0 4 0a4 4 0 1 0-8 0a6 6 0 1 0 12 0a8 8 0 1 0-16 0a10 10 0 0 0 10 10" fill="none" stroke="var(--lapis)" stroke-width="1.8" stroke-linecap="round"/></svg>';

  /* ---------- Construction de l'état initial ---------- */
  function convertM1(m) {
    return {
      id: m.id, title: m.title, period: m.period, question: m.question, intro: m.intro,
      sources: [], synthesisPrompts: m.synthesisPrompts.slice(),
      weeks: m.weeks.map((w) => ({
        id: w.id, title: w.title, question: w.question,
        sessions: w.sessions.map((s) => ({
          id: s.id, kind: s.kind, title: s.title, hook: s.hook || "", body: s.body || "",
          notions: (s.notions || []).map(([term, def]) => ({ term, def })),
          questions: (s.questions || []).map(([q, a]) => ({ q, a })),
          perspective: s.perspective || "", connections: s.connections || [],
          sources: s.sources || [], positions: s.positions || [], prompt: s.prompt || ""
        }))
      }))
    };
  }
  function convertPlan(m) {
    return {
      id: m.id, title: m.title, period: m.period, question: m.question, intro: m.intro,
      sources: m.sources || [], synthesisPrompts: m.synthesisPrompts.slice(),
      weeks: m.weeks.map((w, wi) => ({
        id: m.id + "w" + (wi + 1), title: w.title, question: w.question,
        sessions: w.sessions.map(([title, brief, notions, question], si) => {
          const kind = /^Débat/.test(title) ? "debat" : /^Synthèse/.test(title) ? "synthese" : "guide";
          return {
            id: m.id + "w" + (wi + 1) + "s" + (si + 1), kind, title, hook: brief, body: "",
            notions: notions.split(/\s*;\s*/).filter(Boolean).map((term) => ({ term, def: "" })),
            questions: [{ q: question, a: "" }], perspective: "", connections: [], sources: [], positions: [],
            prompt: kind === "debat" ? question : ""
          };
        })
      }))
    };
  }
  function seedMonths() {
    return [convertM1(window.SEED_M1)].concat((window.SEED_PLAN || []).map(convertPlan));
  }
  function guessType(label) {
    const n = norm(label);
    if (/^(histoire|archeolog|linguist|geopolit|philosoph|sociolog|anthropolog|genetique|paleoclim|metallurg|epistemolog|economie|droit)/.test(n)) return "discipline";
    return "idee";
  }
  function buildGraph(months) {
    const nodes = {}, edges = [];
    const ensure = (label, type) => {
      const key = norm(label);
      if (!nodes[key]) nodes[key] = { id: key, label, type: type || guessType(label), note: "" };
      else if (type && nodes[key].type === "idee" && type !== "idee") nodes[key].type = type;
      return key;
    };
    const typeMap = { "personne": "personne", "œuvre": "oeuvre", "événement": "evenement", "idée": "idee", "lieu": "lieu", "discipline": "discipline" };
    months.forEach((m) => m.weeks.forEach((w) => w.sessions.forEach((s) => (s.connections || []).forEach((c) => {
      const t = typeMap[c.type] || "idee";
      const a = ensure(c.a, t === "discipline" ? null : t);
      const b = ensure(c.b, t === "discipline" ? "discipline" : null);
      edges.push({ id: uid(), a, b, rel: c.rel, sid: s.id });
    }))));
    return { nodes, edges };
  }
  function initialState() {
    const months = seedMonths();
    return {
      v: 1, seedVersion: SEED_VERSION, createdAt: new Date().toISOString(),
      settings: { theme: "system", size: "m", autoCards: true, reviewLimit: 15, startDate: today() },
      months, progress: {}, notes: [], notions: [], sources: [], cards: [],
      graph: buildGraph(months), syntheses: {},
      quizzes: { m1: window.SEED_M1.quiz.map((q) => ({ id: uid(), q: q.q, c: q.c, a: q.a, e: q.e })) },
      quizLog: [], log: [], lastBackup: null, reading: {},
      ui: { monthId: "m1", carnetTab: "notes", reviseTab: "fiches" }
    };
  }

  /* ---------- Persistance ---------- */
  let state;
  let storageOk = true;
  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (s && Array.isArray(s.months)) return migrate(s);
      }
    } catch (e) { storageOk = false; }
    return initialState();
  }
  function migrate(s) {
    const base = initialState();
    for (const k of Object.keys(base)) if (s[k] === undefined) s[k] = base[k];
    s.settings = Object.assign({}, base.settings, s.settings);
    s.ui = Object.assign({}, base.ui, s.ui);
    (s.sources || []).forEach((x) => { if (!s.reading[x.id]) s.reading[x.id] = { status: x.status || "lire" }; });
    if (s.ui.carnetTab === "sources") s.ui.carnetTab = "notes";
    return s;
  }
  let saveTimer = null;
  function save(now) {
    clearTimeout(saveTimer);
    const write = () => {
      try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); storageOk = true; }
      catch (e) { if (storageOk) toast("Enregistrement impossible : le navigateur bloque le stockage. Exportez une sauvegarde."); storageOk = false; }
    };
    if (now) write(); else saveTimer = setTimeout(write, 250);
  }
  window.addEventListener("pagehide", () => save(true));
  document.addEventListener("visibilitychange", () => { if (document.hidden) { flushTimer(); save(true); } });

  /* ---------- Requêtes sur le parcours ---------- */
  function flat() {
    const out = [];
    state.months.forEach((m, mi) => m.weeks.forEach((w, wi) => w.sessions.forEach((s, si) => out.push({ s, m, w, mi, wi, si }))));
    return out;
  }
  function findSession(id) { return flat().find((x) => x.s.id === id) || null; }
  function prog(id) { return state.progress[id] || null; }
  function isDone(id) { const p = prog(id); return !!(p && p.status === "done"); }
  function nextSession() {
    const all = flat();
    const started = all.filter((x) => { const p = prog(x.s.id); return p && p.status === "started"; })
      .sort((a, b) => (prog(b.s.id).touched || "").localeCompare(prog(a.s.id).touched || ""));
    if (started.length) return started[0];
    return all.find((x) => !isDone(x.s.id)) || null;
  }
  function monthStats(m) {
    const ids = m.weeks.flatMap((w) => w.sessions.map((s) => s.id));
    const done = ids.filter(isDone).length;
    return { done, total: ids.length, pct: ids.length ? done / ids.length : 0 };
  }
  function currentMonth() { const n = nextSession(); return n ? n.m : state.months[state.months.length - 1]; }
  function dueCards() { const t = today(); return state.cards.filter((c) => c.due <= t).sort((a, b) => a.due.localeCompare(b.due)); }
  function weekStart(d) { const x = new Date(d); const day = (x.getDay() + 6) % 7; x.setDate(x.getDate() - day); return iso(x); }
  function sessionsOn(dateIso) { return state.log.filter((l) => l.date === dateIso); }

  /* ---------- Révision espacée (SM-2 simplifié) ---------- */
  function schedule(card, grade) {
    const c = Object.assign({}, card);
    if (grade === 0) { c.reps = 0; c.interval = 0; c.ease = Math.max(1.3, c.ease - 0.2); c.lapses = (c.lapses || 0) + 1; }
    else if (grade === 1) { c.interval = c.reps === 0 ? 1 : Math.max(1, Math.round(c.interval * 1.2)); c.ease = Math.max(1.3, c.ease - 0.15); c.reps += 1; }
    else if (grade === 2) { c.interval = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.interval * c.ease); c.reps += 1; }
    else { c.interval = c.reps === 0 ? 4 : Math.round(Math.max(c.interval, 1) * c.ease * 1.3); c.ease += 0.15; c.reps += 1; }
    c.due = addDays(today(), c.interval);
    c.last = today();
    return c;
  }
  function intervalLabel(card, grade) {
    const d = schedule(card, grade).interval;
    if (d === 0) return "aujourd'hui";
    if (d === 1) return "demain";
    if (d < 30) return d + " j";
    if (d < 365) return Math.round(d / 30) + " mois";
    return (d / 365).toFixed(1).replace(".", ",") + " an";
  }
  function newCard(front, back, extra) {
    return Object.assign({ id: uid(), front, back, ease: 2.5, interval: 0, reps: 0, lapses: 0, due: today(), created: today() }, extra || {});
  }
  function addCardOnce(src, front, back, mid, sid) {
    if (src && state.cards.some((c) => c.src === src)) return false;
    state.cards.push(newCard(front, back, { src, mid, sid }));
    return true;
  }
  function addNotionOnce(term, def, mid, sid) {
    const key = norm(term);
    const existing = state.notions.find((n) => norm(n.term) === key);
    if (existing) { if (!existing.def && def) existing.def = def; return existing; }
    const n = { id: uid(), term, def: def || "", mid, sid, created: today() };
    state.notions.push(n);
    return n;
  }

  /* ---------- Notes ---------- */
  function sessionNote(sid, kind) {
    const id = (kind === "debat" ? "dp-" : "sn-") + sid;
    return state.notes.find((n) => n.id === id) || null;
  }
  function upsertSessionNote(sid, kind, body) {
    const id = (kind === "debat" ? "dp-" : "sn-") + sid;
    let n = state.notes.find((x) => x.id === id);
    const f = findSession(sid);
    if (!n) {
      if (!body.trim()) return;
      n = { id, title: (kind === "debat" ? "Ma position : " : "") + (f ? f.s.title : "Séance"), body: "", sid, mid: f ? f.m.id : null, kind: kind === "debat" ? "debat" : "seance", created: new Date().toISOString() };
      state.notes.unshift(n);
    }
    n.body = body; n.updated = new Date().toISOString();
  }

  /* ---------- Rendu général ---------- */
  const root = document.getElementById("root");
  const ROUTES = ["aujourdhui", "parcours", "seance", "reviser", "carnet", "bibliotheque", "liens", "syntheses", "reglages", "plus"];
  function route() { const h = location.hash.replace("#", ""); return ROUTES.includes(h) ? h : "aujourdhui"; }
  function go(r) { if (location.hash !== "#" + r) location.hash = r; else render(); }

  function applyPrefs() {
    const el = document.documentElement;
    if (state.settings.theme === "system") el.removeAttribute("data-theme"); else el.setAttribute("data-theme", state.settings.theme);
    el.setAttribute("data-size", state.settings.size);
    el.lang = "fr";
  }

  function navHtml(r) {
    const due = dueCards().length;
    const items = [
      ["aujourdhui", "Aujourd'hui", ICON.today],
      ["parcours", "Parcours", ICON.path],
      ["reviser", "Réviser", ICON.review, due],
      ["carnet", "Carnet", ICON.notebook],
      ["bibliotheque", "Bibliothèque", ICON.book],
      ["liens", "Liens", ICON.links],
      ["syntheses", "Synthèses", ICON.synth],
      ["reglages", "Données et réglages", ICON.settings]
    ];
    const cur = r === "seance" ? "aujourdhui" : r;
    const rail = items.map(([id, label, ic, n]) =>
      `<a class="nav-item" href="#${id}" ${cur === id ? 'aria-current="page"' : ""}>${ic}<span>${label}</span>${n ? `<span class="count" aria-label="${n} à revoir">${n}</span>` : ""}</a>`).join("");
    const tabs = [items[0], items[1], items[2], items[3], ["plus", "Plus", ICON.more]];
    const plusCur = ["bibliotheque", "liens", "syntheses", "reglages", "plus"].includes(cur);
    const tabbar = tabs.map(([id, label, ic, n]) =>
      `<a href="#${id}" ${(id === "plus" ? plusCur : cur === id) ? 'aria-current="page"' : ""}>${ic}<span>${label}</span>${n ? `<span class="dot">${n > 99 ? "99+" : n}</span>` : ""}</a>`).join("");
    return { rail, tabbar };
  }

  let lastRoute = null;
  function render() {
    const r = route();
    if (r !== "seance") flushTimer();
    const nav = navHtml(r);
    let body = "";
    try {
      body = ({ aujourdhui: viewToday, parcours: viewParcours, seance: viewSession, reviser: viewReview, carnet: viewCarnet, bibliotheque: viewLibrary, liens: viewLinks, syntheses: viewSyntheses, reglages: viewSettings, plus: viewPlus })[r]();
    } catch (e) {
      console.error(e);
      body = `<div class="narrow empty"><strong>Cet écran n'a pas pu s'afficher.</strong>${esc(e.message)}<br><a href="#aujourdhui">Revenir à l'accueil</a></div>`;
    }
    root.innerHTML = `
      <div class="app">
        <nav class="rail" aria-label="Navigation principale">
          <div class="brand">${LOGO}<span>Fil d'Ariane</span></div>
          ${nav.rail}
          <div class="spacer"></div>
          <p class="motto"><b>Scripta manent.</b> Ce que l'on écrit demeure.</p>
          <div class="foot">${storageOk ? "Données enregistrées dans ce navigateur" : "Stockage indisponible : exportez vos données"}</div>
        </nav>
        <main id="main" tabindex="-1">${body}</main>
        <nav class="tabbar" aria-label="Navigation">${nav.tabbar}</nav>
      </div>
      <dialog id="dlg" aria-labelledby="dlg-title"></dialog>
      <div id="toast-zone" aria-live="polite"></div>`;
    if (r !== lastRoute) { window.scrollTo(0, 0); lastRoute = r; }
    afterRender(r);
  }
  function afterRender(r) {
    if (r === "seance") startTimer();
    document.title = ({ aujourdhui: "Fil d'Ariane", parcours: "Parcours · Fil d'Ariane", seance: "Séance · Fil d'Ariane", reviser: "Réviser · Fil d'Ariane", carnet: "Carnet · Fil d'Ariane", bibliotheque: "Bibliothèque · Fil d'Ariane", liens: "Liens · Fil d'Ariane", syntheses: "Synthèses · Fil d'Ariane", reglages: "Données · Fil d'Ariane", plus: "Fil d'Ariane" })[r];
  }
  /* Re-rend en conservant la position de défilement (pour les actions locales). */
  function refresh() { const y = window.scrollY; render(); window.scrollTo(0, y); }

  let toastTimer;
  function toast(msg) {
    const z = document.getElementById("toast-zone");
    if (!z) return;
    z.innerHTML = `<div class="toast" role="status">${esc(msg)}</div>`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { z.innerHTML = ""; }, 2800);
  }

  /* ---------- Dialogue ---------- */
  let dlgHandlers = {};
  function openDialog(html, handlers) {
    const d = document.getElementById("dlg");
    d.innerHTML = `<div class="dialog-body">${html}</div>`;
    dlgHandlers = handlers || {};
    if (!d.open) { try { d.showModal(); } catch (e) { d.setAttribute("open", ""); } }
    const f = d.querySelector("[autofocus], input, textarea, select, button.primary");
    if (f) f.focus();
  }
  function closeDialog() { const d = document.getElementById("dlg"); if (d && d.open) d.close(); dlgHandlers = {}; }
  function confirmDialog(title, text, yesLabel, onYes, danger) {
    openDialog(`<h2 id="dlg-title">${esc(title)}</h2><p>${esc(text)}</p>
      <div class="row end"><button class="btn ghost" data-act="dlg-close">Annuler</button>
      <button class="btn ${danger ? "danger solid" : "primary"}" data-act="dlg-yes">${esc(yesLabel)}</button></div>`, { yes: onYes });
  }

  /* =========================================================
     VUE : Aujourd'hui
     ========================================================= */
  function viewToday() {
    const n = nextSession();
    const due = dueCards().length;
    const m = currentMonth();
    const ms = monthStats(m);
    const t = today();
    const ws = weekStart(new Date());
    const week = [...Array(7)].map((_, i) => addDays(ws, i));
    const weekLogs = state.log.filter((l) => l.date >= ws && l.date <= addDays(ws, 6));
    const weekMin = weekLogs.reduce((a, l) => a + (l.minutes || 0), 0);
    const totalDone = Object.values(state.progress).filter((p) => p.status === "done").length;
    const dayNames = ["L", "M", "M", "J", "V", "S", "D"];
    const hour = new Date().getHours();
    const greet = hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir";
    const q = quoteOfDay();
    const reading = catalog().filter((b) => (state.reading[b.key] || {}).status === "cours").slice(0, 3);

    let hero;
    if (n) {
      const p = prog(n.s.id);
      const started = p && p.status === "started";
      hero = `<section class="hero-session" aria-labelledby="hero-t" data-numeral="${roman(n.mi + 1)}">
        ${started ? `<div class="resume-note">Reprise · étape ${p.step + 1} sur 4, ${STEP_NAMES[p.step].toLowerCase()}</div>` : ""}
        <div class="where"><b>Mois ${roman(n.mi + 1)}</b>${esc(n.m.title)} · semaine ${n.wi + 1}, séance ${n.si + 1}</div>
        <h2 id="hero-t">${esc(n.s.title)}</h2>
        <p class="hook">${esc(n.s.hook)}</p>
        <div class="row">
          <button class="btn primary lg" data-act="open-session" data-id="${n.s.id}">${ICON.play}${started ? "Reprendre la séance" : "Commencer la séance"}</button>
          <span class="tag ${n.s.kind}">${KIND_LABEL[n.s.kind]}</span>
        </div>
        <ul class="plan" aria-label="Déroulé conseillé">
          <li><b>5 min</b> révisions${due ? ` (${due})` : ""}</li><li><b>15 min</b> ${n.s.kind === "debat" ? "positions" : "lecture"}</li><li><b>5 min</b> ${n.s.kind === "debat" ? "votre argument" : "rappel actif"}</li>
        </ul>
      </section>`;
    } else {
      hero = `<section class="hero-session"><h2>Parcours terminé</h2><p class="hook">Toutes les séances sont faites. Vous pouvez ajouter un mois dans le Parcours, ou relire vos synthèses.</p><a class="btn primary" href="#parcours">Ouvrir le parcours</a></section>`;
    }

    const backupDays = state.lastBackup ? daysBetween(state.lastBackup.slice(0, 10), t) : null;
    const needBackup = totalDone >= 3 && (backupDays === null || backupDays >= 14);
    const welcome = totalDone === 0 && !Object.keys(state.progress).length;

    return `<div class="wrap">
      <header class="page-head"><div><div class="eyebrow">${esc(fmtDate(t, { weekday: "long", day: "numeric", month: "long" }))}</div><h1>${greet}. <em>Au travail.</em></h1></div></header>
      ${needBackup ? `<div class="banner"><span>${backupDays === null ? "Vous n'avez encore jamais sauvegardé vos données." : `Dernière sauvegarde il y a ${backupDays} jours.`} Elles ne vivent que dans ce navigateur.</span><a class="btn sm" href="#reglages">Sauvegarder</a></div>` : ""}
      ${welcome ? `<div class="banner" style="background:var(--lapis-soft)"><span>Chaque séance dure environ 25 minutes : révisions, lecture, rappel actif, bilan. Vous pouvez la quitter à tout moment, elle reprendra au même endroit.</span></div>` : ""}
      <div class="today">
        <div class="today-main">${hero}
          <figure class="quote"><span class="eyebrow label">Citation du jour</span><p>${esc(q[0])}</p><footer><b>${esc(q[1])}</b> · ${esc(q[2])}</footer></figure>
        </div>
        <div class="side-stack">
          <section class="panel" aria-labelledby="rev-t">
            <div class="row between"><h3 id="rev-t">Révisions</h3><span class="muted small num">${plural(state.cards.length, "fiche", "fiches")}</span></div>
            <p class="small" style="margin:8px 0 12px;color:var(--ink-2)">${due ? `${plural(due, "fiche attend", "fiches attendent")} aujourd'hui.` : state.cards.length ? "Rien à revoir aujourd'hui." : "Vos fiches apparaîtront après votre première séance."}</p>
            ${due ? `<a class="btn sm" href="#reviser">Réviser maintenant</a>` : ""}
          </section>
          <section class="panel" aria-labelledby="week-t">
            <div class="row between"><h3 id="week-t">Cette semaine</h3><span class="muted small num">${plural(weekLogs.length, "séance", "séances")} · ${weekMin} min</span></div>
            <div class="week-dots" role="list">${week.map((d, i) => `<div role="listitem" class="${sessionsOn(d).length ? "on" : ""} ${d === t ? "is-today" : ""}" aria-label="${fmtDate(d, { weekday: "long" })}${sessionsOn(d).length ? " : séance faite" : ""}"><span></span>${dayNames[i]}</div>`).join("")}</div>
            <p class="small muted" style="margin:12px 0 0">Rythme visé : 5 séances par semaine. Un jour manqué ne casse rien.</p>
          </section>
          <section class="panel" aria-labelledby="lib-t">
            <div class="row between"><h3 id="lib-t">En lecture</h3><a class="small" href="#bibliotheque">Bibliothèque</a></div>
            ${reading.length ? `<ul class="reading-now">${reading.map((b) => `<li><em>${esc(b.t)}</em>${b.a ? `<br><span class="muted">${esc(b.a)}</span>` : ""}</li>`).join("")}</ul>`
              : `<p class="small" style="margin:8px 0 0;color:var(--ink-2)">Aucun livre en cours. La bibliothèque propose des lectures pour chaque mois.</p>`}
          </section>
          <section class="panel" aria-labelledby="path-t">
            <div class="row between"><h3 id="path-t">Parcours</h3><a class="small" href="#parcours">Voir</a></div>
            <p class="small" style="margin:8px 0 6px;color:var(--ink-2)">Mois en cours : <b>${esc(m.title)}</b>, ${ms.done} sur ${ms.total} séances.</p>
            <div class="progress" role="progressbar" aria-valuenow="${Math.round(ms.pct * 100)}" aria-valuemin="0" aria-valuemax="100" aria-label="Progression du mois"><span style="width:${ms.pct * 100}%"></span></div>
            <div class="month-strip">${state.months.map((mm) => { const st = monthStats(mm); return `<a href="#parcours" data-act="pick-month" data-id="${mm.id}" class="${mm.id === m.id ? "current" : ""}" title="${esc(mm.title)} : ${st.done}/${st.total}" aria-label="${esc(mm.title)}, ${st.done} séances sur ${st.total}"><i style="height:${st.pct * 100}%"></i></a>`; }).join("")}</div>
            <div class="month-strip-labels" aria-hidden="true">${state.months.map((_, i) => `<span>${roman(i + 1)}</span>`).join("")}</div>
          </section>
        </div>
      </div>
    </div>`;
  }

  /* =========================================================
     VUE : Parcours
     ========================================================= */
  let editMode = false;
  function viewParcours() {
    let m = state.months.find((x) => x.id === state.ui.monthId) || currentMonth();
    state.ui.monthId = m.id;
    const mi = state.months.indexOf(m);
    const cur = currentMonth();
    const n = nextSession();
    const list = state.months.map((mm, i) => {
      const st = monthStats(mm);
      const cls = st.total && st.done === st.total ? "done" : mm.id === cur.id ? "current" : "";
      return `<li><button class="month-btn ${cls}" data-act="pick-month" data-id="${mm.id}" ${mm.id === m.id ? 'aria-current="true"' : ""}>
        <span class="n">${roman(i + 1)}</span><span class="t">${esc(mm.title)}</span><span class="s">${st.done}/${st.total} · ${esc(mm.period || "")}</span></button></li>`;
    }).join("");

    const weeks = m.weeks.map((w, wi) => {
      const rows = w.sessions.map((s, si) => {
        const p = prog(s.id);
        const cls = p ? (p.status === "done" ? "done" : "started") : "";
        const isNext = n && n.s.id === s.id;
        const edit = editMode ? `
          <button class="icon-btn" data-act="move-session" data-id="${s.id}" data-dir="-1" aria-label="Monter" ${si === 0 && wi === 0 ? "disabled" : ""}>${ICON.up}</button>
          <button class="icon-btn" data-act="move-session" data-id="${s.id}" data-dir="1" aria-label="Descendre" ${si === w.sessions.length - 1 && wi === m.weeks.length - 1 ? "disabled" : ""}>${ICON.down}</button>
          <button class="icon-btn" data-act="edit-session" data-id="${s.id}" aria-label="Modifier la séance">${ICON.edit}</button>
          <button class="icon-btn" data-act="delete-session" data-id="${s.id}" aria-label="Supprimer la séance">${ICON.trash}</button>`
          : `${p && p.status === "done" ? `<button class="btn ghost sm" data-act="open-session" data-id="${s.id}">Relire</button>` : `<button class="btn ${isNext ? "primary" : ""} sm" data-act="open-session" data-id="${s.id}">${p ? "Reprendre" : "Ouvrir"}</button>`}`;
        return `<li><div class="session-row ${cls} ${isNext && !editMode ? "next" : ""}">
          <span class="status" aria-label="${p ? (p.status === "done" ? "Faite" : "Commencée") : "À faire"}"></span>
          <div><div class="title">${esc(s.title)}</div><div class="meta"><span class="tag ${s.kind}">${KIND_LABEL[s.kind]}</span>${p && p.doneAt ? `<span>faite le ${fmtDate(p.doneAt, { day: "numeric", month: "short" })}</span>` : ""}</div></div>
          <div class="acts">${edit}</div></div></li>`;
      }).join("");
      return `<section class="week" aria-labelledby="wk-${w.id}">
        <div class="week-title"><span class="eyebrow">Semaine ${wi + 1}</span><h3 id="wk-${w.id}">${esc(w.title)}</h3>${w.question ? `<span class="wq">${esc(w.question)}</span>` : ""}
          ${editMode ? `<span class="row" style="margin-left:auto">
            <button class="icon-btn" data-act="move-week" data-id="${w.id}" data-dir="-1" aria-label="Monter la semaine" ${wi === 0 ? "disabled" : ""}>${ICON.up}</button>
            <button class="icon-btn" data-act="move-week" data-id="${w.id}" data-dir="1" aria-label="Descendre la semaine" ${wi === m.weeks.length - 1 ? "disabled" : ""}>${ICON.down}</button>
            <button class="icon-btn" data-act="edit-week" data-id="${w.id}" aria-label="Renommer la semaine">${ICON.edit}</button>
            <button class="icon-btn" data-act="delete-week" data-id="${w.id}" aria-label="Supprimer la semaine">${ICON.trash}</button></span>` : ""}
        </div>
        ${w.sessions.length ? `<ul class="sessions">${rows}</ul>` : `<div class="empty">Semaine vide.</div>`}
        ${editMode ? `<button class="btn ghost sm" style="margin-top:8px" data-act="add-session" data-id="${w.id}">${ICON.plus}Ajouter une séance</button>` : ""}
      </section>`;
    }).join("");

    const st = monthStats(m);
    const monthSources = m.sources && m.sources.length ? `<details class="panel" style="margin-bottom:24px"><summary style="cursor:pointer;font-weight:700">Ressources conseillées pour ce mois (${m.sources.length})</summary><ul class="src-list" style="margin-top:14px">${m.sources.map(srcItem).join("")}</ul></details>` : "";

    return `<div class="wrap">
      <header class="page-head"><div><h1>Parcours</h1><p>12 mois, un thème par mois, cinq séances par semaine. Tout est modifiable : titres, ordre, contenu.</p></div>
        <div class="row"><button class="btn ${editMode ? "primary" : ""}" data-act="toggle-edit" aria-pressed="${editMode}">${editMode ? ICON.check + "Terminer les modifications" : ICON.edit + "Modifier le parcours"}</button></div></header>
      <div class="parcours">
        <div><ul class="month-list" aria-label="Mois du parcours">${list}</ul>
          ${editMode ? `<button class="btn ghost sm" style="margin-top:10px" data-act="add-month">${ICON.plus}Ajouter un mois</button>` : ""}</div>
        <div>
          <div class="month-head">
            <div class="row between"><span class="eyebrow rubric">Mois ${roman(mi + 1)} · ${esc(m.period || "")}</span><span class="small muted num">${st.done}/${st.total} séances</span></div>
            <h2 style="font-size:1.9rem;margin-top:6px">${esc(m.title)}</h2>
            ${m.question ? `<p class="q">${esc(m.question)}</p>` : ""}
            ${m.intro ? `<p>${esc(m.intro)}</p>` : ""}
            ${editMode ? `<div class="row" style="margin-top:12px">
              <button class="btn sm" data-act="edit-month" data-id="${m.id}">${ICON.edit}Modifier le mois</button>
              <button class="btn sm" data-act="move-month" data-id="${m.id}" data-dir="-1" ${mi === 0 ? "disabled" : ""}>${ICON.up}Avancer</button>
              <button class="btn sm" data-act="move-month" data-id="${m.id}" data-dir="1" ${mi === state.months.length - 1 ? "disabled" : ""}>${ICON.down}Reculer</button>
              <button class="btn sm" data-act="add-week" data-id="${m.id}">${ICON.plus}Ajouter une semaine</button>
              <button class="btn sm danger" data-act="delete-month" data-id="${m.id}">${ICON.trash}Supprimer le mois</button></div>` : ""}
          </div>
          ${monthSources}
          ${weeks || `<div class="empty"><strong>Ce mois est vide.</strong>Activez « Modifier le parcours » pour ajouter une semaine.</div>`}
        </div>
      </div>
    </div>`;
  }
  function srcItem(s) {
    return `<li><span class="t">${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.t)}</a>` : esc(s.t)}</span>${s.a ? `, ${esc(s.a)}` : ""}${s.note ? `<div class="n">${esc(s.note)}</div>` : ""}</li>`;
  }

  /* =========================================================
     VUE : Séance
     ========================================================= */
  let timer = null, timerSid = null, timerPaused = false;
  function startTimer() {
    const sid = state.ui.sessionId;
    if (!sid || isDone(sid)) { stopTimer(); return; }
    if (timer && timerSid === sid) return;
    stopTimer();
    timerSid = sid;
    timer = setInterval(() => {
      if (timerPaused || document.hidden) return;
      const p = prog(sid); if (!p) return;
      p.elapsed = (p.elapsed || 0) + 1;
      const el = document.getElementById("timer");
      if (el) el.textContent = fmtDuration(p.elapsed);
      if (p.elapsed % 15 === 0) save();
    }, 1000);
  }
  function stopTimer() { if (timer) clearInterval(timer); timer = null; timerSid = null; }
  function flushTimer() { if (timer) { stopTimer(); save(); } }

  function ensureProgress(sid) {
    if (!state.progress[sid]) state.progress[sid] = { status: "started", step: 0, startedAt: new Date().toISOString(), elapsed: 0, recall: {}, defs: {} };
    const p = state.progress[sid];
    p.recall = p.recall || {}; p.defs = p.defs || {};
    p.touched = new Date().toISOString();
    return p;
  }

  let reviewQueue = null;
  function viewSession() {
    const sid = state.ui.sessionId;
    const f = sid && findSession(sid);
    if (!f) return `<div class="narrow empty"><strong>Aucune séance ouverte.</strong><a href="#aujourdhui">Revenir à l'accueil</a></div>`;
    const { s, m, mi, wi, si } = f;
    const done = isDone(s.id);
    const p = done ? state.progress[s.id] : ensureProgress(s.id);
    const step = done ? (state.ui.relireStep == null ? 1 : state.ui.relireStep) : p.step;
    const steps = STEP_NAMES.map((name, i) => `<li class="${i < step || done ? "done" : ""} ${i === step ? "active" : ""}"><button data-act="goto-step" data-step="${i}" ${i === step ? 'aria-current="step"' : ""}>${name}</button></li>`).join("");
    let content = "";
    if (step === 0) content = stepReview(f);
    else if (step === 1) content = stepReading(f);
    else if (step === 2) content = stepRecall(f, p);
    else content = stepBilan(f, p, done);

    const nextLabel = step === 0 ? (s.kind === "debat" ? "Lire le débat" : "Passer à la lecture") : step === 1 ? (s.kind === "debat" ? "Écrire ma position" : "Passer au rappel") : step === 2 ? "Faire le bilan" : null;
    return `<div class="session-shell">
      <div class="session-top">
        <div class="bar">
          <button class="icon-btn" data-act="leave-session" aria-label="Quitter la séance (elle sera reprise ici)">${ICON.back}</button>
          <div class="title">${esc(s.title)}</div>
          ${done ? `<span class="tag synthese">Faite</span>` : `<button class="timer" id="timer" data-act="toggle-timer" aria-label="Temps passé, cliquer pour mettre en pause">${fmtDuration(p.elapsed || 0)}</button>`}
        </div>
        <ol class="steps" aria-label="Étapes de la séance">${steps}</ol>
      </div>
      <div class="eyebrow rubric">Mois ${roman(mi + 1)} · ${esc(m.title)} · semaine ${wi + 1}, séance ${si + 1}</div>
      ${content}
      <div class="session-foot">
        ${step > 0 ? `<button class="btn ghost" data-act="goto-step" data-step="${step - 1}" aria-label="Étape précédente">${ICON.back}<span class="lbl">Étape précédente</span></button>` : `<span></span>`}
        ${nextLabel ? `<button class="btn primary" data-act="goto-step" data-step="${step + 1}">${nextLabel}${ICON.next}</button>` : ""}
      </div>
    </div>`;
  }

  function stepReview(f) {
    if (!reviewQueue || reviewQueue.ctx !== f.s.id) {
      reviewQueue = { ctx: f.s.id, ids: dueCards().slice(0, state.settings.reviewLimit).map((c) => c.id), shown: false, done: 0 };
    }
    const intro = `<h1 style="margin:8px 0 6px">Révisions</h1><p class="muted" style="margin:0 0 20px">Cinq minutes pour réactiver ce que vous avez déjà vu, avant d'apprendre du nouveau.</p>`;
    return intro + reviewBlock(reviewQueue, "Toutes vos révisions du jour sont faites.", state.cards.length ? "Aucune fiche à revoir aujourd'hui. Passez directement à la lecture." : "Pas encore de fiches. Elles seront créées à la fin de cette séance, à partir des notions et des questions.");
  }

  function reviewBlock(q, doneMsg, emptyMsg) {
    const cards = q.ids.map((id) => state.cards.find((c) => c.id === id)).filter(Boolean);
    if (!q.ids.length && !q.done) return `<div class="empty"><strong>${esc(emptyMsg)}</strong></div>`;
    if (!cards.length) return `<div class="empty"><strong>${esc(doneMsg)}</strong>${plural(q.done, "fiche revue", "fiches revues")}.</div>`;
    const c = cards[0];
    const origin = c.sid && findSession(c.sid);
    return `<div class="review-meta"><span>${plural(cards.length, "fiche restante", "fiches restantes")}</span><span>${origin ? esc(origin.s.title) : ""}</span></div>
      <div class="review-card">
        <div class="front">${esc(c.front)}</div>
        ${q.shown ? `<div class="back">${md(c.back)}</div>` : ""}
      </div>
      ${q.shown ? `<div class="grade" role="group" aria-label="Évaluer votre réponse">
          <button class="btn again" data-act="grade" data-g="0">À revoir<small>${intervalLabel(c, 0)} · 1</small></button>
          <button class="btn" data-act="grade" data-g="1">Difficile<small>${intervalLabel(c, 1)} · 2</small></button>
          <button class="btn good" data-act="grade" data-g="2">Bien<small>${intervalLabel(c, 2)} · 3</small></button>
          <button class="btn" data-act="grade" data-g="3">Facile<small>${intervalLabel(c, 3)} · 4</small></button></div>`
        : `<div class="row" style="margin-top:16px"><button class="btn primary lg" data-act="reveal" autofocus>Afficher la réponse <span class="kbd">Espace</span></button></div>`}
      <p class="small muted" style="margin-top:14px">Essayez de répondre de tête avant d'afficher la réponse. C'est l'effort de rappel qui fait mémoriser.</p>`;
  }

  function linksBlock(s) {
    if (!s.connections || !s.connections.length) return "";
    return `<div class="aside-block"><h3>Liens</h3><ul class="link-list">${s.connections.map((c) =>
      `<li><button class="node-link" data-act="open-node" data-id="${esc(norm(c.a))}">${esc(c.a)}</button><span class="rel">${esc(c.rel)}</span><button class="node-link" data-act="open-node" data-id="${esc(norm(c.b))}">${esc(c.b)}</button></li>`).join("")}</ul></div>`;
  }
  function notionsBlock(s, f) {
    const items = s.notions.filter((n) => n.def);
    if (!items.length) return "";
    return `<div class="aside-block"><h3>Notions clés</h3><dl class="notions">${items.map((n, i) => {
      const saved = state.notions.some((x) => norm(x.term) === norm(n.term));
      return `<div><dt>${esc(n.term)}</dt><dd>${esc(n.def)}</dd><button class="btn ${saved ? "ghost" : ""} sm save" data-act="save-notion" data-sid="${s.id}" data-i="${s.notions.indexOf(n)}" ${saved ? "disabled" : ""}>${saved ? ICON.check + "Au carnet" : ICON.star + "Garder"}</button></div>`;
    }).join("")}</dl></div>`;
  }
  function sourcesBlock(s, m) {
    const list = (s.sources || []).length ? s.sources : [];
    if (!list.length) return "";
    return `<div class="aside-block"><h3>Pour aller plus loin</h3><ul class="src-list">${list.map((x, i) => `<li><div class="row between" style="flex-wrap:nowrap;align-items:start"><div>${srcItem(x).replace(/^<li>|<\/li>$/g, "")}</div><button class="btn ghost sm" data-act="keep-source" data-sid="${s.id}" data-i="${i}">${(state.reading[norm(x.t)] || {}).status ? "Dans ma liste" : "À lire"}</button></div></li>`).join("")}</ul></div>`;
  }

  function stepReading(f) {
    const { s, m } = f;
    if (s.kind === "debat") {
      return `<h1 style="margin:8px 0 6px">${esc(s.title.replace(/^Débat\s*:\s*/, ""))}</h1>
        <p class="lede">${esc(s.hook)}</p>
        <div class="reading">${md(s.body)}</div>
        ${s.positions.length ? `<div class="positions">${s.positions.map((p) => `<article class="position"><h3>${esc(p.title)}</h3><p>${esc(p.args)}</p></article>`).join("")}</div>`
          : `<div class="panel" style="margin-top:8px"><h3>Comment préparer ce débat</h3><ol class="reading" style="font-size:1.02rem;margin-top:12px">
            <li>Relisez vos notes de la semaine et, si besoin, une ressource du mois ci-dessous.</li>
            <li>Notez au brouillon les deux ou trois meilleurs arguments de chaque camp.</li>
            <li>Repérez l'objection la plus forte contre la position qui vous attire.</li></ol>
            ${s.notions.length ? `<p class="small" style="margin:10px 0 0"><b>Notions utiles :</b> ${s.notions.map((n) => esc(n.term)).join(" · ")}</p>` : ""}</div>
            ${m.sources && m.sources.length ? `<div class="aside-block"><h3>Ressources du mois</h3><ul class="src-list">${m.sources.map(srcItem).join("")}</ul></div>` : ""}`}
        ${notionsBlock(s, f)}${linksBlock(s)}${sourcesBlock(s, m)}`;
    }
    if (s.kind === "guide" || (s.kind === "synthese" && !s.body)) {
      const isSyn = s.kind === "synthese";
      return `<h1 style="margin:8px 0 6px">${esc(s.title)}</h1>
        <p class="lede">${esc(s.hook)}</p>
        ${s.body ? `<div class="reading">${md(s.body)}</div>` : ""}
        <div class="panel" style="margin-top:8px">
          <h3>${isSyn ? "Déroulé conseillé" : "Comment travailler cette séance"}</h3>
          <ol class="reading" style="font-size:1.02rem;margin-top:12px">${isSyn
            ? `<li>Faites le quiz du mois s'il existe (onglet Réviser, section Quiz).</li><li>Ouvrez la page Synthèses et répondez aux questions guidées du mois.</li><li>Revenez ici pour noter en une phrase ce que vous retenez.</li>`
            : `<li>Choisissez une ressource du mois ci-dessous (un chapitre, un épisode, un article) et lisez ou écoutez pendant 12 à 15 minutes.</li><li>Gardez en tête la question : <em>${esc((s.questions[0] || {}).q || "")}</em></li><li>À l'étape suivante, définissez les notions avec vos mots et répondez à la question.</li>`}</ol>
          ${s.notions.length ? `<p class="small" style="margin:10px 0 0"><b>Notions à repérer :</b> ${s.notions.map((n) => esc(n.term)).join(" · ")}</p>` : ""}
          ${isSyn ? `<div class="row" style="margin-top:14px"><button class="btn sm" data-act="open-synth" data-id="${m.id}">${ICON.synth}Ouvrir la synthèse du mois</button>${(state.quizzes[m.id] || []).length ? `<button class="btn sm" data-act="start-quiz" data-id="${m.id}">Faire le quiz</button>` : ""}</div>` : ""}
        </div>
        ${m.sources && m.sources.length ? `<div class="aside-block"><h3>Ressources du mois</h3><ul class="src-list">${m.sources.map(srcItem).join("")}</ul></div>` : ""}
        ${linksBlock(s)}`;
    }
    return `<h1 style="margin:8px 0 6px">${esc(s.title)}</h1>
      <p class="lede">${esc(s.hook)}</p>
      <div class="reading lettrine">${md(s.body)}</div>
      ${s.kind === "synthese" ? `<div class="row" style="margin:6px 0 10px"><button class="btn" data-act="open-synth" data-id="${m.id}">${ICON.synth}Ouvrir la synthèse du mois</button>${(state.quizzes[m.id] || []).length ? `<button class="btn" data-act="start-quiz" data-id="${m.id}">Faire le quiz du mois</button>` : ""}</div>` : ""}
      ${notionsBlock(s, f)}
      ${s.perspective ? `<div class="aside-block"><h3>Mise en perspective</h3><div class="perspective">${md(s.perspective)}</div></div>` : ""}
      ${linksBlock(s)}${sourcesBlock(s, m)}`;
  }

  function stepRecall(f, p) {
    const { s } = f;
    if (s.kind === "debat") {
      const note = sessionNote(s.id, "debat");
      return `<h1 style="margin:8px 0 6px">Votre position</h1>
        <p class="lede" style="font-size:1.1rem">${esc(s.prompt || "Rédigez votre position argumentée.")}</p>
        <label class="field" for="debate-text">Votre argumentation <span class="hint">Enregistrée automatiquement dans votre carnet.</span></label>
        <textarea id="debate-text" class="writing" data-input="debate" data-sid="${s.id}" style="min-height:280px" placeholder="Je pense que… parce que… L'objection la plus forte est… J'y réponds…">${esc(note ? note.body : "")}</textarea>
        ${s.positions.length ? `<details style="margin-top:16px"><summary class="small" style="cursor:pointer">Revoir les deux positions</summary><div class="positions">${s.positions.map((x) => `<article class="position"><h3>${esc(x.title)}</h3><p>${esc(x.args)}</p></article>`).join("")}</div></details>` : ""}`;
    }
    if (s.kind === "guide" || s.kind === "synthese") {
      const q = s.questions[0];
      return `<h1 style="margin:8px 0 6px">${s.kind === "synthese" ? "Ce que je retiens" : "Rappel actif"}</h1>
        <p class="muted" style="margin:0 0 20px">Sans regarder vos sources, écrivez avec vos mots. Ces réponses deviendront des fiches de révision.</p>
        <div class="recall">
          ${q ? `<div class="recall-item"><div class="q">${esc(q.q)}</div><label class="sr-only" for="rq-0">Votre réponse</label>
            <textarea id="rq-0" data-input="recall" data-sid="${s.id}" data-i="0" placeholder="Votre réponse…">${esc((p.recall[0] || {}).text || "")}</textarea></div>` : ""}
          ${s.notions.length ? `<div class="recall-item"><div class="q">Définissez les notions</div>
            ${s.notions.map((n, i) => `<label class="field" for="def-${i}">${esc(n.term)}<input type="text" id="def-${i}" data-input="def" data-sid="${s.id}" data-i="${i}" value="${esc(p.defs[i] != null ? p.defs[i] : n.def)}" placeholder="Définition en une phrase"></label>`).join("")}</div>` : ""}
        </div>`;
    }
    return `<h1 style="margin:8px 0 6px">Rappel actif</h1>
      <p class="muted" style="margin:0 0 20px">Répondez de mémoire, même approximativement, puis comparez. Se tromper ici aide à retenir.</p>
      <div class="recall">${s.questions.map((q, i) => {
        const r = p.recall[i] || {};
        return `<div class="recall-item"><div class="q">${esc(q.q)}</div>
          <label class="sr-only" for="rq-${i}">Votre réponse</label>
          <textarea id="rq-${i}" data-input="recall" data-sid="${s.id}" data-i="${i}" placeholder="Votre réponse de mémoire…">${esc(r.text || "")}</textarea>
          ${r.revealed ? `<div class="answer"><b>Réponse attendue</b>${esc(q.a)}</div>
            <div class="selfrate" role="group" aria-label="Auto-évaluation"><span>Je savais :</span>
              ${["Non", "En partie", "Oui"].map((l, k) => `<button class="chip" aria-pressed="${r.rate === k}" data-act="rate" data-sid="${s.id}" data-i="${i}" data-r="${k}">${l}</button>`).join("")}</div>`
            : `<div><button class="btn sm" data-act="reveal-answer" data-sid="${s.id}" data-i="${i}">Voir la réponse</button></div>`}
        </div>`;
      }).join("")}</div>`;
  }

  function stepBilan(f, p, done) {
    const { s, m } = f;
    const note = sessionNote(s.id, "seance");
    const nb = cardsPreview(f, p).length;
    const nn = s.notions.filter((n, i) => (p.defs && p.defs[i]) || n.def).length;
    return `<h1 style="margin:8px 0 6px">${done ? "Bilan de la séance" : "Bilan"}</h1>
      <p class="muted" style="margin:0 0 20px">Une à trois phrases : l'idée principale, un lien avec autre chose, une question qui reste.</p>
      <label class="field" for="session-note">Ma note de séance <span class="hint">Enregistrée automatiquement dans le carnet.</span></label>
      <textarea id="session-note" class="writing" data-input="session-note" data-sid="${s.id}" placeholder="Ce que je retiens…">${esc(note ? note.body : "")}</textarea>
      <details class="panel" style="margin-top:18px">
        <summary style="cursor:pointer;font-weight:700">Relier cette séance à une autre idée</summary>
        <div class="stack" style="margin-top:12px">${linkForm("sess", s.id)}</div>
      </details>
      ${done ? `<p class="small muted" style="margin-top:20px">Séance terminée le ${fmtDate(p.doneAt)}${p.minutes ? `, en ${p.minutes} min` : ""}.</p>
        <div class="row" style="margin-top:10px"><button class="btn" data-act="reopen-session" data-id="${s.id}">Marquer comme non faite</button><a class="btn primary" href="#aujourdhui">Retour à l'accueil</a></div>`
      : `<div class="panel" style="margin-top:18px">
          <label class="row" style="gap:10px;cursor:pointer"><input type="checkbox" id="auto-cards" data-input="autocards" ${state.settings.autoCards ? "checked" : ""}>
            <span>Créer ${plural(nb, "fiche", "fiches")} de révision et garder ${plural(nn, "notion", "notions")} au carnet</span></label>
          <div class="row" style="margin-top:16px"><button class="btn primary lg" data-act="finish-session" data-id="${s.id}">${ICON.check}Terminer la séance</button></div>
        </div>`}`;
  }

  function cardsPreview(f, p) {
    const { s } = f;
    const out = [];
    s.notions.forEach((n, i) => {
      const def = (p.defs && p.defs[i]) || n.def;
      if (def) out.push({ src: s.id + ":n:" + i, front: "Définissez : " + n.term, back: def });
    });
    s.questions.forEach((q, i) => {
      const ans = q.a || ((p.recall[i] || {}).text || "").trim();
      if (q.q && ans) out.push({ src: s.id + ":q:" + i, front: q.q, back: ans });
    });
    return out;
  }

  function finishSession(sid) {
    const f = findSession(sid); if (!f) return;
    const p = ensureProgress(sid);
    let created = 0;
    if (state.settings.autoCards) {
      f.s.notions.forEach((n, i) => { const def = (p.defs && p.defs[i]) || n.def; if (def) addNotionOnce(n.term, def, f.m.id, sid); });
      cardsPreview(f, p).forEach((c) => { if (addCardOnce(c.src, c.front, c.back, f.m.id, sid)) created++; });
    }
    p.status = "done"; p.doneAt = new Date().toISOString(); p.step = 3;
    p.minutes = Math.max(1, Math.round((p.elapsed || 0) / 60));
    state.log.push({ date: today(), sid, minutes: p.minutes });
    stopTimer(); reviewQueue = null;
    save(true);
    const nx = nextSession();
    state.ui.relireStep = 3;
    refresh();
    openDialog(`<h2 id="dlg-title">Séance terminée</h2>
      <p>${p.minutes} minutes${created ? `, ${plural(created, "nouvelle fiche", "nouvelles fiches")} de révision` : ""}. Elle sera reproposée à votre mémoire au bon moment.</p>
      ${nx ? `<p class="small muted">Prochaine séance : <b>${esc(nx.s.title)}</b></p>` : ""}
      <div class="row end"><button class="btn ghost" data-act="dlg-close">Rester ici</button><a class="btn primary" href="#aujourdhui" data-act="dlg-close">Retour à l'accueil</a></div>`);
  }

  /* =========================================================
     VUE : Réviser (fiches + quiz)
     ========================================================= */
  let freeQueue = null, quizRun = null;
  function viewReview() {
    const tab = state.ui.reviseTab || "fiches";
    const tabs = `<div class="tabs" role="tablist">${[["fiches", "Fiches du jour"], ["quiz", "Quiz"], ["gerer", "Toutes les fiches"]].map(([id, l]) => `<button role="tab" aria-selected="${tab === id}" data-act="revise-tab" data-id="${id}">${l}</button>`).join("")}</div>`;
    let body = "";
    if (tab === "fiches") {
      if (!freeQueue) freeQueue = { ctx: "free", ids: dueCards().map((c) => c.id), shown: false, done: 0 };
      const upcoming = state.cards.filter((c) => c.due > today()).sort((a, b) => a.due.localeCompare(b.due));
      body = `<div class="narrow">${reviewBlock(freeQueue, "Révisions du jour terminées.", state.cards.length ? "Rien à revoir aujourd'hui." : "Aucune fiche pour l'instant. Elles se créent à la fin de chaque séance, ou dans l'onglet « Toutes les fiches ».")}
        ${upcoming.length ? `<p class="small muted" style="margin-top:24px">Prochaine révision : ${fmtDate(upcoming[0].due, { weekday: "long", day: "numeric", month: "long" })} (${plural(upcoming.filter((c) => c.due === upcoming[0].due).length, "fiche", "fiches")}).</p>` : ""}</div>`;
    } else if (tab === "quiz") body = viewQuiz();
    else body = viewCards();
    return `<div class="wrap"><header class="page-head"><div><h1>Réviser</h1><p>Les fiches reviennent à des intervalles croissants : plus vous les connaissez, plus elles s'espacent.</p></div></header>${tabs}${body}</div>`;
  }

  function viewQuiz() {
    if (quizRun) {
      const q = quizRun.items[quizRun.i];
      if (!q) {
        return `<div class="narrow panel"><h2>Quiz terminé</h2><p style="font-size:1.2rem" class="num">${quizRun.score} bonnes réponses sur ${quizRun.items.length}.</p>
          <p class="muted">Les erreurs ne sont pas des échecs : relisez l'explication et la séance concernée. Vous pouvez refaire ce quiz quand vous voulez.</p>
          <div class="row"><button class="btn primary" data-act="start-quiz" data-id="${quizRun.mid}">Recommencer</button><button class="btn" data-act="quit-quiz">Fermer</button></div></div>`;
      }
      const ans = quizRun.answer;
      return `<div class="narrow"><div class="review-meta"><span>Question ${quizRun.i + 1} sur ${quizRun.items.length}</span><span>${esc(quizRun.title)}</span></div>
        <div class="review-card"><div class="front">${esc(q.q)}</div>
          <div>${q.c.map((c, k) => `<button class="quiz-opt ${ans != null ? (k === q.a ? "right" : k === ans ? "wrong" : "") : ""}" data-act="quiz-answer" data-k="${k}" ${ans != null ? "disabled" : ""}>${esc(c)}</button>`).join("")}</div>
          ${ans != null ? `<div class="answer"><b>${ans === q.a ? "Exact" : "Pas tout à fait"}</b>${esc(q.e || "")}</div>` : ""}
        </div>
        <div class="row between" style="margin-top:14px"><button class="btn ghost" data-act="quit-quiz">Arrêter</button>${ans != null ? `<button class="btn primary" data-act="quiz-next">Question suivante${ICON.next}</button>` : ""}</div></div>`;
    }
    const rows = state.months.map((m, i) => {
      const qs = state.quizzes[m.id] || [];
      const last = state.quizLog.filter((l) => l.mid === m.id).slice(-1)[0];
      return `<li class="item"><div class="row between"><div><div class="t">Mois ${roman(i + 1)} · ${esc(m.title)}</div>
        <div class="m">${plural(qs.length, "question", "questions")}${last ? ` · dernier essai : ${last.score}/${last.total} le ${fmtDate(last.date, { day: "numeric", month: "short" })}` : ""}</div></div>
        <div class="row">${qs.length ? `<button class="btn sm primary" data-act="start-quiz" data-id="${m.id}">Lancer</button>` : ""}<button class="btn sm" data-act="add-quiz-q" data-id="${m.id}">${ICON.plus}Ajouter une question</button></div></div></li>`;
    }).join("");
    return `<p class="muted">Un quiz par mois, à faire en fin de mois ou quand vous voulez. Seul le mois 1 est fourni ; ajoutez vos propres questions au fil de vos lectures.</p><ul class="list">${rows}</ul>`;
  }

  function viewCards() {
    const qText = state.ui.cardSearch || "";
    const list = state.cards.filter((c) => !qText || norm(c.front + " " + c.back).includes(norm(qText)));
    return `<div class="toolbar"><label class="sr-only" for="card-search">Rechercher une fiche</label><input type="search" id="card-search" data-input="card-search" placeholder="Rechercher dans ${plural(state.cards.length, "fiche", "fiches")}" value="${esc(qText)}">
      <button class="btn primary" data-act="new-card">${ICON.plus}Nouvelle fiche</button></div>
      ${list.length ? `<ul class="list">${list.slice(0, 300).map((c) => `<li><button class="item clickable" data-act="edit-card" data-id="${c.id}"><span class="t">${esc(c.front)}</span><span class="ex">${esc(c.back)}</span>
        <span class="m"><span>prochaine révision : ${c.due <= today() ? "aujourd'hui" : fmtDate(c.due, { day: "numeric", month: "short" })}</span><span>· ${plural(c.reps, "révision réussie", "révisions réussies")} d'affilée</span></span></button></li>`).join("")}</ul>`
      : `<div class="empty"><strong>Aucune fiche${qText ? " ne correspond" : ""}.</strong>${qText ? "" : "Créez-en une, ou terminez une séance."}</div>`}`;
  }

  /* =========================================================
     VUE : Carnet (notes, notions, sources)
     ========================================================= */
  function viewCarnet() {
    const tab = state.ui.carnetTab || "notes";
    const tabs = `<div class="tabs" role="tablist">${[["notes", "Notes", state.notes.length], ["notions", "Notions", state.notions.length]].map(([id, l, n]) => `<button role="tab" aria-selected="${tab === id}" data-act="carnet-tab" data-id="${id}">${l} <span class="muted num">${n}</span></button>`).join("")}</div>`;
    const qText = state.ui.carnetSearch || "";
    const match = (s) => !qText || norm(s).includes(norm(qText));
    const monthName = (mid) => { const m = state.months.find((x) => x.id === mid); return m ? m.title : ""; };
    let body = "";
    if (tab === "notes") {
      const list = state.notes.filter((n) => match(n.title + " " + n.body)).sort((a, b) => (b.updated || b.created).localeCompare(a.updated || a.created));
      body = `<div class="toolbar"><label class="sr-only" for="carnet-search">Rechercher</label><input type="search" id="carnet-search" data-input="carnet-search" placeholder="Rechercher dans le carnet" value="${esc(qText)}"><button class="btn primary" data-act="new-note">${ICON.plus}Nouvelle note</button></div>
        ${list.length ? `<ul class="list">${list.map((n) => `<li><button class="item clickable" data-act="edit-note" data-id="${n.id}"><span class="t">${esc(n.title || "Sans titre")}</span><span class="ex">${esc(n.body)}</span>
          <span class="m">${n.kind === "debat" ? '<span class="tag debat">Débat</span>' : n.kind === "seance" ? '<span class="tag cours">Séance</span>' : '<span class="tag">Note libre</span>'}<span>${esc(monthName(n.mid))}</span><span>${fmtDate((n.updated || n.created), { day: "numeric", month: "short" })}</span></span></button></li>`).join("")}</ul>`
        : `<div class="empty"><strong>${qText ? "Aucune note ne correspond." : "Pas encore de notes."}</strong>${qText ? "" : "Vos notes de séance et vos positions de débat s'enregistrent ici automatiquement."}</div>`}`;
    } else if (tab === "notions") {
      const list = state.notions.filter((n) => match(n.term + " " + n.def)).sort((a, b) => a.term.localeCompare(b.term, "fr"));
      body = `<div class="toolbar"><label class="sr-only" for="carnet-search">Rechercher</label><input type="search" id="carnet-search" data-input="carnet-search" placeholder="Rechercher une notion" value="${esc(qText)}"><button class="btn primary" data-act="new-notion">${ICON.plus}Nouvelle notion</button></div>
        ${list.length ? `<dl class="notions">${list.map((n) => `<div><dt>${esc(n.term)}</dt><dd>${esc(n.def || "Définition à compléter")}${n.mid ? ` <span class="muted small">· ${esc(monthName(n.mid))}</span>` : ""}</dd><button class="icon-btn save" data-act="edit-notion" data-id="${n.id}" aria-label="Modifier ${esc(n.term)}">${ICON.edit}</button></div>`).join("")}</dl>`
        : `<div class="empty"><strong>${qText ? "Aucune notion ne correspond." : "Votre glossaire est vide."}</strong>${qText ? "" : "Les notions des séances terminées s'y ajoutent, ou cliquez sur « Garder » pendant la lecture."}</div>`}`;
    }
    return `<div class="wrap"><header class="page-head"><div><h1>Carnet</h1><p>Vos notes et votre glossaire. Ce que vous écrivez ici reste à vous : tout s'exporte en Markdown depuis « Données ».</p></div></header>${tabs}${body}</div>`;
  }

  /* =========================================================
     VUE : Bibliothèque
     ========================================================= */
  const READ_STATUS = { lire: "À lire", cours: "En cours", lu: "Lu" };
  function catalog() {
    const out = [], seen = {};
    const push = (b) => { if (!b.t || seen[b.key]) return; seen[b.key] = 1; out.push(b); };
    state.months.forEach((m) => {
      (m.sources || []).forEach((x) => push({ key: norm(x.t), t: x.t, a: x.a, note: x.note, url: x.url, mid: m.id }));
      m.weeks.forEach((w) => w.sessions.forEach((se) => (se.sources || []).forEach((x) => push({ key: norm(x.t), t: x.t, a: x.a, note: x.note, url: x.url, mid: m.id, sid: se.id }))));
    });
    state.sources.forEach((x) => push({ key: x.id, t: x.t, a: x.a, note: x.note, url: x.url, mid: x.mid, mine: true }));
    return out;
  }
  function hasFiche(r) { return !!(r && (r.central || r.keep || r.quote || r.links)); }
  function viewLibrary() {
    const books = catalog();
    const f = state.ui.libFilter || "";
    const qText = state.ui.libSearch || "";
    const counts = { lire: 0, cours: 0, lu: 0 };
    books.forEach((b) => { const st = (state.reading[b.key] || {}).status; if (st) counts[st]++; });
    const visible = books.filter((b) => {
      const st = (state.reading[b.key] || {}).status;
      if (f === "mine" ? !b.mine : f && st !== f) return false;
      return !qText || norm(b.t + " " + (b.a || "")).includes(norm(qText));
    });
    const shelves = state.months.map((m, i) => ({ m, i, list: visible.filter((b) => b.mid === m.id) })).filter((x) => x.list.length);
    const orphans = visible.filter((b) => !state.months.some((m) => m.id === b.mid));
    const row = (b) => {
      const r = state.reading[b.key] || {};
      return `<li class="book ${r.status ? "st-" + r.status : ""}">
        <div class="bt">${b.url ? `<a href="${esc(b.url)}" target="_blank" rel="noopener">${esc(b.t)}</a>` : esc(b.t)}</div>
        ${b.a ? `<div class="ba">${esc(b.a)}</div>` : ""}
        ${b.note ? `<div class="bn">${esc(b.note)}</div>` : ""}
        <div class="acts">
          <label class="sr-only" for="rs-${esc(b.key)}">Statut de lecture</label>
          <select id="rs-${esc(b.key)}" data-input="read-status" data-key="${esc(b.key)}"><option value="">Pas dans ma liste</option>${Object.entries(READ_STATUS).map(([k, l]) => `<option value="${k}" ${r.status === k ? "selected" : ""}>${l}</option>`).join("")}</select>
          <button class="btn sm ${hasFiche(r) ? "fiche-on" : ""}" data-act="open-fiche" data-key="${esc(b.key)}">${hasFiche(r) ? ICON.check : ICON.edit}Fiche de lecture</button>
          ${b.mine ? `<button class="icon-btn" data-act="edit-source" data-id="${esc(b.key)}" aria-label="Modifier ${esc(b.t)}">${ICON.edit}</button>` : ""}
        </div></li>`;
    };
    const chips = [["", "Tous", books.length], ["lire", "À lire", counts.lire], ["cours", "En cours", counts.cours], ["lu", "Lus", counts.lu], ["mine", "Mes ajouts", state.sources.length]];
    return `<div class="wrap" style="max-width:900px"><header class="page-head"><div><span class="eyebrow rubric">Douze rayons, un par mois</span><h1>Bibliothèque</h1>
        <p>Les ouvrages et ressources du parcours, rangés par thème. Choisissez vos lectures, suivez-les, et gardez de chacune une fiche : l'idée centrale, ce que vous retenez, une citation.</p></div>
        <button class="btn primary" data-act="new-source">${ICON.plus}Ajouter un livre</button></header>
      <div class="toolbar"><label class="sr-only" for="lib-search">Rechercher un livre</label><input type="search" id="lib-search" data-input="lib-search" placeholder="Rechercher un titre ou un auteur" value="${esc(qText)}"></div>
      <div class="chips" style="margin-bottom:28px">${chips.map(([k, l, n]) => `<button class="chip" aria-pressed="${f === k}" data-act="lib-filter" data-id="${k}">${l} <span class="num">${n}</span></button>`).join("")}</div>
      ${shelves.map(({ m, i, list }) => `<section class="shelf" aria-labelledby="sh-${m.id}"><div class="shelf-head"><span class="num-roman">${roman(i + 1)}</span><h2 id="sh-${m.id}">${esc(m.title)}</h2><span class="muted">${plural(list.length, "ouvrage", "ouvrages")}</span></div><ul class="books">${list.map(row).join("")}</ul></section>`).join("")}
      ${orphans.length ? `<section class="shelf"><div class="shelf-head"><span class="num-roman">·</span><h2>Hors parcours</h2></div><ul class="books">${orphans.map(row).join("")}</ul></section>` : ""}
      ${!shelves.length && !orphans.length ? `<div class="empty"><strong>${f || qText ? "Aucun livre ne correspond." : "La bibliothèque est vide."}</strong>${f === "lire" ? "Choisissez « À lire » à côté d'un ouvrage pour l'ajouter à votre liste." : ""}</div>` : ""}
    </div>`;
  }
  function ficheDialog(key) {
    const b = catalog().find((x) => x.key === key); if (!b) return;
    const r = state.reading[key] || {};
    openDialog(`<span class="eyebrow rubric">Fiche de lecture</span><h2 id="dlg-title" style="font-style:italic;margin-top:-6px">${esc(b.t)}</h2>${b.a ? `<p class="muted" style="margin:-8px 0 0">${esc(b.a)}</p>` : ""}
      <label class="field" for="fi-central">L'idée centrale, en une phrase<input type="text" id="fi-central" value="${esc(r.central || "")}" autofocus></label>
      <label class="field" for="fi-keep">Ce que je retiens <span class="hint">Trois idées, avec vos mots. Markdown possible.</span><textarea id="fi-keep" class="writing" style="min-height:150px">${esc(r.keep || "")}</textarea></label>
      <label class="field" for="fi-quote">Une citation à garder<textarea id="fi-quote" style="min-height:70px">${esc(r.quote || "")}</textarea></label>
      <label class="field" for="fi-links">Liens avec d'autres lectures ou séances<textarea id="fi-links" style="min-height:70px">${esc(r.links || "")}</textarea></label>
      <label class="row" style="gap:8px"><input type="checkbox" id="fi-card" ${r.carded ? "disabled checked" : "checked"}><span>${r.carded ? "Fiche de révision déjà créée" : "Créer une fiche de révision avec l'idée centrale"}</span></label>
      <div class="row end"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Enregistrer</button></div>`, {
      save: () => {
        const rr = state.reading[key] = state.reading[key] || {};
        Object.assign(rr, { central: $("#fi-central").value.trim(), keep: $("#fi-keep").value, quote: $("#fi-quote").value.trim(), links: $("#fi-links").value.trim(), updated: new Date().toISOString() });
        if (!rr.status && hasFiche(rr)) rr.status = "cours";
        if (!rr.carded && $("#fi-card").checked && rr.central) { state.cards.push(newCard("Idée centrale de « " + b.t + " »" + (b.a ? " (" + b.a + ")" : "") + " ?", rr.central, { mid: b.mid })); rr.carded = true; }
        save(); closeDialog(); refresh(); toast("Fiche de lecture enregistrée.");
      }
    });
  }

  /* =========================================================
     VUE : Liens
     ========================================================= */
  function viewLinks() {
    const g = state.graph;
    const nodes = Object.values(g.nodes);
    const deg = {};
    g.edges.forEach((e) => { deg[e.a] = (deg[e.a] || 0) + 1; deg[e.b] = (deg[e.b] || 0) + 1; });
    const ft = state.ui.nodeType || "";
    const qText = state.ui.nodeSearch || "";
    const list = nodes.filter((n) => (!ft || n.type === ft) && (!qText || norm(n.label).includes(norm(qText)))).sort((a, b) => (deg[b.id] || 0) - (deg[a.id] || 0) || a.label.localeCompare(b.label, "fr"));
    const sel = g.nodes[state.ui.nodeId] || null;
    const left = `<div>
      <div class="toolbar"><label class="sr-only" for="node-search">Rechercher</label><input type="search" id="node-search" data-input="node-search" placeholder="Rechercher parmi ${nodes.length} éléments" value="${esc(qText)}"></div>
      <div class="chips" style="margin-bottom:12px"><button class="chip" aria-pressed="${!ft}" data-act="node-type" data-id="">Tout</button>${Object.entries(NODE_TYPES).map(([k, l]) => `<button class="chip" aria-pressed="${ft === k}" data-act="node-type" data-id="${k}">${l}</button>`).join("")}</div>
      <ul class="list" style="max-height:70vh;overflow:auto;padding-right:4px">${list.slice(0, 400).map((n) => `<li><button class="item clickable" data-act="open-node" data-id="${esc(n.id)}" ${sel && sel.id === n.id ? 'style="border-color:var(--lapis)"' : ""}>
        <span class="row" style="gap:8px;flex-wrap:nowrap"><span class="type-dot" style="background:${TYPE_COLOR[n.type]}"></span><span class="t">${esc(n.label)}</span><span class="muted small num" style="margin-left:auto">${deg[n.id] || 0}</span></span></button></li>`).join("") || `<li class="empty">Aucun élément.</li>`}</ul>
      <button class="btn" style="margin-top:12px;width:100%" data-act="new-node">${ICON.plus}Nouvel élément</button></div>`;

    let right;
    if (!sel) {
      right = `<div class="panel"><h2>Relier les savoirs</h2><p style="color:var(--ink-2)">Chaque séance relie des personnes, des œuvres, des événements, des idées, des lieux et des disciplines. Choisissez un élément à gauche pour voir ses liens, ou créez les vôtres.</p>
        <p class="small muted">${plural(nodes.length, "élément", "éléments")} et ${plural(g.edges.length, "lien", "liens")} pour l'instant.</p></div>`;
    } else {
      const edges = g.edges.filter((e) => e.a === sel.id || e.b === sel.id);
      right = `<div class="stack lg">
        <div><div class="row between"><span class="row" style="gap:8px"><span class="type-dot" style="background:${TYPE_COLOR[sel.type]}"></span><span class="eyebrow">${NODE_TYPES[sel.type]}</span></span>
          <span class="row"><button class="btn ghost sm" data-act="edit-node" data-id="${esc(sel.id)}">${ICON.edit}Modifier</button></span></div>
          <h2 style="font-size:1.6rem;margin-top:6px">${esc(sel.label)}</h2>${sel.note ? `<p style="color:var(--ink-2)">${esc(sel.note)}</p>` : ""}</div>
        ${edges.length ? `<div class="graph-wrap">${egoGraph(sel, edges)}</div>` : ""}
        <div><h3 class="eyebrow" style="font-family:var(--sans);margin-bottom:10px">${plural(edges.length, "lien", "liens")}</h3>
          <ul class="link-list">${edges.map((e) => { const other = g.nodes[e.a === sel.id ? e.b : e.a]; if (!other) return ""; const f = e.sid && findSession(e.sid);
            return `<li>${e.a === sel.id ? `<span class="rel">${esc(e.rel)}</span><button class="node-link" data-act="open-node" data-id="${esc(other.id)}">${esc(other.label)}</button>` : `<button class="node-link" data-act="open-node" data-id="${esc(other.id)}">${esc(other.label)}</button><span class="rel">${esc(e.rel)}</span><span>${esc(sel.label)}</span>`}
              ${f ? `<button class="btn ghost sm" data-act="open-session" data-id="${f.s.id}" title="Ouvrir la séance">séance : ${esc(f.s.title)}</button>` : ""}<button class="icon-btn" data-act="delete-edge" data-id="${e.id}" aria-label="Supprimer ce lien">${ICON.close}</button></li>`; }).join("")}</ul></div>
        <div class="panel"><h3>Ajouter un lien</h3><div class="stack" style="margin-top:12px">${linkForm("node", sel.id)}</div></div>
      </div>`;
    }
    return `<div class="wrap"><header class="page-head"><div><h1>Liens</h1><p>La carte de vos connaissances : ce qui relie une idée, un événement, une œuvre et une discipline.</p></div></header>
      <div class="split">${left}<div>${right}</div></div>
      <datalist id="node-labels">${nodes.map((n) => `<option value="${esc(n.label)}">`).join("")}</datalist></div>`;
  }
  function linkForm(ctx, id) {
    return `<div class="grid-2" style="grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">
      ${ctx === "sess" ? `<label class="field" for="lf-a">De<input type="text" id="lf-a" list="node-labels-all" placeholder="ex. Hammurabi"></label>` : ""}
      <label class="field" for="lf-rel">Relation<input type="text" id="lf-rel" placeholder="ex. influence, s'oppose à"></label>
      <label class="field" for="lf-b">Vers<input type="text" id="lf-b" list="node-labels-all" placeholder="Élément existant ou nouveau"></label>
      <label class="field" for="lf-type">Type (si nouveau)<select id="lf-type">${Object.entries(NODE_TYPES).map(([k, l]) => `<option value="${k}" ${k === "idee" ? "selected" : ""}>${l}</option>`).join("")}</select></label></div>
      <datalist id="node-labels-all">${Object.values(state.graph.nodes).map((n) => `<option value="${esc(n.label)}">`).join("")}</datalist>
      <div><button class="btn sm primary" data-act="add-edge" data-ctx="${ctx}" data-id="${esc(id)}">${ICON.plus}Relier</button></div>`;
  }
  function egoGraph(sel, edges) {
    const W = 760, H = 380, cx = W / 2, cy = H / 2;
    const others = edges.slice(0, 16).map((e) => ({ e, n: state.graph.nodes[e.a === sel.id ? e.b : e.a] })).filter((x) => x.n);
    const R = Math.min(150, 70 + others.length * 8);
    const trunc = (s, k) => s.length > k ? s.slice(0, k - 1) + "…" : s;
    const parts = others.map((o, i) => {
      const ang = -Math.PI / 2 + (i / others.length) * Math.PI * 2;
      const x = cx + Math.cos(ang) * R * 1.45, y = cy + Math.sin(ang) * R;
      const anchor = Math.abs(Math.cos(ang)) < 0.2 ? "middle" : Math.cos(ang) > 0 ? "start" : "end";
      const dx = anchor === "start" ? 10 : anchor === "end" ? -10 : 0;
      const dy = anchor === "middle" ? (Math.sin(ang) > 0 ? 20 : -12) : 4;
      return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--line)" stroke-width="1.5"/>
        <g data-act="open-node" data-id="${esc(o.n.id)}" style="cursor:pointer" role="button" tabindex="0" aria-label="${esc(o.n.label)}"><circle cx="${x}" cy="${y}" r="6" fill="${TYPE_COLOR[o.n.type]}"/>
        <text x="${x + dx}" y="${y + dy}" font-size="12" text-anchor="${anchor}">${esc(trunc(o.n.label, 22))}</text></g>`;
    }).join("");
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Liens de ${esc(sel.label)}">${parts}
      <circle cx="${cx}" cy="${cy}" r="11" fill="${TYPE_COLOR[sel.type]}"/><text x="${cx}" y="${cy + 30}" font-size="14" font-weight="700" text-anchor="middle">${esc(trunc(sel.label, 34))}</text></svg>`;
  }
  function addEdge(aLabel, rel, bLabel, type, sid) {
    const g = state.graph;
    const ensure = (label, t) => { const k = norm(label); if (!k) return null; if (!g.nodes[k]) g.nodes[k] = { id: k, label: label.trim(), type: t || "idee", note: "" }; return k; };
    const a = ensure(aLabel, "idee"), b = ensure(bLabel, type);
    if (!a || !b || a === b) return null;
    g.edges.push({ id: uid(), a, b, rel: rel.trim() || "est lié à", sid: sid || null });
    return b;
  }

  /* =========================================================
     VUE : Synthèses
     ========================================================= */
  function viewSyntheses() {
    const m = state.months.find((x) => x.id === state.ui.synthMonth) || currentMonth();
    state.ui.synthMonth = m.id;
    const syn = state.syntheses[m.id] || { answers: [], free: "" };
    const notions = state.notions.filter((n) => n.mid === m.id);
    const notes = state.notes.filter((n) => n.mid === m.id);
    const prompts = m.synthesisPrompts && m.synthesisPrompts.length ? m.synthesisPrompts : ["Quelle est l'idée centrale que vous retenez de ce mois ?", "Quelle question reste ouverte ?"];
    return `<div class="wrap"><header class="page-head"><div><h1>Synthèses</h1><p>Une synthèse par mois, avec vos mots. Ce n'est pas un examen : c'est là que les connaissances deviennent les vôtres.</p></div>
      <label class="field" for="synth-month" style="min-width:240px">Mois<select id="synth-month" data-input="synth-month">${state.months.map((mm, i) => `<option value="${mm.id}" ${mm.id === m.id ? "selected" : ""}>${i + 1}. ${esc(mm.title)}${state.syntheses[mm.id] && state.syntheses[mm.id].updated ? " ✓" : ""}</option>`).join("")}</select></label></header>
      <div class="split" style="grid-template-columns:minmax(0,1fr) minmax(0,300px)">
        <div class="stack lg">
          ${prompts.map((p, i) => `<label class="field" for="syn-${i}"><span style="font-family:var(--serif);font-size:1.1rem;color:var(--ink);font-weight:600">${esc(p)}</span>
            <textarea id="syn-${i}" class="writing" style="min-height:120px" data-input="synth" data-mid="${m.id}" data-i="${i}">${esc(syn.answers[i] || "")}</textarea></label>`).join("")}
          <label class="field" for="syn-free"><span style="font-family:var(--serif);font-size:1.1rem;color:var(--ink);font-weight:600">Synthèse libre</span>
            <textarea id="syn-free" class="writing" style="min-height:220px" data-input="synth" data-mid="${m.id}" data-i="free" placeholder="Rédigez ici une synthèse d'une page, en reliant les séances entre elles.">${esc(syn.free || "")}</textarea></label>
          <p class="small muted">${syn.updated ? `Enregistrée le ${fmtDate(syn.updated)}.` : "Enregistrement automatique."}</p>
        </div>
        <aside class="stack">
          <div class="panel"><h3>Vos notions du mois</h3>${notions.length ? `<ul class="link-list" style="margin-top:10px">${notions.map((n) => `<li><b>${esc(n.term)}</b></li>`).join("")}</ul>` : `<p class="small muted">Aucune encore.</p>`}</div>
          <div class="panel"><h3>Vos notes du mois</h3>${notes.length ? `<ul class="link-list" style="margin-top:10px">${notes.map((n) => `<li><button class="node-link" data-act="edit-note" data-id="${n.id}">${esc(n.title)}</button></li>`).join("")}</ul>` : `<p class="small muted">Aucune encore.</p>`}</div>
        </aside>
      </div></div>`;
  }

  /* =========================================================
     VUE : Données et réglages
     ========================================================= */
  function viewSettings() {
    const st = state.settings;
    const doneCount = Object.values(state.progress).filter((p) => p.status === "done").length;
    let size = 0; try { size = new Blob([JSON.stringify(state)]).size; } catch (e) { /* ignore */ }
    return `<div class="wrap narrow" style="max-width:820px"><header class="page-head"><div><h1>Données et réglages</h1><p>Vos données restent dans ce navigateur, sur cet appareil. Sauvegardez-les régulièrement dans un fichier.</p></div></header>
      <div class="stack lg">
      <section class="panel stack" aria-labelledby="bk-t">
        <h2 id="bk-t">Sauvegarde</h2>
        <p class="small" style="margin:0;color:var(--ink-2)">${state.lastBackup ? `Dernière sauvegarde : ${fmtDate(state.lastBackup)}.` : "Aucune sauvegarde pour l'instant."} ${plural(doneCount, "séance faite", "séances faites")}, ${plural(state.notes.length, "note", "notes")}, ${plural(state.cards.length, "fiche", "fiches")} (${Math.round(size / 1024)} Ko).</p>
        <div class="row">
          <button class="btn primary" data-act="export-json">${ICON.download}Sauvegarder (fichier JSON)</button>
          <label class="btn" for="import-file" style="cursor:pointer">${ICON.upload}Restaurer une sauvegarde</label>
          <input type="file" id="import-file" accept=".json,application/json" data-input="import-file" class="sr-only">
          <button class="btn ghost" data-act="paste-import">Coller une sauvegarde</button>
        </div>
        <p class="hint">Pour passer à un autre appareil : sauvegardez ici, puis restaurez le fichier sur l'autre appareil. La restauration remplace toutes les données actuelles.</p>
      </section>
      <section class="panel stack" aria-labelledby="ex-t">
        <h2 id="ex-t">Exporter</h2>
        <div class="row">
          <button class="btn" data-act="export-md">${ICON.download}Notes, notions, synthèses (Markdown)</button>
          <button class="btn" data-act="export-csv">${ICON.download}Fiches (CSV pour Anki)</button>
        </div>
        <p class="hint">Le Markdown s'ouvre dans n'importe quel éditeur de texte, Obsidian ou Notion. Le CSV s'importe dans Anki (séparateur : point-virgule).</p>
      </section>
      <section class="panel stack" aria-labelledby="pref-t">
        <h2 id="pref-t">Préférences</h2>
        <div class="grid-2">
          <label class="field" for="pref-theme">Apparence<select id="pref-theme" data-input="pref" data-k="theme"><option value="system" ${st.theme === "system" ? "selected" : ""}>Comme le système</option><option value="light" ${st.theme === "light" ? "selected" : ""}>Clair</option><option value="dark" ${st.theme === "dark" ? "selected" : ""}>Sombre</option></select></label>
          <label class="field" for="pref-size">Taille du texte<select id="pref-size" data-input="pref" data-k="size"><option value="s" ${st.size === "s" ? "selected" : ""}>Petite</option><option value="m" ${st.size === "m" ? "selected" : ""}>Normale</option><option value="l" ${st.size === "l" ? "selected" : ""}>Grande</option></select></label>
          <label class="field" for="pref-limit">Fiches maximum en début de séance<select id="pref-limit" data-input="pref" data-k="reviewLimit">${[5, 10, 15, 20, 30].map((n) => `<option value="${n}" ${st.reviewLimit === n ? "selected" : ""}>${n}</option>`).join("")}</select></label>
          <label class="field" for="pref-start">Début du challenge<input type="date" id="pref-start" data-input="pref" data-k="startDate" value="${esc(st.startDate)}"></label>
        </div>
        <label class="row" style="gap:10px;cursor:pointer"><input type="checkbox" id="pref-auto" data-input="pref" data-k="autoCards" ${st.autoCards ? "checked" : ""}><span>Créer automatiquement les fiches et les notions en fin de séance</span></label>
      </section>
      <section class="panel stack" aria-labelledby="dz-t">
        <h2 id="dz-t">Réinitialiser</h2>
        <p class="small" style="margin:0;color:var(--ink-2)">Ces actions sont définitives. Sauvegardez avant.</p>
        <div class="row"><button class="btn danger" data-act="reset-path">Remettre le parcours d'origine (garde notes et fiches)</button><button class="btn danger" data-act="reset-all">Tout effacer</button></div>
      </section>
      </div></div>`;
  }

  function viewPlus() {
    return `<div class="wrap narrow"><header class="page-head"><h1>Plus</h1></header>
      <ul class="list">
        <li><a class="item clickable" href="#bibliotheque" style="text-decoration:none"><span class="t">Bibliothèque</span><span class="ex">Les livres du parcours, vos lectures et vos fiches de lecture.</span></a></li>
        <li><a class="item clickable" href="#liens" style="text-decoration:none"><span class="t">Liens</span><span class="ex">La carte des idées, événements, œuvres et disciplines.</span></a></li>
        <li><a class="item clickable" href="#syntheses" style="text-decoration:none"><span class="t">Synthèses</span><span class="ex">Une synthèse guidée par mois.</span></a></li>
        <li><a class="item clickable" href="#reglages" style="text-decoration:none"><span class="t">Données et réglages</span><span class="ex">Sauvegarde, restauration, export, apparence.</span></a></li>
      </ul></div>`;
  }

  /* ---------- Exports ---------- */
  /* Dans la visionneuse claude.ai, les téléchargements passent par la capacité « downloads ». */
  const inClaudeViewer = !!(window.claude && typeof window.claude.use === "function");
  let claudeDownloads = null;
  if (inClaudeViewer) window.claude.use("downloads").then((d) => { claudeDownloads = d; }).catch(() => { /* indisponible */ });
  function offerFile(filename, mime, text, title) {
    let url = null;
    try { url = URL.createObjectURL(new Blob([text], { type: mime })); } catch (e) { /* ignore */ }
    openDialog(`<h2 id="dlg-title">${esc(title)}</h2>
      <p class="small muted" style="margin:0">Fichier : <b>${esc(filename)}</b>. Si le téléchargement ne démarre pas, copiez le contenu et collez-le dans un fichier texte.</p>
      <textarea class="code-out" readonly aria-label="Contenu du fichier">${esc(text.length > 200000 ? text.slice(0, 200000) + "\n…" : text)}</textarea>
      <div class="row end"><button class="btn ghost" data-act="dlg-close">Fermer</button><button class="btn" data-act="copy-out">${ICON.copy}Copier</button>
      ${claudeDownloads ? `<button class="btn primary" data-act="claude-save">${ICON.download}Télécharger</button>` : url && !inClaudeViewer ? `<a class="btn primary" href="${url}" download="${esc(filename)}" data-act="downloaded">${ICON.download}Télécharger</a>` : ""}</div>`, { copyText: text, filename });
  }
  function exportJSON() {
    state.lastBackup = new Date().toISOString(); save(true);
    offerFile("fil-ariane-sauvegarde-" + today() + ".json", "application/json", JSON.stringify(state, null, 1), "Sauvegarde de vos données");
  }
  function exportMarkdown() {
    const L = [];
    L.push("# Fil d'Ariane : export du " + fmtDate(today()), "");
    state.months.forEach((m, mi) => {
      const syn = state.syntheses[m.id];
      const notes = state.notes.filter((n) => n.mid === m.id);
      const notions = state.notions.filter((n) => n.mid === m.id);
      if (!syn && !notes.length && !notions.length) return;
      L.push("## Mois " + (mi + 1) + " : " + m.title, "");
      if (syn) {
        L.push("### Synthèse", "");
        (m.synthesisPrompts || []).forEach((p, i) => { if (syn.answers && syn.answers[i]) L.push("**" + p + "**", "", syn.answers[i], ""); });
        if (syn.free) L.push(syn.free, "");
      }
      if (notions.length) { L.push("### Notions", ""); notions.forEach((n) => L.push("- **" + n.term + "** : " + (n.def || ""))); L.push(""); }
      if (notes.length) { L.push("### Notes", ""); notes.forEach((n) => L.push("#### " + n.title, "", n.body, "")); }
    });
    const loose = state.notes.filter((n) => !n.mid);
    if (loose.length) { L.push("## Notes libres", ""); loose.forEach((n) => L.push("### " + (n.title || "Sans titre"), "", n.body, "")); }
    const looseN = state.notions.filter((n) => !n.mid);
    if (looseN.length) { L.push("## Autres notions", ""); looseN.forEach((n) => L.push("- **" + n.term + "** : " + (n.def || ""))); L.push(""); }
    const lib = catalog().filter((b) => state.reading[b.key] && (state.reading[b.key].status || hasFiche(state.reading[b.key])));
    if (lib.length) {
      L.push("## Bibliothèque", "");
      lib.forEach((b) => {
        const r = state.reading[b.key];
        L.push("### *" + b.t + "*" + (b.a ? ", " + b.a : "") + (r.status ? " [" + READ_STATUS[r.status].toLowerCase() + "]" : ""), "");
        if (b.url) L.push(b.url, "");
        if (r.central) L.push("**Idée centrale :** " + r.central, "");
        if (r.keep) L.push(r.keep, "");
        if (r.quote) L.push("> " + r.quote.replace(/\n/g, "\n> "), "");
        if (r.links) L.push("**Liens :** " + r.links, "");
      });
    }
    if (state.graph.edges.length) { L.push("## Liens", ""); state.graph.edges.forEach((e) => { const a = state.graph.nodes[e.a], b = state.graph.nodes[e.b]; if (a && b) L.push("- " + a.label + " → *" + e.rel + "* → " + b.label); }); L.push(""); }
    offerFile("fil-ariane-notes-" + today() + ".md", "text/markdown", L.join("\n"), "Export Markdown");
  }
  function exportCSV() {
    const q = (s) => '"' + String(s || "").replace(/"/g, '""') + '"';
    const rows = state.cards.map((c) => [q(c.front), q(c.back)].join(";"));
    offerFile("fil-ariane-fiches-" + today() + ".csv", "text/csv", rows.join("\n"), "Fiches au format CSV");
  }
  function validateImport(text) {
    const s = JSON.parse(text);
    if (!s || !Array.isArray(s.months) || typeof s.progress !== "object") throw new Error("Ce fichier n'est pas une sauvegarde Fil d'Ariane.");
    return s;
  }
  function askImport(text) {
    let s;
    try { s = validateImport(text); } catch (e) { toast(e.message.includes("JSON") ? "Fichier illisible : ce n'est pas du JSON valide." : e.message); return; }
    const done = Object.values(s.progress || {}).filter((p) => p.status === "done").length;
    confirmDialog("Restaurer cette sauvegarde ?", `Elle contient ${plural(done, "séance faite", "séances faites")}, ${plural((s.notes || []).length, "note", "notes")} et ${plural((s.cards || []).length, "fiche", "fiches")}. Toutes les données actuelles de ce navigateur seront remplacées.`, "Remplacer mes données", () => {
      state = migrate(s); save(true); applyPrefs(); reviewQueue = freeQueue = null; go("aujourdhui"); toast("Sauvegarde restaurée.");
    }, true);
  }

  /* ---------- Formulaires d'édition ---------- */
  function noteDialog(n) {
    openDialog(`<h2 id="dlg-title">${n ? "Modifier la note" : "Nouvelle note"}</h2>
      <label class="field" for="nd-title">Titre<input type="text" id="nd-title" value="${esc(n ? n.title : "")}" autofocus></label>
      <label class="field" for="nd-month">Mois associé<select id="nd-month"><option value="">Aucun</option>${state.months.map((m, i) => `<option value="${m.id}" ${n && n.mid === m.id ? "selected" : !n && m.id === currentMonth().id ? "selected" : ""}>${i + 1}. ${esc(m.title)}</option>`).join("")}</select></label>
      <label class="field" for="nd-body">Texte <span class="hint">Markdown possible : **gras**, *italique*, listes avec « - ».</span><textarea id="nd-body" class="writing" style="min-height:240px">${esc(n ? n.body : "")}</textarea></label>
      ${n && n.sid ? `<p class="small muted" style="margin:0">Liée à la séance « ${esc((findSession(n.sid) || { s: { title: "" } }).s.title)} ».</p>` : ""}
      <div class="row between">${n ? `<button class="btn danger" data-act="dlg-delete">${ICON.trash}Supprimer</button>` : "<span></span>"}<span class="row"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Enregistrer</button></span></div>`, {
      save: () => {
        const title = $("#nd-title").value.trim() || "Sans titre", body = $("#nd-body").value, mid = $("#nd-month").value || null;
        if (n) Object.assign(n, { title, body, mid, updated: new Date().toISOString() });
        else state.notes.unshift({ id: uid(), title, body, mid, kind: "libre", created: new Date().toISOString(), updated: new Date().toISOString() });
        save(); closeDialog(); refresh(); toast("Note enregistrée.");
      },
      del: () => confirmDialog("Supprimer cette note ?", "La note sera définitivement effacée.", "Supprimer", () => { state.notes = state.notes.filter((x) => x !== n); save(); closeDialog(); refresh(); }, true)
    });
  }
  function notionDialog(n) {
    openDialog(`<h2 id="dlg-title">${n ? "Modifier la notion" : "Nouvelle notion"}</h2>
      <label class="field" for="no-term">Terme<input type="text" id="no-term" value="${esc(n ? n.term : "")}" autofocus></label>
      <label class="field" for="no-def">Définition<textarea id="no-def">${esc(n ? n.def : "")}</textarea></label>
      ${n ? "" : `<label class="row" style="gap:8px"><input type="checkbox" id="no-card" checked><span>Créer aussi une fiche de révision</span></label>`}
      <div class="row between">${n ? `<button class="btn danger" data-act="dlg-delete">${ICON.trash}Supprimer</button>` : "<span></span>"}<span class="row"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Enregistrer</button></span></div>`, {
      save: () => {
        const term = $("#no-term").value.trim(), def = $("#no-def").value.trim();
        if (!term) { toast("Indiquez un terme."); return; }
        if (n) Object.assign(n, { term, def });
        else { state.notions.push({ id: uid(), term, def, mid: currentMonth().id, created: today() }); if ($("#no-card").checked && def) state.cards.push(newCard("Définissez : " + term, def, { mid: currentMonth().id })); }
        save(); closeDialog(); refresh();
      },
      del: () => confirmDialog("Supprimer cette notion ?", "Elle sera retirée du glossaire (les fiches existantes restent).", "Supprimer", () => { state.notions = state.notions.filter((x) => x !== n); save(); closeDialog(); refresh(); }, true)
    });
  }
  function sourceDialog(s) {
    openDialog(`<h2 id="dlg-title">${s ? "Modifier le livre" : "Ajouter un livre"}</h2>
      <label class="field" for="so-t">Titre<input type="text" id="so-t" value="${esc(s ? s.t : "")}" autofocus></label>
      <div class="grid-2"><label class="field" for="so-a">Auteur<input type="text" id="so-a" value="${esc(s ? s.a : "")}"></label>
      <label class="field" for="so-url">Lien (facultatif)<input type="url" id="so-url" value="${esc(s ? s.url || "" : "")}" placeholder="https://"></label></div>
      <label class="field" for="so-month">Rayon<select id="so-month">${state.months.map((m, i) => `<option value="${m.id}" ${(s ? s.mid : currentMonth().id) === m.id ? "selected" : ""}>${roman(i + 1)}. ${esc(m.title)}</option>`).join("")}</select></label>
      <label class="field" for="so-note">Présentation<textarea id="so-note" placeholder="Éditeur, année, chapitres utiles…">${esc(s ? s.note || "" : "")}</textarea></label>
      <div class="row between">${s ? `<button class="btn danger" data-act="dlg-delete">${ICON.trash}Supprimer</button>` : "<span></span>"}<span class="row"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Enregistrer</button></span></div>`, {
      save: () => {
        const t = $("#so-t").value.trim(); if (!t) { toast("Indiquez un titre."); return; }
        const data = { t, a: $("#so-a").value.trim(), url: $("#so-url").value.trim(), note: $("#so-note").value, mid: $("#so-month").value };
        if (data.url && !/^https?:\/\//.test(data.url)) data.url = "https://" + data.url;
        if (s) Object.assign(s, data); else { const id = uid(); state.sources.unshift(Object.assign({ id, mid: currentMonth().id }, data)); state.reading[id] = { status: "lire", updated: new Date().toISOString() }; }
        save(); closeDialog(); refresh();
      },
      del: () => confirmDialog("Supprimer cette source ?", "Ce livre et sa fiche de lecture seront retirés de votre bibliothèque.", "Supprimer", () => { state.sources = state.sources.filter((x) => x !== s); delete state.reading[s.id]; save(); closeDialog(); refresh(); }, true)
    });
  }
  function cardDialog(c) {
    openDialog(`<h2 id="dlg-title">${c ? "Modifier la fiche" : "Nouvelle fiche"}</h2>
      <label class="field" for="cd-front">Question (recto)<textarea id="cd-front" style="min-height:80px" autofocus>${esc(c ? c.front : "")}</textarea></label>
      <label class="field" for="cd-back">Réponse (verso)<textarea id="cd-back">${esc(c ? c.back : "")}</textarea></label>
      ${c ? `<p class="small muted" style="margin:0">Prochaine révision : ${fmtDate(c.due)}. <button class="btn ghost sm" data-act="dlg-reset-card">Remettre à zéro</button></p>` : ""}
      <div class="row between">${c ? `<button class="btn danger" data-act="dlg-delete">${ICON.trash}Supprimer</button>` : "<span></span>"}<span class="row"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Enregistrer</button></span></div>`, {
      save: () => {
        const front = $("#cd-front").value.trim(), back = $("#cd-back").value.trim();
        if (!front || !back) { toast("Remplissez le recto et le verso."); return; }
        if (c) Object.assign(c, { front, back }); else state.cards.push(newCard(front, back, { mid: currentMonth().id }));
        save(); closeDialog(); freeQueue = null; refresh();
      },
      reset: () => { Object.assign(c, { ease: 2.5, interval: 0, reps: 0, due: today() }); save(); closeDialog(); freeQueue = null; refresh(); toast("La fiche revient aujourd'hui."); },
      del: () => confirmDialog("Supprimer cette fiche ?", "Elle ne vous sera plus proposée.", "Supprimer", () => { state.cards = state.cards.filter((x) => x !== c); save(); closeDialog(); freeQueue = null; refresh(); }, true)
    });
  }
  function nodeDialog(n) {
    openDialog(`<h2 id="dlg-title">${n ? "Modifier l'élément" : "Nouvel élément"}</h2>
      <label class="field" for="nn-label">Nom<input type="text" id="nn-label" value="${esc(n ? n.label : "")}" autofocus></label>
      <label class="field" for="nn-type">Type<select id="nn-type">${Object.entries(NODE_TYPES).map(([k, l]) => `<option value="${k}" ${(n ? n.type : "idee") === k ? "selected" : ""}>${l}</option>`).join("")}</select></label>
      <label class="field" for="nn-note">Description<textarea id="nn-note" style="min-height:90px">${esc(n ? n.note : "")}</textarea></label>
      <div class="row between">${n ? `<button class="btn danger" data-act="dlg-delete">${ICON.trash}Supprimer</button>` : "<span></span>"}<span class="row"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Enregistrer</button></span></div>`, {
      save: () => {
        const label = $("#nn-label").value.trim(); if (!label) { toast("Indiquez un nom."); return; }
        const type = $("#nn-type").value, note = $("#nn-note").value.trim();
        if (n) Object.assign(n, { label, type, note });
        else { const k = norm(label); if (!state.graph.nodes[k]) state.graph.nodes[k] = { id: k, label, type, note }; state.ui.nodeId = k; }
        save(); closeDialog(); refresh();
      },
      del: () => confirmDialog("Supprimer cet élément ?", "L'élément et tous ses liens seront supprimés.", "Supprimer", () => {
        delete state.graph.nodes[n.id]; state.graph.edges = state.graph.edges.filter((e) => e.a !== n.id && e.b !== n.id); state.ui.nodeId = null; save(); closeDialog(); refresh();
      }, true)
    });
  }
  function sessionDialog(s, weekId) {
    const isNew = !s;
    const sx = s || { kind: "guide", title: "", hook: "", body: "", notions: [], questions: [], sources: [], perspective: "", prompt: "", positions: [] };
    openDialog(`<h2 id="dlg-title">${isNew ? "Nouvelle séance" : "Modifier la séance"}</h2>
      <div class="grid-2"><label class="field" for="se-title">Titre<input type="text" id="se-title" value="${esc(sx.title)}" autofocus></label>
      <label class="field" for="se-kind">Type<select id="se-kind">${Object.entries(KIND_LABEL).map(([k, l]) => `<option value="${k}" ${sx.kind === k ? "selected" : ""}>${l}</option>`).join("")}</select></label></div>
      <label class="field" for="se-hook">Accroche ou consigne<textarea id="se-hook" style="min-height:70px">${esc(sx.hook)}</textarea></label>
      <label class="field" for="se-body">Contenu du cours <span class="hint">Markdown : ## titre, **gras**, listes « - ».</span><textarea id="se-body" style="min-height:200px">${esc(sx.body)}</textarea></label>
      <label class="field" for="se-notions">Notions <span class="hint">Une par ligne : « terme : définition ».</span><textarea id="se-notions">${esc(sx.notions.map((n) => n.term + (n.def ? " : " + n.def : "")).join("\n"))}</textarea></label>
      <label class="field" for="se-questions">Questions de rappel <span class="hint">Une par ligne : « question || réponse ».</span><textarea id="se-questions">${esc(sx.questions.map((q) => q.q + (q.a ? " || " + q.a : "")).join("\n"))}</textarea></label>
      <label class="field" for="se-persp">Mise en perspective<textarea id="se-persp" style="min-height:70px">${esc(sx.perspective)}</textarea></label>
      <label class="field" for="se-sources">Sources <span class="hint">Une par ligne : « titre | auteur | note | lien ».</span><textarea id="se-sources" style="min-height:70px">${esc((sx.sources || []).map((x) => [x.t, x.a || "", x.note || "", x.url || ""].join(" | ").replace(/( \| )+$/, "")).join("\n"))}</textarea></label>
      <div class="row end"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Enregistrer</button></div>`, {
      save: () => {
        const title = $("#se-title").value.trim(); if (!title) { toast("Indiquez un titre."); return; }
        const data = {
          title, kind: $("#se-kind").value, hook: $("#se-hook").value.trim(), body: $("#se-body").value,
          notions: $("#se-notions").value.split("\n").map((l) => l.trim()).filter(Boolean).map((l) => { const i = l.indexOf(":"); return i > 0 ? { term: l.slice(0, i).trim(), def: l.slice(i + 1).trim() } : { term: l, def: "" }; }),
          questions: $("#se-questions").value.split("\n").map((l) => l.trim()).filter(Boolean).map((l) => { const [q, a] = l.split("||"); return { q: q.trim(), a: (a || "").trim() }; }),
          perspective: $("#se-persp").value.trim(),
          sources: $("#se-sources").value.split("\n").map((l) => l.trim()).filter(Boolean).map((l) => { const [t, a, note, url] = l.split("|").map((x) => (x || "").trim()); return { t, a, note, url }; }),
          edited: true
        };
        if (data.kind === "debat" && !sx.prompt) data.prompt = (data.questions[0] || {}).q || "";
        if (isNew) {
          const w = state.months.flatMap((m) => m.weeks).find((x) => x.id === weekId);
          w.sessions.push(Object.assign({ id: "u" + uid(), connections: [], positions: [], prompt: "" }, data));
        } else Object.assign(s, data);
        save(); closeDialog(); refresh(); toast("Séance enregistrée.");
      }
    });
  }
  function textDialog(title, fields, onSave) {
    openDialog(`<h2 id="dlg-title">${esc(title)}</h2>${fields.map((f, i) => `<label class="field" for="tf-${i}">${esc(f.label)}${f.long ? `<textarea id="tf-${i}" ${i === 0 ? "autofocus" : ""}>${esc(f.value || "")}</textarea>` : `<input type="text" id="tf-${i}" value="${esc(f.value || "")}" ${i === 0 ? "autofocus" : ""}>`}</label>`).join("")}
      <div class="row end"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Enregistrer</button></div>`, {
      save: () => { const vals = fields.map((_, i) => $("#tf-" + i).value.trim()); if (!vals[0]) { toast("Le premier champ est obligatoire."); return; } onSave(vals); save(); closeDialog(); refresh(); }
    });
  }
  function quizQuestionDialog(mid) {
    openDialog(`<h2 id="dlg-title">Nouvelle question de quiz</h2>
      <label class="field" for="qq-q">Question<textarea id="qq-q" style="min-height:70px" autofocus></textarea></label>
      ${[0, 1, 2, 3].map((i) => `<label class="field" for="qq-c${i}">Choix ${i + 1}${i < 2 ? "" : " (facultatif)"}<input type="text" id="qq-c${i}"></label>`).join("")}
      <label class="field" for="qq-a">Bonne réponse<select id="qq-a"><option value="0">Choix 1</option><option value="1">Choix 2</option><option value="2">Choix 3</option><option value="3">Choix 4</option></select></label>
      <label class="field" for="qq-e">Explication<input type="text" id="qq-e"></label>
      <div class="row end"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Ajouter</button></div>`, {
      save: () => {
        const q = $("#qq-q").value.trim(); const raw = [0, 1, 2, 3].map((i) => $("#qq-c" + i).value.trim());
        const a = Number($("#qq-a").value);
        if (!q || !raw[0] || !raw[1]) { toast("Il faut une question et au moins deux choix."); return; }
        if (!raw[a]) { toast("La bonne réponse doit être un choix rempli."); return; }
        const c = [], map = {}; raw.forEach((x, i) => { if (x) { map[i] = c.length; c.push(x); } });
        (state.quizzes[mid] = state.quizzes[mid] || []).push({ id: uid(), q, c, a: map[a], e: $("#qq-e").value.trim() });
        save(); closeDialog(); refresh(); toast("Question ajoutée.");
      }
    });
  }

  /* ---------- Opérations sur le parcours ---------- */
  function locate(sid) { for (const m of state.months) for (const w of m.weeks) { const i = w.sessions.findIndex((s) => s.id === sid); if (i >= 0) return { m, w, i }; } return null; }
  function moveSession(sid, dir) {
    const L = locate(sid); if (!L) return;
    const { m, w, i } = L; const wi = m.weeks.indexOf(w);
    const [s] = w.sessions.splice(i, 1);
    if (dir < 0 && i === 0 && wi > 0) m.weeks[wi - 1].sessions.push(s);
    else if (dir > 0 && i === w.sessions.length && wi < m.weeks.length - 1) m.weeks[wi + 1].sessions.unshift(s);
    else w.sessions.splice(Math.max(0, Math.min(w.sessions.length, i + dir)), 0, s);
  }
  function moveIn(arr, item, dir) { const i = arr.indexOf(item), j = i + dir; if (i < 0 || j < 0 || j >= arr.length) return; arr.splice(i, 1); arr.splice(j, 0, item); }

  /* ---------- Gestion des clics ---------- */
  const actions = {
    "open-session": (el) => {
      closeDialog();
      const id = el.dataset.id;
      state.ui.sessionId = id; state.ui.relireStep = null;
      if (!isDone(id)) ensureProgress(id);
      reviewQueue = null; save(); go("seance");
    },
    "leave-session": () => { flushTimer(); go("aujourdhui"); toast("Séance mise de côté : elle reprendra ici."); },
    "goto-step": (el) => {
      const sid = state.ui.sessionId; const step = Number(el.dataset.step);
      if (isDone(sid)) state.ui.relireStep = step; else ensureProgress(sid).step = step;
      save(); render(); window.scrollTo(0, 0);
    },
    "toggle-timer": () => { timerPaused = !timerPaused; toast(timerPaused ? "Chronomètre en pause." : "Chronomètre relancé."); },
    "reveal": () => { const q = route() === "seance" ? reviewQueue : freeQueue; if (q) { q.shown = true; refresh(); const g = document.querySelector(".grade .good"); if (g) g.focus(); } },
    "grade": (el) => {
      const q = route() === "seance" ? reviewQueue : freeQueue; if (!q || !q.ids.length) return;
      const id = q.ids.shift(); const idx = state.cards.findIndex((c) => c.id === id);
      if (idx >= 0) {
        const g = Number(el.dataset.g);
        state.cards[idx] = schedule(state.cards[idx], g);
        if (g === 0) q.ids.push(id);
      }
      q.shown = false; q.done++; save(); refresh();
      const b = document.querySelector('[data-act="reveal"]'); if (b) b.focus();
    },
    "reveal-answer": (el) => { const p = ensureProgress(el.dataset.sid); const i = el.dataset.i; p.recall[i] = Object.assign({}, p.recall[i], { revealed: true }); save(); refresh(); },
    "rate": (el) => { const p = ensureProgress(el.dataset.sid); const i = el.dataset.i; p.recall[i] = Object.assign({}, p.recall[i], { rate: Number(el.dataset.r) }); save(); refresh(); },
    "finish-session": (el) => finishSession(el.dataset.id),
    "reopen-session": (el) => { const p = state.progress[el.dataset.id]; if (p) { p.status = "started"; p.step = 3; delete p.doneAt; } state.log = state.log.filter((l) => l.sid !== el.dataset.id); save(); refresh(); },
    "save-notion": (el) => {
      const f = findSession(el.dataset.sid); const n = f.s.notions[Number(el.dataset.i)];
      addNotionOnce(n.term, n.def, f.m.id, f.s.id);
      if (state.settings.autoCards) addCardOnce(f.s.id + ":n:" + el.dataset.i, "Définissez : " + n.term, n.def, f.m.id, f.s.id);
      save(); refresh(); toast("Notion ajoutée au carnet.");
    },
    "keep-source": (el) => {
      const f = findSession(el.dataset.sid); const s = f.s.sources[Number(el.dataset.i)];
      const r = state.reading[norm(s.t)] = state.reading[norm(s.t)] || {};
      if (r.status) { toast("Déjà dans votre bibliothèque."); return; }
      r.status = "lire"; r.updated = new Date().toISOString();
      save(); refresh(); toast("Ajouté à votre liste de lecture.");
    },
    "open-node": (el) => { state.ui.nodeId = el.dataset.id; if (!state.graph.nodes[el.dataset.id]) { toast("Cet élément n'existe plus."); return; } save(); if (route() === "liens") refresh(); else go("liens"); },
    "node-type": (el) => { state.ui.nodeType = el.dataset.id; refresh(); },
    "new-node": () => nodeDialog(null),
    "edit-node": (el) => nodeDialog(state.graph.nodes[el.dataset.id]),
    "delete-edge": (el) => { state.graph.edges = state.graph.edges.filter((e) => e.id !== el.dataset.id); save(); refresh(); },
    "add-edge": (el) => {
      const ctx = el.dataset.ctx;
      const rel = $("#lf-rel").value, b = $("#lf-b").value.trim(), type = $("#lf-type").value;
      let a;
      if (ctx === "node") a = state.graph.nodes[el.dataset.id].label;
      else { a = $("#lf-a").value.trim(); }
      if (!a || !b) { toast("Indiquez les deux éléments à relier."); return; }
      const res = addEdge(a, rel, b, type, ctx === "sess" ? el.dataset.id : null);
      if (!res) { toast("Lien impossible : les deux éléments doivent être différents."); return; }
      save(); refresh(); toast("Lien ajouté.");
    },
    "pick-month": (el, ev) => { ev.preventDefault(); state.ui.monthId = el.dataset.id; save(); if (route() === "parcours") refresh(); else go("parcours"); },
    "toggle-edit": () => { editMode = !editMode; refresh(); },
    "edit-session": (el) => sessionDialog(findSession(el.dataset.id).s),
    "add-session": (el) => sessionDialog(null, el.dataset.id),
    "move-session": (el) => { moveSession(el.dataset.id, Number(el.dataset.dir)); save(); refresh(); },
    "delete-session": (el) => { const f = findSession(el.dataset.id); confirmDialog("Supprimer cette séance ?", `« ${f.s.title} » sera retirée du parcours. Vos notes et fiches sont conservées.`, "Supprimer", () => { const L = locate(f.s.id); L.w.sessions.splice(L.i, 1); save(); closeDialog(); refresh(); }, true); },
    "move-week": (el) => { const m = state.months.find((x) => x.weeks.some((w) => w.id === el.dataset.id)); moveIn(m.weeks, m.weeks.find((w) => w.id === el.dataset.id), Number(el.dataset.dir)); save(); refresh(); },
    "edit-week": (el) => { const w = state.months.flatMap((m) => m.weeks).find((x) => x.id === el.dataset.id); textDialog("Modifier la semaine", [{ label: "Titre", value: w.title }, { label: "Question directrice", value: w.question }], ([t, q]) => { w.title = t; w.question = q; }); },
    "delete-week": (el) => { const m = state.months.find((x) => x.weeks.some((w) => w.id === el.dataset.id)); const w = m.weeks.find((x) => x.id === el.dataset.id); confirmDialog("Supprimer cette semaine ?", `La semaine « ${w.title} » et ses ${w.sessions.length} séances seront retirées du parcours.`, "Supprimer", () => { m.weeks.splice(m.weeks.indexOf(w), 1); save(); closeDialog(); refresh(); }, true); },
    "add-week": (el) => { const m = state.months.find((x) => x.id === el.dataset.id); textDialog("Nouvelle semaine", [{ label: "Titre", value: "" }, { label: "Question directrice", value: "" }], ([t, q]) => { m.weeks.push({ id: "w" + uid(), title: t, question: q, sessions: [] }); }); },
    "edit-month": (el) => { const m = state.months.find((x) => x.id === el.dataset.id); textDialog("Modifier le mois", [{ label: "Titre", value: m.title }, { label: "Période", value: m.period }, { label: "Question directrice", value: m.question }, { label: "Présentation", value: m.intro, long: true }], ([t, p, q, i]) => Object.assign(m, { title: t, period: p, question: q, intro: i })); },
    "move-month": (el) => { moveIn(state.months, state.months.find((x) => x.id === el.dataset.id), Number(el.dataset.dir)); save(); refresh(); },
    "add-month": () => textDialog("Nouveau mois", [{ label: "Titre", value: "" }, { label: "Période", value: "" }, { label: "Question directrice", value: "" }, { label: "Présentation", value: "", long: true }], ([t, p, q, i]) => { const id = "m" + uid(); state.months.push({ id, title: t, period: p, question: q, intro: i, sources: [], synthesisPrompts: [], weeks: [{ id: "w" + uid(), title: "Semaine 1", question: "", sessions: [] }] }); state.ui.monthId = id; }),
    "delete-month": (el) => { const m = state.months.find((x) => x.id === el.dataset.id); if (state.months.length < 2) { toast("Le parcours doit garder au moins un mois."); return; } confirmDialog("Supprimer ce mois ?", `« ${m.title} » et toutes ses séances seront retirés du parcours. Vos notes et fiches sont conservées.`, "Supprimer", () => { state.months.splice(state.months.indexOf(m), 1); state.ui.monthId = state.months[0].id; save(); closeDialog(); refresh(); }, true); },
    "lib-filter": (el) => { state.ui.libFilter = el.dataset.id; refresh(); },
    "open-fiche": (el) => ficheDialog(el.dataset.key),
    "revise-tab": (el) => { state.ui.reviseTab = el.dataset.id; freeQueue = null; refresh(); },
    "carnet-tab": (el) => { state.ui.carnetTab = el.dataset.id; state.ui.carnetSearch = ""; refresh(); },
    "start-quiz": (el) => { const mid = el.dataset.id; const m = state.months.find((x) => x.id === mid); const items = (state.quizzes[mid] || []).slice().sort(() => Math.random() - 0.5); quizRun = { mid, title: m.title, items, i: 0, score: 0, answer: null }; state.ui.reviseTab = "quiz"; closeDialog(); if (route() === "reviser") refresh(); else go("reviser"); },
    "quiz-answer": (el) => { if (quizRun.answer != null) return; const k = Number(el.dataset.k); quizRun.answer = k; if (k === quizRun.items[quizRun.i].a) quizRun.score++; refresh(); },
    "quiz-next": () => { quizRun.i++; quizRun.answer = null; if (quizRun.i >= quizRun.items.length) { state.quizLog.push({ mid: quizRun.mid, date: today(), score: quizRun.score, total: quizRun.items.length }); save(); } refresh(); },
    "quit-quiz": () => { quizRun = null; refresh(); },
    "add-quiz-q": (el) => quizQuestionDialog(el.dataset.id),
    "new-card": () => cardDialog(null),
    "edit-card": (el) => cardDialog(state.cards.find((c) => c.id === el.dataset.id)),
    "new-note": () => noteDialog(null),
    "edit-note": (el) => noteDialog(state.notes.find((n) => n.id === el.dataset.id)),
    "new-notion": () => notionDialog(null),
    "edit-notion": (el) => notionDialog(state.notions.find((n) => n.id === el.dataset.id)),
    "new-source": () => sourceDialog(null),
    "edit-source": (el) => sourceDialog(state.sources.find((s) => s.id === el.dataset.id)),
    "open-synth": (el) => { state.ui.synthMonth = el.dataset.id; save(); go("syntheses"); },
    "export-json": exportJSON,
    "export-md": exportMarkdown,
    "export-csv": exportCSV,
    "paste-import": () => openDialog(`<h2 id="dlg-title">Coller une sauvegarde</h2><p class="small muted" style="margin:0">Collez le contenu complet d'un fichier de sauvegarde (JSON).</p>
      <textarea id="paste-area" class="code-out" autofocus></textarea><div class="row end"><button class="btn ghost" data-act="dlg-close">Annuler</button><button class="btn primary" data-act="dlg-save">Vérifier</button></div>`, { save: () => { const t = $("#paste-area").value; closeDialog(); askImport(t); } }),
    "reset-path": () => confirmDialog("Remettre le parcours d'origine ?", "Vos modifications du parcours (titres, ordre, séances ajoutées) seront perdues. Votre progression, vos notes, notions et fiches sont conservées.", "Remettre à l'origine", () => { state.months = seedMonths(); save(); closeDialog(); refresh(); toast("Parcours d'origine rétabli."); }, true),
    "reset-all": () => confirmDialog("Tout effacer ?", "Progression, notes, notions, fiches, liens et synthèses seront définitivement effacés de ce navigateur.", "Tout effacer", () => { state = initialState(); save(true); applyPrefs(); closeDialog(); go("aujourdhui"); toast("Données effacées."); }, true),
    "dlg-close": () => closeDialog(),
    "dlg-yes": () => { const h = dlgHandlers.yes; closeDialog(); if (h) h(); },
    "dlg-save": () => dlgHandlers.save && dlgHandlers.save(),
    "dlg-delete": () => dlgHandlers.del && dlgHandlers.del(),
    "dlg-reset-card": () => dlgHandlers.reset && dlgHandlers.reset(),
    "copy-out": () => {
      const text = dlgHandlers.copyText || "";
      const fallback = () => { const ta = document.querySelector("#dlg .code-out"); if (ta) { ta.focus(); ta.select(); } toast("Texte sélectionné : copiez-le avec Ctrl+C ou Cmd+C."); };
      try { navigator.clipboard.writeText(text).then(() => toast("Copié."), fallback); } catch (e) { fallback(); }
    },
    "claude-save": () => {
      const h = dlgHandlers;
      claudeDownloads.save({ filename: h.filename, data: h.copyText }).then(() => toast("Fichier enregistré."), (e) => {
        if (e && e.code === "declined") return;
        toast(e && e.code === "rate_limited" ? "Une demande est déjà ouverte." : "Téléchargement indisponible ici : utilisez « Copier ».");
      });
    },
    "downloaded": () => { setTimeout(() => toast("Téléchargement lancé."), 50); }
  };

  document.addEventListener("click", (ev) => {
    const el = ev.target.closest("[data-act]");
    if (!el) return;
    const fn = actions[el.dataset.act];
    if (!fn) return;
    if (el.tagName === "A" && el.dataset.act !== "downloaded" && el.dataset.act !== "dlg-close") ev.preventDefault();
    if (el.dataset.act === "dlg-close" && el.tagName === "A") { closeDialog(); return; }
    fn(el, ev);
  });
  document.addEventListener("keydown", (ev) => {
    const g = ev.target.closest && ev.target.closest('svg [data-act="open-node"]');
    if (g && (ev.key === "Enter" || ev.key === " ")) { ev.preventDefault(); actions["open-node"](g); return; }
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(ev.target.tagName) || ev.metaKey || ev.ctrlKey || ev.altKey) return;
    if (document.getElementById("dlg") && document.getElementById("dlg").open) return;
    const r = route();
    const onReview = (r === "seance" && reviewQueue && (state.progress[state.ui.sessionId] || {}).step === 0) || (r === "reviser" && (state.ui.reviseTab || "fiches") === "fiches");
    if (!onReview) return;
    const q = r === "seance" ? reviewQueue : freeQueue;
    if (!q || !q.ids.length) return;
    if (ev.key === " " && !q.shown) { ev.preventDefault(); actions.reveal(); }
    else if (q.shown && /^[1-4]$/.test(ev.key)) { ev.preventDefault(); actions.grade({ dataset: { g: String(Number(ev.key) - 1) } }); }
  });

  /* ---------- Saisies (enregistrement automatique, sans re-rendu) ---------- */
  let searchTimer;
  function deferRefresh(fn) { clearTimeout(searchTimer); searchTimer = setTimeout(() => { fn(); const id = document.activeElement && document.activeElement.id; const pos = document.activeElement && document.activeElement.selectionStart; refresh(); if (id) { const el = document.getElementById(id); if (el) { el.focus(); try { el.setSelectionRange(pos, pos); } catch (e) { /* ignore */ } } } }, 200); }
  document.addEventListener("input", (ev) => {
    const el = ev.target; const kind = el.dataset && el.dataset.input; if (!kind) return;
    if (kind === "recall") { const p = ensureProgress(el.dataset.sid); p.recall[el.dataset.i] = Object.assign({}, p.recall[el.dataset.i], { text: el.value }); save(); }
    else if (kind === "def") { const p = ensureProgress(el.dataset.sid); p.defs[el.dataset.i] = el.value; save(); }
    else if (kind === "debate") { upsertSessionNote(el.dataset.sid, "debat", el.value); save(); }
    else if (kind === "session-note") { upsertSessionNote(el.dataset.sid, "seance", el.value); save(); }
    else if (kind === "synth") {
      const mid = el.dataset.mid; const syn = state.syntheses[mid] = state.syntheses[mid] || { answers: [], free: "" };
      if (el.dataset.i === "free") syn.free = el.value; else syn.answers[Number(el.dataset.i)] = el.value;
      syn.updated = new Date().toISOString(); save();
    }
    else if (kind === "carnet-search") deferRefresh(() => { state.ui.carnetSearch = el.value; });
    else if (kind === "card-search") deferRefresh(() => { state.ui.cardSearch = el.value; });
    else if (kind === "node-search") deferRefresh(() => { state.ui.nodeSearch = el.value; });
    else if (kind === "lib-search") deferRefresh(() => { state.ui.libSearch = el.value; });
  });
  document.addEventListener("change", (ev) => {
    const el = ev.target; const kind = el.dataset && el.dataset.input; if (!kind) return;
    if (kind === "pref") {
      const k = el.dataset.k;
      state.settings[k] = el.type === "checkbox" ? el.checked : k === "reviewLimit" ? Number(el.value) : el.value;
      save(); applyPrefs(); toast("Préférence enregistrée.");
    } else if (kind === "autocards") { state.settings.autoCards = el.checked; save(); }
    else if (kind === "synth-month") { state.ui.synthMonth = el.value; save(); refresh(); }
    else if (kind === "read-status") {
      const r = state.reading[el.dataset.key] = state.reading[el.dataset.key] || {};
      r.status = el.value || undefined; r.updated = new Date().toISOString(); save(); refresh();
    }
    else if (kind === "import-file") {
      const file = el.files && el.files[0]; if (!file) return;
      const reader = new FileReader();
      reader.onload = () => askImport(String(reader.result));
      reader.onerror = () => toast("Lecture du fichier impossible.");
      reader.readAsText(file); el.value = "";
    }
  });

  /* ---------- Démarrage ---------- */
  state = load();
  applyPrefs();
  window.addEventListener("hashchange", render);
  render();
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* ignore */ }
  if ("serviceWorker" in navigator && location.protocol === "https:" && !window.__NO_SW__) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* hors ligne indisponible ici */ });
  }
  window.__filAriane = { get state() { return state; }, schedule };
})();
