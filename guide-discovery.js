/* Busca local pelas seções/pranchas e seletor de idiomas acessível. Não usa serviços externos. */
(function(){
"use strict";
const root=document.getElementById("gv-discovery");
const field=document.getElementById("gv-search-input");
const form=document.getElementById("gv-site-search");
const results=document.getElementById("gv-search-results");
const sel=document.getElementById("guide-lang");
if(!root||!field||!form||!results||!sel)return;
const flags=[...root.querySelectorAll("[data-guide-lang]")];
const t={
pt:{placeholder:"Pesquisar no Guia",search:"Pesquisar",results:"Resultados da pesquisa",none:"Nenhuma seção encontrada. Tente outro termo.",more:"Mostrando os primeiros resultados",close:"Fechar resultados",section:"Seção",page:"Página do Guia",plate:"Prancha",min:"Digite pelo menos duas letras.",info:"Sobre os idiomas"},
en:{placeholder:"Search the Guide",search:"Search",results:"Search results",none:"No matching sections. Try another term.",more:"Showing the first results",close:"Close results",section:"Section",page:"Guide page",plate:"Panel",min:"Enter at least two letters.",info:"About languages"},
es:{placeholder:"Buscar en la Guía",search:"Buscar",results:"Resultados de búsqueda",none:"No se encontraron secciones. Pruebe otro término.",more:"Mostrando los primeros resultados",close:"Cerrar resultados",section:"Sección",page:"Página de la Guía",plate:"Lámina",min:"Escriba al menos dos letras.",info:"Sobre los idiomas"},
fr:{placeholder:"Rechercher dans le Guide",search:"Rechercher",results:"Résultats de recherche",none:"Aucune section trouvée. Essayez un autre terme.",more:"Affichage des premiers résultats",close:"Fermer les résultats",section:"Section",page:"Page du Guide",plate:"Planche",min:"Saisissez au moins deux lettres.",info:"À propos des langues"}
};
function lang(){return t[sel.value]?sel.value:"pt";}
function norm(s){return String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase().replace(/\s+/g," ").trim();}
const pages=[
["Percurso Essencial","percurso-essencial.html","síntese pesquisa sete etapas desenvolvimento adolescência"],
["Glossário de conceitos","glossario.html","conceitos mediação contradição totalidade psicologia histórico-cultural"],
["Dissertação em HTML","documento-qualificacao.html","texto integral capítulos referências qualificação"],
["Edição portátil","portatil.html","offline sem internet acessibilidade leitura"],
["Biografias de pesquisadoras e pesquisadores","biografias.html","autoras autores Vigotski Leontiev Luria Elkonin pedagogia psicologia"],
["Percursos artísticos","percursos-arte.html","arte adolescência literatura fotografia pintura"],
["Matriz Aberta","matriz-aberta.html","matriz tripartida metodologia pesquisa análise"],
["Acessibilidade","acessibilidade.html","acessibilidade contraste leitura linear libras"],
["Libras e transcrição","libras-apresentacao.html","libras língua brasileira de sinais"],
["Movimento dialético","#dialetica","lógica formal dialética esquema movimento contradição"],
["Sobre o Guia","#sobre-guia","apêndice editorial navegação autoria"],
["Sobre a autora","#autora","formação trajetória contato pesquisa"],
["Pranchas por capítulos","#dissertacao-indice","diagramas capítulos 21 figuras"]
];
function indexItems(){
 const seen=new Set(),a=[];
 function add(title,href,body,type){
  if(!title||!href||seen.has(href))return;
  seen.add(href);a.push({title:title.trim().replace(/\s+/g," "),href,body:norm(body),type});
 }
 pages.forEach(([title,href,keys])=>add(title,href,title+" "+keys,"page"));
 [...document.querySelectorAll("article.plate[id]")].forEach((p,i)=>{
  const title=p.querySelector("h3")?.textContent||("Prancha "+(i+1));
  add("Prancha "+(i+1)+" · "+title,"#"+p.id,p.textContent.slice(0,18000),"plate");
 });
 [...document.querySelectorAll("main section[id],main nav[id],main article[id]")].forEach(el=>{
  if(el.matches(".plate")||el.closest(".plate"))return;
  const heading=el.querySelector(":scope > h2, :scope > h3, :scope > p.home-eyebrow");
  if(!heading)return;
  add(heading.textContent,"#"+el.id,el.textContent.slice(0,12000),"section");
 });
 return a;
}
function clear(){results.hidden=true;results.replaceChildren();field.setAttribute("aria-expanded","false");}
function render(){
 const ui=t[lang()],query=norm(field.value);
 if(!query){clear();return}
 const wrap=document.createElement("div");wrap.className="gv-search-results__head";
 const status=document.createElement("strong");status.id="gv-search-status";
 const close=document.createElement("button");close.type="button";close.textContent=ui.close;
 close.addEventListener("click",()=>{clear();field.focus()});
 wrap.append(status,close);
 results.replaceChildren(wrap);
 results.hidden=false;
 field.setAttribute("aria-expanded","true");
 if(query.length<2){status.textContent=ui.min;return}
 const words=query.split(" ").filter(Boolean);
 const hits=indexItems().map(entry=>{
  const h=norm(entry.title),b=entry.body;
  const matches=words.every(w=>h.includes(w)||b.includes(w));
  const score=(h.includes(query)?15:0)+words.filter(w=>h.includes(w)).length*5+(entry.type==="plate"?2:0);
  return {...entry,matches,score};
 }).filter(e=>e.matches).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title));
 status.textContent=hits.length?ui.results+" · "+hits.length:ui.none;
 if(!hits.length)return;
 const list=document.createElement("ul");list.className="gv-search-results__list";
 hits.slice(0,12).forEach(hit=>{
  const li=document.createElement("li"),a=document.createElement("a");
  a.href=hit.href;
  const b=document.createElement("strong");b.textContent=hit.title;
  const small=document.createElement("span");small.className="gv-search-results__type";
  small.textContent=ui[hit.type]||ui.section;
  a.append(b,small);a.addEventListener("click",clear);li.append(a);list.append(li);
 });
 results.append(list);
 if(hits.length>12){const more=document.createElement("p");more.className="language-scope";more.textContent=ui.more+" (12/"+hits.length+").";results.append(more)}
}
function sync(){
 const selected=lang(),ui=t[selected];
 flags.forEach(b=>{const on=b.dataset.guideLang===selected;b.setAttribute("aria-pressed",String(on));b.classList.toggle("is-active",on)});
 field.placeholder=ui.placeholder;field.setAttribute("aria-label",ui.placeholder);
 form.querySelector("button[type=submit]")?.setAttribute("aria-label",ui.search);
 root.querySelector(".gv-lang-note > summary")?.setAttribute("aria-label",ui.info);
 if(!results.hidden)render();
}
flags.forEach(b=>b.addEventListener("click",()=>{
 const value=b.dataset.guideLang;
 if(!t[value]||sel.value===value)return;
 sel.value=value;
 sel.dispatchEvent(new Event("change",{bubbles:true}));
}));
form.addEventListener("submit",e=>{e.preventDefault();render()});
field.addEventListener("input",render);
field.addEventListener("keydown",e=>{if(e.key==="Escape"){e.preventDefault();clear()}});
document.addEventListener("click",e=>{if(!results.hidden&&!results.contains(e.target)&&!form.contains(e.target))clear()});
sel.addEventListener("change",sync);
sync();
})();
