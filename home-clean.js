(function(){
'use strict';
const i18n={
pt:{heroDeck:'Um percurso visual para explorar as perguntas, os fundamentos e as escolhas analíticas da pesquisa.',heroMore:'Sobre a pesquisa e esta edição',allTabs:'Todas as abas',reading:'Leitura e acessibilidade',welcomeKicker:'GUIA DE NAVEGAÇÃO',welcomeTitle:'Por onde começar?',welcomeLead:'Escolha um caminho. As outras seções continuam disponíveis quando você precisar delas.',r1Title:'Compreender a pesquisa',r1Copy:'Uma visão de conjunto em sete etapas.',r2Title:'Explorar as 21 pranchas',r2Copy:'Os capítulos, os conceitos e suas relações visuais.',r3Title:'Percurso para a banca',r3Copy:'O roteiro da proposta e seus argumentos centrais.',catalog:'Outros recursos e seções do Guia',catalogLead:'Acesse ferramentas de consulta, capítulos, materiais complementares e informações de acessibilidade.',language:'Idioma dos conteúdos complementares'},
en:{heroDeck:'A visual route through the research questions, theoretical foundations and analytical choices.',heroMore:'About this research and edition',allTabs:'All sections',reading:'Reading and accessibility',welcomeKicker:'NAVIGATION GUIDE',welcomeTitle:'Where to begin?',welcomeLead:'Choose a route. Other sections remain available whenever you need them.',r1Title:'Understand the research',r1Copy:'An overview in seven stages.',r2Title:'Explore the 21 illustrated panels',r2Copy:'Chapters, concepts and visual relationships.',r3Title:'Examination route',r3Copy:'The proposal and its central arguments.',catalog:'Other resources and sections',catalogLead:'Find reference tools, chapters, complementary materials and accessibility information.',language:'Language of supplementary materials'},
es:{heroDeck:'Un recorrido visual por las preguntas, los fundamentos y las decisiones analíticas de la investigación.',heroMore:'Sobre la investigación y esta edición',allTabs:'Todas las secciones',reading:'Lectura y accesibilidad',welcomeKicker:'GUÍA DE NAVEGACIÓN',welcomeTitle:'¿Por dónde empezar?',welcomeLead:'Elige un recorrido. Las otras secciones siguen disponibles cuando las necesites.',r1Title:'Comprender la investigación',r1Copy:'Una visión general en siete etapas.',r2Title:'Explorar las 21 láminas',r2Copy:'Capítulos, conceptos y relaciones visuales.',r3Title:'Recorrido para la banca',r3Copy:'La propuesta y sus argumentos centrales.',catalog:'Otros recursos y secciones',catalogLead:'Herramientas de consulta, capítulos, materiales complementarios y accesibilidad.',language:'Idioma de los contenidos complementarios'}};
const sel=document.getElementById('guide-lang');
function localize(){const lang=i18n[sel?.value]?sel.value:'pt';document.querySelectorAll('[data-home-tx]').forEach(el=>{const val=i18n[lang][el.dataset.homeTx];if(val){el.textContent=val;el.lang=lang==='pt'?'pt-BR':lang;}});}
sel?.addEventListener('change',localize);localize();
})();


/* gv-banca-private-bridge: notas sincronizadas em janela externa, fora da área compartilhada do Guia. */
(function(){
"use strict";
const root=document.getElementById("banca-presenter");
const launch=document.getElementById("banca-start");
const header=root?.querySelector(".banca-header-right");
const progress=document.getElementById("banca-progress-text");
if(!root||!launch||!header||!progress)return;
const style=document.createElement("style");
style.textContent="\n#banca-notes{display:none!important}\n.banca-private-bridge-btn{font:inherit;font-size:.89rem;font-weight:700;min-height:44px;border:1px solid #83a5b9;border-radius:7px;padding:.55rem .8rem;background:#f5f9fc;color:#204763;cursor:pointer}\n.banca-header-right .banca-private-bridge-btn{background:#32556e;color:white;border-color:#b0ccdb}\n.banca-private-help{display:block;font-size:.85rem;line-height:1.5;color:#405b6e;margin:.35rem 0;max-width:85ch}\n.banca-private-bridge-btn:focus-visible{outline:3px solid #edb95f;outline-offset:3px}\n@media print{.banca-private-bridge-btn,.banca-private-help{display:none!important}}";
document.head.appendChild(style);
let popup=null,pending=false;
const el=id=>document.getElementById(id);
const index=()=>{
 const match=(progress.textContent||"").match(/^\s*(\d+)/);
 return Math.max(0,Math.min(7,(match?parseInt(match[1],10):1)-1));
};
function state(){
 return {index:index(),presenting:!root.hidden,elapsed:el("banca-clock-elapsed")?.textContent||"",remaining:el("banca-clock-remaining")?.textContent||""};
}
function sync(){
 try{if(popup&&!popup.closed&&typeof popup.gvShowState==="function")popup.gvShowState(state());}catch(e){}
}
function schedule(){
 if(pending)return;
 pending=true;
 requestAnimationFrame(()=>{pending=false;sync();});
}
function move(which){
 if(root.hidden)return false;
 const b=el(which==="prev"?"banca-prev":"banca-next");
 if(!b||b.disabled)return false;
 b.click();schedule();return true;
}
window.gvPresenterState=state;
window.gvPresenterPrev=()=>move("prev");
window.gvPresenterNext=()=>move("next");
let status=null;
function openNotes(){
 let w=null;
 try{w=window.open("banca-apoio.html","guiaVisualRoteiroPessoal","popup=yes,width=740,height=830,resizable=yes,scrollbars=yes");}catch(e){}
 if(!w){if(status)status.textContent="Seu navegador bloqueou a janela do roteiro. Permita pop-ups para o Guia e tente novamente.";return;}
 popup=w;
 if(status)status.textContent="Roteiro aberto em janela separada. No Teams, compartilhe somente a janela ou aba do Guia.";
 try{w.focus();}catch(e){}
 schedule();
}
const first=document.createElement("button");
first.type="button";first.className="banca-private-bridge-btn";
first.textContent="Roteiro pessoal (outra janela) ↗";
first.setAttribute("aria-describedby","banca-private-help");
const desc=document.createElement("small");
desc.className="banca-private-help";desc.id="banca-private-help";
desc.textContent="Abra as notas para sua consulta e compartilhe somente a janela ou aba do Guia no Teams. A tela inteira revelaria ambas as janelas.";
status=document.createElement("span");
status.className="a11y-visually-hidden";status.setAttribute("role","status");status.setAttribute("aria-live","polite");
launch.insertAdjacentElement("afterend",first);
first.insertAdjacentElement("afterend",desc);
desc.insertAdjacentElement("afterend",status);
first.addEventListener("click",openNotes);
const inStage=document.createElement("button");
inStage.type="button";inStage.className="banca-private-bridge-btn";
inStage.textContent="Roteiro pessoal ↗";
inStage.title="Abrir notas em janela separada, sem mostrá-las no slide";
header.insertBefore(inStage,el("banca-exit"));
inStage.addEventListener("click",openNotes);
for(const id of ["banca-progress-text","banca-clock-elapsed","banca-clock-remaining"]){
 const target=el(id);
 if(target)new MutationObserver(schedule).observe(target,{subtree:true,childList:true,characterData:true});
}
launch.addEventListener("click",schedule);
el("banca-exit")?.addEventListener("click",schedule);
})();
