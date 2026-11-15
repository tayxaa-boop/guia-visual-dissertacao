/* Glossário: índice alfabético flutuante, consciente da busca e acessível por teclado. */
(function(){
"use strict";
const entries=[...document.querySelectorAll("article.entry")];
const search=document.getElementById("termo");
if(!entries.length||!search)return;
const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const normalize=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase();
const letterFor=entry=>normalize(entry.querySelector("h2")?.textContent||"").trim().charAt(0);
const byLetter=new Map(alpha.map(l=>[l,entries.filter(e=>letterFor(e)===l)]));
const dict={
 pt:{title:"A–Z",aria:"Índice alfabético flutuante do glossário",collapse:"Recolher índice alfabético",restore:"Mostrar índice A–Z",top:"↑ Início",available:(l,n)=>l+": "+n+" verbete(s)",unavailable:l=>l+": sem verbetes nesta seleção",status:(l,n)=>"Letra "+l+": "+n+" verbete(s)."},
 en:{title:"A–Z",aria:"Floating alphabetical glossary index",collapse:"Collapse alphabetical index",restore:"Show A–Z index",top:"↑ Top",available:(l,n)=>l+": "+n+" entries",unavailable:l=>l+": no matching entries",status:(l,n)=>"Letter "+l+": "+n+" entries."},
 es:{title:"A–Z",aria:"Índice alfabético flotante del glosario",collapse:"Ocultar el índice alfabético",restore:"Mostrar índice A–Z",top:"↑ Inicio",available:(l,n)=>l+": "+n+" entradas",unavailable:l=>l+": sin entradas en esta selección",status:(l,n)=>"Letra "+l+": "+n+" entradas."}
};
function language(){
 const sel=document.getElementById("gv-bridge-select");
 if(sel&&dict[sel.value])return sel.value;
 try{const value=localStorage.getItem("gv-guide-language-v2");return dict[value]?value:"pt";}catch(e){return "pt";}
}
const rail=document.createElement("nav");
rail.id="gv-alpha-rail";rail.className="gv-alpha-rail";
rail.setAttribute("aria-label",dict.pt.aria);
const head=document.createElement("div");head.className="gv-alpha-rail__head";
const title=document.createElement("span");title.className="gv-alpha-rail__title";title.textContent="A–Z";
const collapse=document.createElement("button");collapse.type="button";collapse.className="gv-alpha-rail__collapse";collapse.textContent="×";
head.append(title,collapse);
const letters=document.createElement("div");letters.className="gv-alpha-rail__letters";letters.setAttribute("role","group");
const buttons=new Map();
for(const l of alpha){
 const button=document.createElement("button");button.type="button";button.className="gv-alpha-rail__letter";
 button.textContent=l;button.dataset.letter=l;
 button.addEventListener("click",()=>{
  const matches=(byLetter.get(l)||[]).filter(e=>!e.hidden);
  if(!matches.length)return;
  const target=matches[0],heading=target.querySelector("h2");
  if(heading){heading.setAttribute("tabindex","-1");heading.focus({preventScroll:true});}
  target.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
  if(location.hash!=="#"+target.id)history.replaceState(null,"","#"+target.id);
  status.textContent=dict[language()].status(l,matches.length);
  markActive(l);
 });
 buttons.set(l,button);letters.append(button);
}
const top=document.createElement("button");top.type="button";top.className="gv-alpha-rail__top";
top.addEventListener("click",()=>{document.getElementById("conteudo")?.scrollIntoView({behavior:"smooth",block:"start"});search.focus({preventScroll:true});});
const status=document.createElement("span");status.className="gv-alpha-rail__status";status.setAttribute("role","status");status.setAttribute("aria-live","polite");
rail.append(head,letters,top,status);
const restore=document.createElement("button");restore.type="button";restore.className="gv-alpha-restore";restore.textContent="A–Z";restore.hidden=true;
function setOpen(open){rail.hidden=!open;restore.hidden=open;if(open){collapse.focus({preventScroll:true})}else{restore.focus({preventScroll:true})}}
collapse.addEventListener("click",()=>setOpen(false));
restore.addEventListener("click",()=>setOpen(true));
document.body.append(rail,restore);
function markActive(letter){for(const [l,b] of buttons){if(l===letter&&!b.disabled)b.setAttribute("aria-current","location");else b.removeAttribute("aria-current");}}
function update(){
 const lang=language(),t=dict[lang];
 rail.setAttribute("aria-label",t.aria);title.textContent=t.title;collapse.setAttribute("aria-label",t.collapse);
 collapse.title=t.collapse;restore.setAttribute("aria-label",t.restore);restore.title=t.restore;
 top.textContent=t.top;
 for(const [letter,button] of buttons){
  const count=byLetter.get(letter).filter(e=>!e.hidden).length;
  button.disabled=count===0;
  button.title=count?t.available(letter,count):t.unavailable(letter);
  button.setAttribute("aria-label",button.title);
 }
 updateScrollPosition();
}
function updateScrollPosition(){
 const visible=entries.filter(e=>!e.hidden);
 if(!visible.length){markActive(null);return}
 let current=visible[0],offset=120;
 for(const e of visible){if(e.getBoundingClientRect().top<=offset)current=e;else break}
 markActive(letterFor(current));
}
let scheduled=false;
window.addEventListener("scroll",()=>{
 if(scheduled)return;scheduled=true;
 requestAnimationFrame(()=>{scheduled=false;updateScrollPosition()});
},{passive:true});
search.addEventListener("input",update);
document.addEventListener("change",e=>{if(e.target?.id==="gv-bridge-select")update()});
update();
})();