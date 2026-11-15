/* Guia Visual — ponte de idioma transversal, 2026-11-14.
   Traduções editoriais explícitas: não altera a dissertação, citações ou fichas.
   Mantém a indicação correta do idioma para leitores de tela. */
(function(){
"use strict";
const KEY="gv-guide-language-v2";
const options=["pt","en","es"];
const LABELS={
 pt:{selector:"Idioma da navegação",note:"O português é o texto original. Inglês e espanhol abrangem a interface e textos editoriais selecionados; pranchas, glossário, fichas e dissertação permanecem em português. A tradução automática do navegador pode ajudar na consulta, mas não substitui uma tradução acadêmica revisada.",short:"Português (original)",link:"Voltar ao início do Guia",status:"Conteúdo acadêmico original: português."},
 en:{selector:"Navigation language",note:"The navigation and selected editorial texts are translated. Panels, glossary, biographical profiles and dissertation remain in the original Portuguese. Your browser's page translation may assist reading, but is not a reviewed academic translation.",short:"English (partial)",link:"Back to the Guide",status:"Original academic content: Portuguese."},
 es:{selector:"Idioma de navegación",note:"La navegación y algunos textos editoriales están traducidos. Las láminas, el glosario, las fichas biográficas y la disertación permanecen en portugués. La traducción del navegador puede ayudar a leerlos, pero no es una traducción académica revisada.",short:"Español (parcial)",link:"Volver al inicio de la Guía",status:"Contenido académico original: portugués."}
};
const EXACT={
 en:{
 "Ir diretamente ao conteúdo principal":"Skip to main content",
 "Projeto digital autoral · Pesquisa de mestrado em Educação":"Independent digital project · Master's research in Education",
 "Guia Visual da Pesquisa":"Visual Research Guide",
 "Plataforma digital autoral vinculada à dissertação de mestrado":"Author-created digital platform accompanying a master's dissertation",
 "Ambiente digital de acessibilidade, divulgação científica e exploração dos fundamentos teórico-metodológicos da investigação.":"Digital space for accessibility, science communication and exploration of the research's theoretical and methodological foundations.",
 "Início":"Home","Percurso Essencial":"Essential Pathway","Introdução":"Introduction","Banca":"Examination",
 "Sobre o Guia":"About the Guide","Glossário":"Glossary","Dissertação HTML (banca)":"Dissertation HTML (examination)",
 "Edição portátil":"Portable edition","Libras: roteiro":"Brazilian Sign Language: script","Acessibilidade":"Accessibility",
 "Dialética":"Dialectics","Sobre a autora":"About the author","Leitor":"Reader",
 "Autores":"Authors","Produções":"Publications","Mensagens":"Messages","Arte":"Art","Percursos artísticos":"Artistic pathways","Matriz Aberta":"Open Matrix","Leituras":"Readings",
 "Ouvir ou ler a dissertação":"Listen to or read the dissertation","Ativar leitura linear":"Enable linear reading",
 "Desativar leitura linear":"Disable linear reading","Imprimir":"Print","Leitura":"Reading","Alto contraste":"High contrast",
 "Contraste: ligado":"Contrast: on","Padrão":"Default",
 "As notas podem ser abertas com Enter ou Espaço.":"Notes can be opened with Enter or Space.",
 "Glossário de conceitos · com remissões":"Glossary of concepts · cross-references",
 "Dissertação em HTML · banca 17/11/2026":"Dissertation HTML · examination 17 Nov 2026",
 "Edição portátil · consulta sem internet":"Portable edition · offline reading",
 "Libras · transcrição e roteiro (vídeo pendente)":"Brazilian Sign Language · transcript and script (video pending)",
 "Acessibilidade e participação":"Accessibility and participation",
 "Percursos artísticos · 19 fichas e fontes":"Artistic pathways · 19 entries and sources",
 "Matriz Aberta · protótipo e teste":"Open Matrix · prototype and testing",
 "Como ler este guia":"How to use this Guide",
 "Escolha a seção":"Choose a section",
 "Use o menu ou os atalhos superiores para ir diretamente à introdução, aos capítulos e aos percursos complementares.":"Use the menu or the top shortcuts to go directly to the introduction, chapters or supplementary pathways.",
 "Explore as pranchas":"Explore the panels",
 "Leia o esquema, consulte sua descrição textual e abra os avisos expansíveis para aprofundar a leitura.":"Examine each diagram, read its text description and open the expandable notes to explore it further.",
 "Ajuste a leitura":"Adjust your reading",
 "Ative a leitura linear ou abra o leitor da dissertação. Para navegar por teclado, use Tab, Enter e Espaço nos controles.":"Enable linear reading or open the dissertation reader. For keyboard navigation, use Tab, Enter and Space.",
 "Direitos autorais: divulgação e reprodução não autorizadas.":"Copyright: unauthorized distribution and reproduction prohibited.",
 "© 2026 Taynara Xavier Telles. Todos os direitos reservados. É proibida, sem autorização prévia e expressa da autora, a divulgação, a reprodução, a republicação, a distribuição ou a adaptação, integral ou parcial, de qualquer conteúdo deste Guia Visual, inclusive textos, fotografias, esquemas e recursos gráficos, ressalvadas as hipóteses legalmente permitidas e os direitos de terceiros. O acesso público ao site não concede licença de reutilização.":"© 2026 Taynara Xavier Telles. All rights reserved. Without the author's prior express authorization, distribution, reproduction, republication, redistribution or adaptation of any part of this Visual Guide—including text, photographs, diagrams and graphic resources—is prohibited, subject to legal exceptions and third-party rights. Public access to the site grants no license for reuse.",
 "Voltar ao Guia":"Back to the Guide","Voltar ao início":"Back to the beginning",
 "Tamanho da fonte":"Text size","Contraste":"Contrast","Anterior":"Previous","Próximo":"Next"
 },
 es:{
 "Ir diretamente ao conteúdo principal":"Ir al contenido principal",
 "Projeto digital autoral · Pesquisa de mestrado em Educação":"Proyecto digital de autoría propia · Investigación de maestría en Educación",
 "Guia Visual da Pesquisa":"Guía Visual de la Investigación",
 "Plataforma digital autoral vinculada à dissertação de mestrado":"Plataforma digital de autoría propia vinculada a la disertación de maestría",
 "Ambiente digital de acessibilidade, divulgação científica e exploração dos fundamentos teórico-metodológicos da investigação.":"Espacio digital de accesibilidad, divulgación científica y exploración de los fundamentos teóricos y metodológicos de la investigación.",
 "Início":"Inicio","Percurso Essencial":"Recorrido esencial","Introdução":"Introducción","Banca":"Evaluación",
 "Sobre o Guia":"Acerca de la Guía","Glossário":"Glosario","Dissertação HTML (banca)":"Disertación HTML (evaluación)",
 "Edição portátil":"Edición portátil","Libras: roteiro":"Lengua de señas brasileña: guion","Acessibilidade":"Accesibilidad",
 "Dialética":"Dialéctica","Sobre a autora":"Sobre la autora","Leitor":"Lector",
 "Autores":"Autores","Produções":"Publicaciones","Mensagens":"Mensajes","Arte":"Arte","Percursos artísticos":"Recorridos artísticos","Matriz Aberta":"Matriz Abierta","Leituras":"Lecturas",
 "Ouvir ou ler a dissertação":"Escuchar o leer la disertación","Ativar leitura linear":"Activar lectura lineal",
 "Desativar leitura linear":"Desactivar lectura lineal","Imprimir":"Imprimir","Leitura":"Lectura","Alto contraste":"Alto contraste",
 "Contraste: ligado":"Contraste: activado","Padrão":"Predeterminado",
 "As notas podem ser abertas com Enter ou Espaço.":"Las notas se pueden abrir con Enter o Espacio.",
 "Glossário de conceitos · com remissões":"Glosario de conceptos · referencias cruzadas",
 "Dissertação em HTML · banca 17/11/2026":"Disertación HTML · evaluación del 17/11/2026",
 "Edição portátil · consulta sem internet":"Edición portátil · consulta sin conexión",
 "Libras · transcrição e roteiro (vídeo pendente)":"Lengua de señas brasileña · transcripción y guion (vídeo pendiente)",
 "Acessibilidade e participação":"Accesibilidad y participación",
 "Percursos artísticos · 19 fichas e fontes":"Recorridos artísticos · 19 fichas y fuentes",
 "Matriz Aberta · protótipo e teste":"Matriz Abierta · prototipo y pruebas",
 "Como ler este guia":"Cómo utilizar esta Guía",
 "Escolha a seção":"Elija una sección",
 "Use o menu ou os atalhos superiores para ir diretamente à introdução, aos capítulos e aos percursos complementares.":"Utilice el menú o los accesos superiores para ir a la introducción, los capítulos y los recorridos complementarios.",
 "Explore as pranchas":"Explore las láminas",
 "Leia o esquema, consulte sua descrição textual e abra os avisos expansíveis para aprofundar a leitura.":"Examine cada esquema, consulte su descripción textual y abra las notas desplegables para profundizar la lectura.",
 "Ajuste a leitura":"Ajuste la lectura",
 "Ative a leitura linear ou abra o leitor da dissertação. Para navegar por teclado, use Tab, Enter e Espaço nos controles.":"Active la lectura lineal o abra el lector de la disertación. Para navegar con el teclado, utilice Tab, Enter y Espacio.",
 "Direitos autorais: divulgação e reprodução não autorizadas.":"Derechos de autor: divulgación y reproducción no autorizadas.",
 "© 2026 Taynara Xavier Telles. Todos os direitos reservados. É proibida, sem autorização prévia e expressa da autora, a divulgação, a reprodução, a republicação, a distribuição ou a adaptação, integral ou parcial, de qualquer conteúdo deste Guia Visual, inclusive textos, fotografias, esquemas e recursos gráficos, ressalvadas as hipóteses legalmente permitidas e os direitos de terceiros. O acesso público ao site não concede licença de reutilização.":"© 2026 Taynara Xavier Telles. Todos los derechos reservados. Se prohíbe, sin autorización previa y expresa de la autora, divulgar, reproducir, republicar, distribuir o adaptar cualquier parte de esta Guía Visual, incluidos textos, fotografías, esquemas y recursos gráficos, salvo las excepciones legales y los derechos de terceros. El acceso público al sitio no otorga licencia de reutilización.",
 "Voltar ao Guia":"Volver a la Guía","Voltar ao início":"Volver al inicio",
 "Tamanho da fonte":"Tamaño del texto","Contraste":"Contraste","Anterior":"Anterior","Próximo":"Siguiente"
 }
};
const isIndex=!!document.getElementById("guide-lang");
let selector=document.getElementById("guide-lang");
let bridge;
if(!selector){
 bridge=document.createElement("section");
 bridge.className="gv-language-bridge";
 bridge.setAttribute("aria-label","Idioma de navegação / Navigation language / Idioma de navegación");
 bridge.innerHTML='<div class="gv-language-bridge__inner"><label for="gv-bridge-select" id="gv-bridge-label">Idioma da navegação</label><select id="gv-bridge-select"><option value="pt">Português — original</option><option value="en">English — partial</option><option value="es">Español — parcial</option></select><a href="index.html" id="gv-bridge-home">Voltar ao início do Guia</a></div><p id="gv-bridge-note" role="note"></p>';
 const css=document.createElement("style");
 css.textContent=".gv-language-bridge{background:#f7fafc;color:#172d43;border-block:1px solid #bdced9;padding:.65rem max(1rem,calc((100vw - 1100px)/2));font:15px/1.5 Arial,Helvetica,sans-serif}.gv-language-bridge__inner{display:flex;align-items:center;gap:.7rem;flex-wrap:wrap}.gv-language-bridge label{font-weight:700}.gv-language-bridge select{width:auto;max-width:100%;padding:.45rem .5rem;border:1px solid #667f92;border-radius:7px;font:inherit;background:white;color:#182b3e}.gv-language-bridge a{margin-left:auto;color:#13466c;text-decoration:underline;font-weight:600}.gv-language-bridge p{max-width:100ch;margin:.4rem 0 0;color:#364d60;font-size:.86rem}@media print{.gv-language-bridge{display:none}}";
 document.head.append(css);
 document.body.insertBefore(bridge,document.body.firstChild);
 selector=bridge.querySelector("select");
}
const note=document.getElementById("language-scope");
let stored="pt";try{const s=localStorage.getItem(KEY);if(options.includes(s))stored=s}catch(e){}
selector.value=stored;
if(isIndex){const names={pt:"Português (original)",en:"English (partial)",es:"Español (parcial)"};for(const code of options){const opt=selector.querySelector('option[value="'+code+'"]');if(opt)opt.textContent=names[code];}}
const tracked=[];
const areas=isIndex?["header","nav",".intro",".accessibility-controls",".home-topbar",".home-secondary"]:
 ["header","nav",".topnav",".accessibility-controls","footer"];
const roots=[...new Set(areas.flatMap(q=>[...document.querySelectorAll(q)]))];
for(const root of roots){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 let node;
 while((node=walker.nextNode())){
   const parent=node.parentElement;
   if(!parent || parent.closest("script,style,textarea,select,[data-tx],[data-xi],[data-home-tx],[data-photo-tx],[data-dial-node]"))continue;
   const raw=node.nodeValue;
   const original=raw.trim().replace(/\s+/g," ");
   if(Object.prototype.hasOwnProperty.call(EXACT.en,original))tracked.push({node,raw,original,parent});
 }
}
function apply(){
 const current=options.includes(selector.value)?selector.value:"pt";
 try{localStorage.setItem(KEY,current)}catch(e){}
 for(const t of tracked){
   if(!t.node.isConnected)continue;
   const translated=current==="pt"?null:EXACT[current]?.[t.original];
   t.node.nodeValue=translated?(t.raw.match(/^\s*/)[0]+translated+t.raw.match(/\s*$/)[0]):t.raw;
   if(translated)t.parent.setAttribute("lang",current);
   else if(t.parent.getAttribute("lang")==="en"||t.parent.getAttribute("lang")==="es")t.parent.setAttribute("lang","pt-BR");
 }
 if(isIndex){
   const label=document.querySelector('[for="guide-lang"]');
   if(label){label.textContent=LABELS[current].selector;label.lang=current==="pt"?"pt-BR":current}
   const summary=document.querySelector(".home-language summary");
   if(summary){summary.textContent=LABELS[current].selector;summary.lang=current==="pt"?"pt-BR":current}
   if(note){note.textContent=LABELS[current].note;note.lang=current==="pt"?"pt-BR":current}
 }else{
   bridge.querySelector("label").textContent=LABELS[current].selector;
   bridge.querySelector("a").textContent=LABELS[current].link;
   bridge.querySelector("p").textContent=LABELS[current].note;
   bridge.querySelectorAll("label,a,p").forEach(el=>el.lang=current==="pt"?"pt-BR":current);
 }
 selector.setAttribute("aria-label",LABELS[current].selector);
}
selector.addEventListener("change",apply);
if(isIndex && stored!=="pt")selector.dispatchEvent(new Event("change",{bubbles:true}));
apply();
})();

