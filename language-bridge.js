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
   t.node.nodeValue=translated?t.raw.replace(t.original,translated):t.raw;
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