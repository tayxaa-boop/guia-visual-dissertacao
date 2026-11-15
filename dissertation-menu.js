/* Submenu acessível: mouse, teclado, toque; preserva as âncoras existentes. */
(function(){
"use strict";
const root=document.getElementById("gv-dissertation-dropdown");
if(!root)return;
const trigger=document.getElementById("gv-dissertation-trigger");
const menu=document.getElementById("gv-dissertation-options");
const select=document.getElementById("guide-lang");
const labels={
 pt:{trigger:"Dissertação",label:"Seções da dissertação",parts:["Introdução","Capítulo 1","Capítulo 2","Capítulo 3","Capítulo 4","Capítulo 5","Capítulo 6","Referências"]},
 en:{trigger:"Dissertation",label:"Dissertation sections",parts:["Introduction","Chapter 1","Chapter 2","Chapter 3","Chapter 4","Chapter 5","Chapter 6","References"]},
 es:{trigger:"Disertación",label:"Secciones de la disertación",parts:["Introducción","Capítulo 1","Capítulo 2","Capítulo 3","Capítulo 4","Capítulo 5","Capítulo 6","Referencias"]}
};
const items=[...menu.querySelectorAll("a")];
function setOpen(open){root.classList.toggle("is-open",open);trigger.setAttribute("aria-expanded",String(open));}
root.addEventListener("pointerenter",function(e){if(e.pointerType==="mouse"||e.pointerType==="pen")setOpen(true)});
root.addEventListener("pointerleave",function(e){if((e.pointerType==="mouse"||e.pointerType==="pen")&&!root.contains(document.activeElement))setOpen(false)});
root.addEventListener("focusin",function(){setOpen(true)});
root.addEventListener("focusout",function(e){if(!root.contains(e.relatedTarget))setOpen(false)});
trigger.addEventListener("click",function(e){
 if(e.detail===0){setOpen(!root.classList.contains("is-open"));return;}
 if(e.pointerType==="touch"){setOpen(!root.classList.contains("is-open"));return;}
 setOpen(true);
});
trigger.addEventListener("keydown",function(e){
 if(e.key==="ArrowDown"){e.preventDefault();setOpen(true);items[0]?.focus();}
});
root.addEventListener("keydown",function(e){
 if(e.key==="Escape"){e.preventDefault();trigger.focus();setOpen(false);}
});
items.forEach(a=>a.addEventListener("click",()=>setOpen(false)));
document.addEventListener("pointerdown",function(e){if(!root.contains(e.target))setOpen(false)});
function localize(){
 const lang=labels[select?.value]?select.value:"pt",d=labels[lang];
 trigger.firstChild.nodeValue=d.trigger+" ";
 trigger.setAttribute("aria-label",d.trigger+" — "+d.label);
 menu.setAttribute("aria-label",d.label);
 items.forEach((a,i)=>{if(d.parts[i]){a.textContent=d.parts[i];a.setAttribute("lang",lang==="pt"?"pt-BR":lang)}});
}
select?.addEventListener("change",localize);localize();
})();