/* gv-permanent-header-and-reader-v1: menu único e ajustes flutuantes nas páginas do Guia */
(function(){
"use strict";
if(document.getElementById("gv-global-nav"))return;
const style=document.createElement("style");
style.id="gv-global-ui-style";
style.textContent="\n/* Navegação permanente do Guia: mesmo cabeçalho em todas as abas. */\n.gv-global-nav{position:sticky!important;top:0!important;z-index:500;background:#fff;color:#182d40;border-bottom:1px solid #bfd0dc;box-shadow:0 3px 12px rgba(20,43,64,.12);font:600 15px/1.4 Arial,sans-serif}\n.gv-global-nav *{box-sizing:border-box}\n.gv-global-nav__inner{max-width:1180px;margin:auto;padding:8px 14px;display:flex;align-items:center;gap:14px}\n.gv-global-nav__brand{flex:0 0 auto;font-size:14px;letter-spacing:.01em;color:#203f56!important;text-decoration:none!important;white-space:nowrap}\n.gv-global-nav__links{display:flex;flex:1;align-items:center;justify-content:flex-end;gap:4px;min-width:0}\n.gv-global-nav__links>a,.gv-global-nav__dropdown>summary{display:inline-flex;min-height:42px;align-items:center;gap:4px;color:#1a384f!important;background:transparent;border:1px solid transparent;border-radius:8px;text-decoration:none;padding:9px 10px;font:600 14px/1.35 Arial,sans-serif;white-space:nowrap;cursor:pointer}\n.gv-global-nav__dropdown{position:relative;flex:0 0 auto}\n.gv-global-nav__dropdown>summary{list-style:none}\n.gv-global-nav__dropdown>summary::-webkit-details-marker{display:none}\n.gv-global-nav__links>a:hover,.gv-global-nav__dropdown>summary:hover,.gv-global-nav__dropdown[open]>summary{background:#eef4f8;border-color:#c7d5df;text-decoration:underline}\n.gv-global-nav__dropdown-menu{position:absolute;top:calc(100% + 5px);left:0;min-width:200px;max-height:65vh;overflow:auto;padding:6px;z-index:501;border:1px solid #b4c8d7;border-radius:10px;background:white;box-shadow:0 10px 30px rgba(20,43,64,.2);display:flex;flex-direction:column;gap:2px}\n.gv-global-nav__dropdown:last-child .gv-global-nav__dropdown-menu{left:auto;right:0;min-width:230px}\n.gv-global-nav__dropdown-menu a{display:block;border-radius:6px;padding:9px 11px;color:#1a384f!important;text-decoration:none!important;font-size:14px;font-weight:500}\n.gv-global-nav__dropdown-menu a:hover,.gv-global-nav__dropdown-menu a:focus-visible{background:#e8f1f8;text-decoration:underline!important}\n.gv-global-nav__toggle{display:none;min-height:44px;background:#f5f8fa;border:1px solid #9bb3c5;color:#16374c;border-radius:9px;padding:8px 12px;font:700 14px Arial,sans-serif}\n.gv-global-nav :is(a,summary,button):focus-visible{outline:3px solid #bf6b00!important;outline-offset:2px}\nhtml.gv-global-ui-ready .tools.home-tools{position:relative!important;top:auto!important;z-index:auto!important;border-bottom:0!important;box-shadow:none!important;padding-top:0;padding-bottom:0}\nhtml.gv-global-ui-ready .tools.home-tools nav.quick-nav,html.gv-global-ui-ready nav.topnav,html.gv-global-ui-ready nav.floating,html.gv-global-ui-ready nav.ma-floating{display:none!important}\nhtml.gv-global-ui-ready .a11y-standalone{display:none!important}\nhtml.gv-global-ui-ready{scroll-padding-top:80px!important}\nhtml.gv-global-ui-ready [id]{scroll-margin-top:80px}\nhtml.gv-global-ui-ready .gv-global-nav{scroll-margin-top:0}\nhtml.gv-large-type .gv-global-nav{position:sticky!important;top:0!important}\n.gv-reader-float{position:fixed;z-index:550;right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));max-width:calc(100vw - 28px);color:#1c3a52;font:500 14px/1.4 Arial,sans-serif}\n.gv-reader-float [hidden]{display:none!important}\n.gv-reader-float__panel{display:flex;align-items:flex-start;gap:7px;max-width:100%;border:1px solid #b1c6d5;border-radius:13px;padding:6px 6px 6px 7px;background:#f3f7fa;box-shadow:0 6px 25px rgba(14,37,58,.2)}\n.gv-reader-float__panel>.accessibility-controls{display:flex!important;gap:5px;align-items:center;flex-wrap:wrap;padding:0;border:0;background:transparent}\n.gv-reader-float__panel>.accessibility-controls .a11y-label{font-size:13px}\n.gv-reader-float__panel>.accessibility-controls button{min-height:44px;min-width:44px;font-size:14px;padding:7px 10px}\n.gv-reader-float__close{width:34px;height:34px;min-width:34px;border:1px solid #90a6b8;border-radius:8px;background:#fff;color:#1e3a50;cursor:pointer;font-size:23px;line-height:1;padding:0}\n.gv-reader-float__open{min-height:44px;background:#f3f7fa;color:#183a53;border:1px solid #91a9bc;border-radius:24px;padding:9px 13px;box-shadow:0 3px 14px rgba(14,37,58,.2);font-size:14px;font-weight:700;cursor:pointer}\n.gv-reader-float :is(button):focus-visible{outline:3px solid #c16a00!important;outline-offset:2px}\nhtml.gv-high-contrast .gv-global-nav,html.gv-high-contrast .gv-global-nav__dropdown-menu,html.gv-high-contrast .gv-reader-float__panel,html.gv-high-contrast .gv-reader-float__open{background:#fff!important;color:#000!important;border:2px solid #000!important}\nhtml.gv-high-contrast .gv-global-nav :is(a,summary),html.gv-high-contrast .gv-reader-float__close{color:#000!important;background:#fff!important;border-color:#000!important}\n@media(max-width:870px){\n.gv-global-nav__inner{justify-content:space-between;flex-wrap:wrap;gap:6px}\n.gv-global-nav__toggle{display:inline-flex;align-items:center;justify-content:center}\n.gv-global-nav__links{display:none;flex:1 0 100%;width:100%;min-width:0;flex-direction:column;align-items:stretch;gap:1px;max-height:calc(100dvh - 85px);overflow-y:auto;padding:3px 0 5px}\n.gv-global-nav__links.gv-global-nav__links--open{display:flex}\n.gv-global-nav__links>a,.gv-global-nav__dropdown>summary{width:100%;min-height:42px}\n.gv-global-nav__dropdown-menu,.gv-global-nav__dropdown:last-child .gv-global-nav__dropdown-menu{position:static;min-width:0;max-height:none;box-shadow:none;border:0;border-left:3px solid #b5c9d7;border-radius:0;margin:0 0 4px 13px}\n.gv-reader-float{left:10px;right:10px;bottom:max(10px,env(safe-area-inset-bottom));max-width:none;display:flex;justify-content:flex-end}\n.gv-reader-float__panel{max-width:100%;max-height:calc(100dvh - 25px);overflow:auto}\n.gv-reader-float__panel>.accessibility-controls{flex:1;min-width:0;justify-content:flex-start}\n.gv-reader-float__panel>.accessibility-controls .a11y-label{display:none}\n}\n@media print{.gv-global-nav,.gv-reader-float{display:none!important}}\n\n\n/* Revisão editorial: tipografia que responde aos controles A+/A− em todas as abas. */\n.gv-global-nav{font:600 1rem/1.4 Arial,sans-serif}\n.gv-global-nav__inner{max-width:88rem;min-height:4.3rem;padding:.5rem clamp(.9rem,2.3vw,1.75rem);gap:1.1rem}\n.gv-global-nav__brand{font-size:1.14rem;line-height:1.2;font-weight:800;letter-spacing:.005em;padding-right:1rem;margin-right:.1rem;border-right:1px solid #cad7e2;color:#1b4059!important}\n.gv-global-nav__links{gap:.35rem}\n.gv-global-nav__links>a,.gv-global-nav__dropdown>summary{\n min-height:2.85rem;gap:.35rem;padding:.65rem .78rem;\n font:700 1rem/1.3 Arial,sans-serif;\n border:1px solid transparent;border-radius:.7rem;\n text-underline-offset:.2em\n}\n.gv-global-nav__dropdown>summary::after{content:\"⌄\";font-size:1.18em;font-weight:500;line-height:1;margin-left:.12rem}\n.gv-global-nav__links>a:hover,.gv-global-nav__dropdown>summary:hover,.gv-global-nav__dropdown[open]>summary{\n background:#eaf2f7;border-color:#b7ccd9;text-decoration:none\n}\n.gv-global-nav__dropdown-menu{min-width:14rem;max-height:min(65vh,28rem);padding:.45rem;gap:.1rem;border-radius:.75rem}\n.gv-global-nav__dropdown:last-child .gv-global-nav__dropdown-menu{min-width:15rem}\n.gv-global-nav__dropdown-menu a{font-size:1rem;line-height:1.35;font-weight:600;padding:.65rem .75rem;border-radius:.5rem}\n.gv-global-nav__toggle{font:700 1rem/1.3 Arial,sans-serif;min-height:2.85rem;padding:.65rem .9rem}\nhtml.gv-global-ui-ready{scroll-padding-top:5.8rem!important}\nhtml.gv-global-ui-ready [id]{scroll-margin-top:5.8rem}\n.gv-reader-float{font:500 .95rem/1.4 Arial,sans-serif}\n.gv-reader-float__panel>.accessibility-controls .a11y-label{font-size:.9rem}\n.gv-reader-float__panel>.accessibility-controls button{font-size:.95rem;min-height:2.75rem;min-width:2.75rem;padding:.45rem .65rem}\n.gv-reader-float__close{font-size:1.35rem;min-width:2.2rem;min-height:2.2rem;width:2.2rem;height:2.2rem}\n.gv-reader-float__open{font-size:.95rem;min-height:2.75rem;padding:.55rem .85rem}\n/* Se os textos crescem, o menu vira expansível para evitar cortes ou sobreposição. */\n.gv-global-nav--compact .gv-global-nav__inner{justify-content:space-between;flex-wrap:wrap;gap:.35rem}\n.gv-global-nav--compact .gv-global-nav__brand{border-right:0}\n.gv-global-nav--compact .gv-global-nav__toggle{display:inline-flex;align-items:center;justify-content:center}\n.gv-global-nav--compact .gv-global-nav__links{display:none;flex:1 0 100%;width:100%;min-width:0;flex-direction:column;align-items:stretch;gap:.12rem;max-height:calc(100dvh - 6.5rem);overflow-y:auto;padding:.25rem 0 .4rem}\n.gv-global-nav--compact .gv-global-nav__links.gv-global-nav__links--open{display:flex}\n.gv-global-nav--compact .gv-global-nav__links>a,.gv-global-nav--compact .gv-global-nav__dropdown>summary{width:100%;min-height:2.85rem}\n.gv-global-nav--compact .gv-global-nav__dropdown-menu,.gv-global-nav--compact .gv-global-nav__dropdown:last-child .gv-global-nav__dropdown-menu{\n position:static;min-width:0;max-height:none;box-shadow:none;\n border:0;border-left:3px solid #b5c9d7;border-radius:0;margin:0 0 .3rem 1rem\n}\n@media(max-width:870px){\n .gv-global-nav__inner{min-height:3.7rem}\n .gv-global-nav__brand{border-right:0}\n .gv-global-nav__links>a,.gv-global-nav__dropdown>summary{min-height:2.85rem}\n}\n@media print{.gv-global-nav,.gv-reader-float{display:none!important}}\n";
document.head.appendChild(style);
const labels={
pt:{brand:"Guia Visual",menu:"Menu",home:"Início",essential:"Percurso Essencial",thesis:"Dissertação",panels:"Pranchas",authors:"Autores",more:"Todas as abas",intro:"Introdução",chapter:"Capítulo",refs:"Referências",banca:"Banca",glossary:"Glossário",art:"Arte e história",matrix:"Matriz Aberta",access:"Acessibilidade",portable:"Edição portátil",libras:"Libras e transcrição",reader:"Leitura",close:"Fechar a barra de leitura",open:"Reabrir a barra de leitura"},
en:{brand:"Visual Guide",menu:"Menu",home:"Home",essential:"Essential Path",thesis:"Dissertation",panels:"Panels",authors:"Authors",more:"All sections",intro:"Introduction",chapter:"Chapter",refs:"References",banca:"Examination",glossary:"Glossary",art:"Art and history",matrix:"Open Matrix",access:"Accessibility",portable:"Offline edition",libras:"Sign language and transcript",reader:"Reading",close:"Close reading controls",open:"Reopen reading controls"},
es:{brand:"Guía Visual",menu:"Menú",home:"Inicio",essential:"Recorrido esencial",thesis:"Disertación",panels:"Láminas",authors:"Autores",more:"Todas las secciones",intro:"Introducción",chapter:"Capítulo",refs:"Referencias",banca:"Evaluación",glossary:"Glosario",art:"Arte e historia",matrix:"Matriz Abierta",access:"Accesibilidad",portable:"Edición sin conexión",libras:"Lengua de señas y transcripción",reader:"Lectura",close:"Cerrar controles de lectura",open:"Reabrir controles de lectura"}
};
const nav=document.createElement("nav");
nav.className="gv-global-nav";
nav.id="gv-global-nav";
nav.setAttribute("aria-label","Menu principal permanente do Guia Visual");
nav.innerHTML='<div class="gv-global-nav__inner">'+
'<a class="gv-global-nav__brand" href="index.html#explorar" data-gvu="brand">Guia Visual</a>'+
'<button type="button" class="gv-global-nav__toggle" aria-expanded="false" aria-controls="gv-global-nav-links" data-gvu="menu">Menu</button>'+
'<div class="gv-global-nav__links" id="gv-global-nav-links">'+
'<a href="index.html#explorar" data-gvu="home">Início</a>'+
'<a href="percurso-essencial.html" data-gvu="essential">Percurso Essencial</a>'+
'<details class="gv-global-nav__dropdown"><summary data-gvu="thesis">Dissertação</summary><div class="gv-global-nav__dropdown-menu">'+
'<a href="index.html#cap0" data-gvu="intro">Introdução</a>'+
[1,2,3,4,5,6].map(n=>'<a href="index.html#cap'+n+'" data-gv-chapter="'+n+'">Capítulo '+n+'</a>').join("")+
'<a href="documento-qualificacao.html#referencias" data-gvu="refs">Referências</a>'+
'</div></details>'+
'<a href="index.html#cap1" data-gvu="panels">Pranchas</a>'+
'<a href="index.html#galeria" data-gvu="authors">Autores</a>'+
'<details class="gv-global-nav__dropdown"><summary data-gvu="more">Todas as abas</summary><div class="gv-global-nav__dropdown-menu">'+

'<a href="glossario.html" data-gvu="glossary">Glossário</a>'+
'<a href="percursos-arte.html" data-gvu="art">Arte e história</a>'+
'<a href="matriz-aberta.html" data-gvu="matrix">Matriz Aberta</a>'+
'<a href="acessibilidade.html" data-gvu="access">Acessibilidade</a>'+
'<a href="portatil.html" data-gvu="portable">Edição portátil</a>'+
'<a href="libras-apresentacao.html" data-gvu="libras">Libras e transcrição</a>'+
'</div></details>'+
'</div></div>';
const mainHeader=document.querySelector("body > header");
if(mainHeader&&mainHeader.parentElement===document.body)mainHeader.insertAdjacentElement("afterend",nav);
else document.body.insertBefore(nav,document.body.firstChild);
document.documentElement.classList.add("gv-global-ui-ready");
const navToggle=nav.querySelector(".gv-global-nav__toggle");
const links=nav.querySelector(".gv-global-nav__links");
function toggleMobile(open){
 links.classList.toggle("gv-global-nav__links--open",open);
 navToggle.setAttribute("aria-expanded",String(open));
}
navToggle.addEventListener("click",()=>toggleMobile(navToggle.getAttribute("aria-expanded")!=="true"));

// Ajusta a densidade da navegação ao tamanho de leitura escolhido pelo visitante.
function updateNavDensity(){
 const percent=parseFloat(document.documentElement.style.fontSize)||100;
 const scale=Math.max(.8,Math.min(2,percent/100));
 const compact=document.documentElement.clientWidth<1110*scale;
 nav.classList.toggle("gv-global-nav--compact",compact);
 if(!compact)toggleMobile(false);
}
window.addEventListener("resize",updateNavDensity,{passive:true});
new MutationObserver(updateNavDensity).observe(document.documentElement,{attributes:true,attributeFilter:["style"]});
updateNavDensity();

nav.querySelectorAll(".gv-global-nav__dropdown").forEach(details=>{
 details.addEventListener("pointerenter",event=>{if(event.pointerType==="mouse"&&matchMedia("(min-width:871px)").matches)details.open=true});
 details.addEventListener("pointerleave",event=>{if(event.pointerType==="mouse"&&!details.contains(document.activeElement))details.open=false});
 details.addEventListener("toggle",()=>{if(details.open)nav.querySelectorAll(".gv-global-nav__dropdown").forEach(other=>{if(other!==details)other.open=false})});
 details.addEventListener("keydown",event=>{if(event.key==="Escape"){details.open=false;details.querySelector("summary").focus()}});
});
document.addEventListener("pointerdown",event=>{if(!nav.contains(event.target))nav.querySelectorAll(".gv-global-nav__dropdown").forEach(x=>x.open=false)});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{toggleMobile(false);nav.querySelectorAll(".gv-global-nav__dropdown").forEach(x=>x.open=false)}));

