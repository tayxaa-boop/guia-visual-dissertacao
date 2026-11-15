/* Guia Visual: navegação flutuante por sobrenomes dos perfis cadastrados.
   As letras representam o sobrenome de referência (não a inicial do prenome).
   O índice é derivado dos cartões existentes; não inventa novos perfis. */
(function(){
"use strict";
const cards=[...document.querySelectorAll(".bio-list .bio-card")];
const query=document.getElementById("busca");
if(!cards.length||!query||document.getElementById("gv-surname-nav"))return;
const abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const exceptions={
 "G. Stanley Hall (Granville Stanley Hall)":"Hall",
 "Isidoro de Sevilha (Isidorus Hispalensis)":"Sevilha",
 "Aníbal Quijano Obregón":"Quijano",
 "Aristóteles":"Aristóteles"
};
function surnameOf(name){
 if(exceptions[name])return exceptions[name];
 const withoutParentheses=name.replace(/\s*\([^)]*\)\s*/g,"").trim();
 return withoutParentheses.split(/\s+/).pop()||name;
}
function fold(t){return (t||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase()}
const profiles=cards.map((card,i)=>{
 const title=card.querySelector(".bio-head strong")?.textContent?.trim()||"";
 const surname=surnameOf(title);
 if(!card.id)card.id="autor-ficha-"+(i+1);
 return {card,title,surname,initial:fold(surname).charAt(0)};
});
const labels={
 pt:{open:"Sobrenomes A–Z",heading:"Ir ao autor pelo sobrenome",close:"Fechar índice",tip:"As letras são iniciais dos sobrenomes, não dos nomes próprios.",none:"Não há fichas para esta letra na pesquisa.",return:"Mostrar todas as fichas",list:"Selecione um sobrenome para abrir a ficha."},
 en:{open:"Surnames A–Z",heading:"Find an author by surname",close:"Close index",tip:"Letters refer to surnames, not first names.",none:"No matching profiles for this letter.",return:"Show all profiles",list:"Choose a surname to open the profile."},
 es:{open:"Apellidos A–Z",heading:"Buscar autor por apellido",close:"Cerrar índice",tip:"Las letras indican apellidos, no nombres.",none:"No hay fichas para esta letra en la búsqueda.",return:"Mostrar todas las fichas",list:"Seleccione un apellido para abrir la ficha."}
};
function language(){
 const sel=document.getElementById("gv-bridge-select");
 if(sel&&labels[sel.value])return sel.value;
 try{const saved=localStorage.getItem("gv-guide-language-v2");return labels[saved]?saved:"pt"}catch(e){return "pt"}
}
const host=document.createElement("aside");host.className="gv-surname-dock";host.id="gv-surname-nav";
const toggle=document.createElement("button");toggle.type="button";toggle.className="gv-surname-toggle";
toggle.setAttribute("aria-controls","gv-surname-panel");toggle.setAttribute("aria-expanded","false");
const panel=document.createElement("section");panel.className="gv-surname-panel";panel.id="gv-surname-panel";panel.hidden=true;
const heading=document.createElement("div");heading.className="gv-surname-header";
const h=document.createElement("h2");h.className="gv-surname-title";h.id="gv-surname-title";
const close=document.createElement("button");close.type="button";close.className="gv-surname-close";close.textContent="×";
heading.append(h,close);
const tip=document.createElement("p");tip.className="gv-surname-tip";
const letters=document.createElement("div");letters.className="gv-surname-letters";letters.setAttribute("role","group");letters.setAttribute("aria-label","Iniciais dos sobrenomes");
const buttons=new Map();
for(const letter of abc){
 const b=document.createElement("button");b.type="button";b.textContent=letter;
 b.className="gv-surname-letter";b.dataset.letter=letter;
 b.addEventListener("click",()=>showGroup(letter));
 letters.append(b);buttons.set(letter,b);
}
const description=document.createElement("p");description.className="gv-surname-description";
const list=document.createElement("div");list.className="gv-surname-list";list.setAttribute("role","group");
panel.setAttribute("aria-labelledby","gv-surname-title");
panel.append(heading,tip,letters,description,list);host.append(toggle,panel);document.body.append(host);
let selected=null;
function matching(){return profiles.filter(p=>!p.card.hidden)}
function setOpen(open){
 panel.hidden=!open;toggle.setAttribute("aria-expanded",String(open));
 if(open){refresh();}else{selected=null;toggle.focus({preventScroll:true});}
}
toggle.addEventListener("click",()=>setOpen(panel.hidden));
close.addEventListener("click",()=>setOpen(false));
host.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.hidden){e.preventDefault();setOpen(false)}});
document.addEventListener("pointerdown",e=>{if(!panel.hidden&&!host.contains(e.target))setOpen(false)});
function showGroup(letter){
 selected=letter;
 for(const [key,b] of buttons)b.setAttribute("aria-pressed",String(key===letter));
 list.replaceChildren();
 const matches=matching().filter(p=>p.initial===letter).sort((a,b)=>{
  return a.surname.localeCompare(b.surname,"pt-BR",{sensitivity:"base"})||a.title.localeCompare(b.title,"pt-BR");
 });
 const dict=labels[language()];description.textContent=matches.length?dict.list:dict.none;
 if(!matches.length)return;
 for(const p of matches){
  const a=document.createElement("button");a.type="button";a.className="gv-surname-person";
  const strong=document.createElement("strong");strong.textContent=p.surname;
  const small=document.createElement("span");small.textContent=p.title;
  a.append(strong,small);
  a.setAttribute("aria-label",p.surname+": "+p.title);
  a.addEventListener("click",()=>{
   if(p.card.hidden){query.value="";query.dispatchEvent(new Event("input",{bubbles:true}))}
   const details=p.card.querySelector("details");
   if(details)details.open=true;
   setOpen(false);
   const summary=details?.querySelector("summary");
   if(summary){summary.setAttribute("tabindex","-1");summary.focus({preventScroll:true})}
   p.card.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
   history.replaceState(null,"","#"+p.card.id);
  });
  list.append(a);
 }
}
function refresh(){
 const lang=language(),dict=labels[lang];
 toggle.textContent=dict.open;toggle.setAttribute("aria-label",dict.open);
 h.textContent=dict.heading;close.setAttribute("aria-label",dict.close);close.title=dict.close;tip.textContent=dict.tip;
 letters.setAttribute("aria-label",dict.tip);
 const profilesVisible=matching();
 for(const [letter,b] of buttons){const yes=profilesVisible.some(p=>p.initial===letter);b.disabled=!yes;b.title=yes?letter+": "+dict.heading:letter+": "+dict.none}
 if(selected&&buttons.get(selected)?.disabled)selected=null;
 if(!selected)selected=abc.find(l=>!buttons.get(l).disabled)||null;
 if(selected)showGroup(selected);else{list.replaceChildren();description.textContent=dict.none}
}
query.addEventListener("input",refresh);
document.getElementById("limpar")?.addEventListener("click",()=>requestAnimationFrame(refresh));
document.addEventListener("change",e=>{if(e.target?.id==="gv-bridge-select")refresh()});
refresh();
})();