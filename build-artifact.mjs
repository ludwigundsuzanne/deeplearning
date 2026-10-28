// Construit une page autonome (CSS et JS en ligne) pour la publier comme Artifact claude.ai.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const r = (p) => readFileSync(new URL(p, import.meta.url), "utf8");
const scripts = ["js/content-m1.js", "js/content-plan.js", "js/app.js"].map(r).join("\n");
if (scripts.includes("</script")) throw new Error("balise </script> dans le JS");
const fonts = r("index.html").match(/<link rel="stylesheet" href="(https:\/\/fonts[^"]+)">/)[1];
const out = `<title>Fil d'Ariane</title>
<link rel="stylesheet" href="${fonts}">
<style>
${r("styles.css")}
</style>
<div id="root"></div>
<script>window.__NO_SW__ = true;</script>
<script>
${scripts}
</script>
`;
mkdirSync(new URL("dist/", import.meta.url), { recursive: true });
writeFileSync(new URL("dist/fil-ariane.html", import.meta.url), out);
console.log("dist/fil-ariane.html", Math.round(out.length / 1024), "Ko");