const controls=document.querySelector(".accessibility-controls");
let closeButton=null,openButton=null;
if(controls){
 const reader=document.createElement("aside");
 reader.className="gv-reader-float";
 reader.id="gv-reader-float";
 reader.setAttribute("aria-label","Ferramentas de leitura permanentes");
 const panel=document.createElement("div");
 panel.className="gv-reader-float__panel";
 panel.id="gv-reader-float-panel";
 closeButton=document.createElement("button");
 closeButton.type="button";
 closeButton.className="gv-reader-float__close";
 closeButton.textContent="\u00d7";
 openButton=document.createElement("button");
 openButton.type="button";
 openButton.className="gv-reader-float__open";
 openButton.setAttribute("aria-controls","gv-reader-float-panel");
 panel.appendChild(controls);
 panel.appendChild(closeButton);
 reader.appendChild(panel);
 reader.appendChild(openButton);
 document.body.appendChild(reader);
 const key="gv-a11y-panel-hidden-v1";
 function setClosed(closed,focus){
  panel.hidden=closed;
  openButton.hidden=!closed;
  openButton.setAttribute("aria-expanded",String(!closed));
  if(focus)(closed?openButton:closeButton).focus();
  try{sessionStorage.setItem(key,closed?"1":"0")}catch(e){}
 }
 closeButton.addEventListener("click",()=>setClosed(true,true));
 openButton.addEventListener("click",()=>setClosed(false,true));
 let closed=false;
 try{closed=sessionStorage.getItem(key)==="1"}catch(e){}
 setClosed(closed,false);
}
function currentLanguage(){
 const selector=document.getElementById("guide-lang");
 if(selector&&labels[selector.value])return selector.value;
 try{const stored=localStorage.getItem("gv-guide-language-v2");return labels[stored]?stored:"pt"}catch(e){return "pt"}
}
function updateLanguage(){
 const lang=currentLanguage(),dict=labels[lang];
 nav.querySelectorAll("[data-gvu]").forEach(el=>{const key=el.getAttribute("data-gvu");if(dict[key]){el.textContent=dict[key];el.lang=lang==="pt"?"pt-BR":lang}});
 nav.querySelectorAll("[data-gv-chapter]").forEach(el=>{el.textContent=dict.chapter+" "+el.dataset.gvChapter;el.lang=lang==="pt"?"pt-BR":lang});
 if(closeButton){closeButton.setAttribute("aria-label",dict.close);closeButton.title=dict.close}
 if(openButton){openButton.textContent="Aa · "+dict.reader;openButton.setAttribute("aria-label",dict.open);openButton.title=dict.open}
 const readerLabel=controls?.querySelector(".a11y-label");
 if(readerLabel)readerLabel.textContent=dict.reader;
}
document.addEventListener("change",event=>{if(event.target?.id==="guide-lang")updateLanguage()});
updateLanguage();
})();
