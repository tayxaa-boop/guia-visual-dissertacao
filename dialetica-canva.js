/* Reconstituição progressiva da prancha 26; independente de rede e de bibliotecas externas. */
(function(){
 'use strict';
 const root=document.getElementById('cv-comparacao'),scene=document.getElementById('cv-cenario');
 if(!root||!scene)return;
 const $=(id)=>document.getElementById(id), langSel=$('guide-lang'), full=$('cv-percurso-completo');
 const tr={
 pt:{
 intro:'Nesta animação, as setas surgem progressivamente: primeiro o encadeamento expositivo; depois, as mediações e os retornos críticos. A contraposição é didática, não uma rejeição da lógica formal.',
 play:'▶ Reproduzir movimento',formalBtn:'1 · Encadeamento',dialBtn:'2 · Retornos dialéticos',pauseBtn:'Pausar',resumeBtn:'Retomar',resetBtn:'Reiniciar',
 problemHead:'INTRODUÇÃO · PROBLEMA CIENTÍFICO',problemText:'Como a produção acadêmica concebe a adolescência e o desenvolvimento humano? Objeto, problema, objetivos e perspectiva teórico-metodológica.',
 historyHead:'CAPÍTULO 2 · HISTORICIZAR',historyText:'Como a adolescência se constituiu historicamente?',historyAnswer:'A forma histórico-social articula organismo, trabalho, escolarização, direitos e desigualdades. Nova pergunta: como essa historicidade participa da formação do psiquismo?',
 developHead:'CAPÍTULO 3 · COMPREENDER O DESENVOLVIMENTO',developText:'Como as condições sociais participam da constituição do psiquismo e qual é a função da educação escolar?',developAnswer:'Atividade, apropriação cultural e transformações psíquicas. Nova pergunta: como essas relações aparecem nas produções acadêmicas?',
 corpusHead:'CAPÍTULO 4 · INVESTIGAR AS CONCEPÇÕES',corpusText:'Como os estudos constroem suas explicações e que função atribuem às mediações do desenvolvimento?',corpusAnswer:'Reconstrução dos argumentos, Matriz Tripartida e gradação das mediações. Questão: quais respostas são efetivamente sustentadas?',
 finalHead:'CONSIDERAÇÕES FINAIS',finalText:'Retorno ao problema com novas determinações, resultados demonstrados, contradições, limites e questões em aberto.',
 phenHead:'O FENÔMENO E O OBJETO',phenLabel:'Fenômeno objetivo:',phenText:'adolescência e desenvolvimento humano como processos histórico-sociais reais.',objectLabel:'Objeto específico:',objectText:'concepções, explicações e fundamentos elaborados na produção acadêmica.',
 abstract:'ABSTRATO',mediations:'MEDIAÇÕES',concrete:'CONCRETO<br>PENSADO',
 caption:'Reconstituição interpretativa da prancha 26 do Canva, de autoria da pesquisadora. As setas contínuas indicam um encadeamento expositivo; as tracejadas, relações e mediações; os movimentos de retorno, uma nova interrogação do problema. Não representam uma síntese já demonstrada sobre todo o corpus.',
 legend1:'Encadeamento da exposição',legend2:'Mediações e interrogações',legend3:'Retornos críticos',descSummary:'Descrição textual integral da comparação (acessível sem animação)',
 descText:'O primeiro movimento parte da introdução e apresenta, numa direção expositiva, a historicização da adolescência, a compreensão do desenvolvimento humano, a análise das concepções acadêmicas e as considerações finais. O segundo movimento torna visíveis relações em múltiplas direções: trabalho, escolarização, direitos, atividade e suas mediações reorientam as perguntas; as considerações finais retornam ao problema inicial, agora interrogado por novas determinações, contradições, limites e questões abertas. O fenômeno real não se confunde com as concepções produzidas sobre ele. Abstrato e concreto pensado são momentos da reconstrução no pensamento, não rótulos fixos para capítulos.',
 method:'A prancha original destaca Introdução, capítulos 2, 3 e 4 e Considerações Finais. Os capítulos 1 e 5 não desapareceram: seguem no percurso interativo completo, disponível abaixo.',
 phases:['Ponto de partida: o problema de investigação.','Encadeamento expositivo: as perguntas avançam pelos momentos da pesquisa.','Mediações: as relações se cruzam e transformam as perguntas.','Retornos críticos: o problema reaparece sob novas determinações, sem síntese conclusiva do corpus.']
 },
 en:{
 intro:'The arrows appear progressively: first the expository sequence, then mediations and critical returns. This is a teaching comparison, not a rejection of formal logic.',
 play:'▶ Play movement',formalBtn:'1 · Sequence',dialBtn:'2 · Dialectical returns',pauseBtn:'Pause',resumeBtn:'Resume',resetBtn:'Reset',
 problemHead:'INTRODUCTION · RESEARCH PROBLEM',problemText:'How does academic production understand adolescence and human development? Object, research question, aims and theoretical-methodological perspective.',
 historyHead:'CHAPTER 2 · HISTORICISE',historyText:'How was adolescence historically constituted?',historyAnswer:'Historical-social form connects organism, labour, schooling, rights and inequalities. New question: how does this historicity shape psychic development?',
 developHead:'CHAPTER 3 · UNDERSTAND DEVELOPMENT',developText:'How do social conditions shape the psyche, and what is the role of schooling?',developAnswer:'Activity, cultural appropriation and psychic transformations. New question: how are these relations addressed in academic works?',
 corpusHead:'CHAPTER 4 · EXAMINE CONCEPTIONS',corpusText:'How do studies construct explanations and understand developmental mediations?',corpusAnswer:'Reconstructing arguments, the Tripartite Matrix and grading mediations. Which responses are supported by evidence?',
 finalHead:'FINAL CONSIDERATIONS',finalText:'Return to the problem with new determinations, demonstrated results, contradictions, limits and open questions.',
 phenHead:'PHENOMENON AND OBJECT',phenLabel:'Real phenomenon:',phenText:'adolescence and human development as real historical-social processes.',objectLabel:'Research object:',objectText:'conceptions, explanations and foundations developed in academic production.',
 abstract:'ABSTRACT',mediations:'MEDIATIONS',concrete:'CONCRETE<br>IN THOUGHT',
 caption:'Interpretative reconstruction of the author’s Canva slide 26. Solid arrows show an expository sequence; dashed arrows show relations and mediations; return arrows represent renewed questioning. This is not a general synthesis of the corpus.',
 legend1:'Expository sequence',legend2:'Mediations and questions',legend3:'Critical returns',descSummary:'Complete textual description (without animation)',
 descText:'The first movement follows the research problem toward historicity, development, academic conceptions and final considerations. The second emphasises multidirectional mediations and critical returns. The real phenomenon differs from the academic conceptions about it. Abstract and concrete in thought are moments of reconstruction, not fixed labels for chapters.',
 method:'The original slide highlights the Introduction, Chapters 2–4 and Final Considerations. Chapters 1 and 5 remain available in the complete interactive route below.',
 phases:['Starting point: the research problem.','Expository sequence: questions advance through the research.','Mediations: relations intersect and transform questions.','Critical returns: the problem is reconsidered without claiming a definitive corpus-wide synthesis.']
 },
 es:{
 intro:'Las flechas aparecen progresivamente: primero la secuencia expositiva y luego las mediaciones y los retornos críticos. Es una comparación didáctica, no un rechazo de la lógica formal.',
 play:'▶ Reproducir movimiento',formalBtn:'1 · Secuencia',dialBtn:'2 · Retornos dialécticos',pauseBtn:'Pausar',resumeBtn:'Continuar',resetBtn:'Reiniciar',
 problemHead:'INTRODUCCIÓN · PROBLEMA CIENTÍFICO',problemText:'¿Cómo concibe la producción académica la adolescencia y el desarrollo humano? Objeto, problema, objetivos y perspectiva teórico-metodológica.',
 historyHead:'CAPÍTULO 2 · HISTORIZAR',historyText:'¿Cómo se constituyó históricamente la adolescencia?',historyAnswer:'La forma histórico-social vincula organismo, trabajo, escolarización, derechos y desigualdades. Nueva pregunta: ¿cómo participa en la formación del psiquismo?',
 developHead:'CAPÍTULO 3 · COMPRENDER EL DESARROLLO',developText:'¿Cómo participan las condiciones sociales en el psiquismo y qué función cumple la educación escolar?',developAnswer:'Actividad, apropiación cultural y transformaciones psíquicas. Nueva pregunta: ¿cómo aparecen estas relaciones en la producción académica?',
 corpusHead:'CAPÍTULO 4 · INVESTIGAR CONCEPCIONES',corpusText:'¿Cómo construyen sus explicaciones los estudios y qué función atribuyen a las mediaciones?',corpusAnswer:'Reconstrucción de argumentos, Matriz Tripartita y gradación de mediaciones. ¿Qué respuestas están fundamentadas?',
 finalHead:'CONSIDERACIONES FINALES',finalText:'Retorno al problema con nuevas determinaciones, resultados demostrados, contradicciones, límites y preguntas abiertas.',
 phenHead:'FENÓMENO Y OBJETO',phenLabel:'Fenómeno objetivo:',phenText:'adolescencia y desarrollo humano como procesos histórico-sociales reales.',objectLabel:'Objeto específico:',objectText:'concepciones, explicaciones y fundamentos de la producción académica.',
 abstract:'ABSTRACTO',mediations:'MEDIACIONES',concrete:'CONCRETO<br>PENSADO',
 caption:'Reconstrucción interpretativa de la diapositiva 26 creada por la autora en Canva. Las flechas continuas indican la secuencia; las discontinuas, las mediaciones; los retornos, nuevas interrogaciones. No constituye una síntesis general demostrada del corpus.',
 legend1:'Secuencia de exposición',legend2:'Mediaciones e interrogaciones',legend3:'Retornos críticos',descSummary:'Descripción textual completa (sin animación)',
 descText:'El primer movimiento parte del problema, pasa por la historicidad, el desarrollo y la investigación de concepciones, hasta las consideraciones finales. El segundo señala mediaciones multidireccionales y retornos críticos. El fenómeno real no se confunde con las concepciones académicas. Abstracto y concreto pensado son momentos de reconstrucción en el pensamiento.',
 method:'La diapositiva original destaca la Introducción, los capítulos 2–4 y las Consideraciones Finales. Los capítulos 1 y 5 siguen presentes en el recorrido completo a continuación.',
 phases:['Punto de partida: el problema de investigación.','Secuencia expositiva: las preguntas avanzan.','Mediaciones: las relaciones se cruzan y transforman las preguntas.','Retornos críticos: el problema vuelve con nuevas determinaciones, sin síntesis definitiva del corpus.']
 }};
 const currentLang=()=>['pt','en','es'].includes(langSel?.value)?langSel.value:'pt';
 let phase=0,timer=null,paused=false;
 const reduced=()=>window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 function translate(){
   const dict=tr[currentLang()];
   root.querySelectorAll('[data-cv]').forEach(el=>{
      const key=el.getAttribute('data-cv');
      if(!Object.prototype.hasOwnProperty.call(dict,key))return;
      if(key==='concrete')el.innerHTML=dict[key];else if(el.querySelector('i'))el.lastChild.textContent=' '+dict[key];else el.textContent=dict[key];
   });
   $('cv-pause').textContent=dict[paused?'resumeBtn':'pauseBtn'];
   $('cv-live').textContent=dict.phases[phase];
 }
 function setPhase(value){
   phase=Math.min(3,Math.max(0,value));
   scene.dataset.phase=String(phase);
   $('cv-live').textContent=tr[currentLang()].phases[phase];
   $('cv-formal').setAttribute('aria-pressed',String(phase===1));
   $('cv-dial').setAttribute('aria-pressed',String(phase===3));
 }
 function stop(){if(timer!==null){clearInterval(timer);timer=null;}paused=false;scene.classList.remove('cv-paused');$('cv-pause').setAttribute('aria-pressed','false');translate();}
 function advance(){if(phase>=3){stop();return}setPhase(phase+1);if(phase===3)stop();}
 function begin(){
   if(reduced()){stop();setPhase((phase+1)%4);return}
   stop();setPhase(0);
   timer=setInterval(advance,2400);
 }
 $('cv-play').addEventListener('click',begin);
 $('cv-formal').addEventListener('click',()=>{stop();setPhase(1)});
 $('cv-dial').addEventListener('click',()=>{stop();setPhase(3)});
 $('cv-reset').addEventListener('click',()=>{stop();setPhase(0)});
 $('cv-pause').addEventListener('click',()=>{
   if(timer!==null){clearInterval(timer);timer=null;paused=true;scene.classList.add('cv-paused');}
   else if(paused){paused=false;scene.classList.remove('cv-paused');if(!reduced()&&phase<3)timer=setInterval(advance,2400);}
   else{scene.classList.toggle('cv-paused');paused=scene.classList.contains('cv-paused');}
   $('cv-pause').setAttribute('aria-pressed',String(paused));
   translate();
 });
 if(langSel)langSel.addEventListener('change',translate);
 const globalLinear=$('linear');if(globalLinear)globalLinear.addEventListener('click',()=>{if(document.body.classList.contains('linear'))full.open=true;});
 translate();setPhase(0);
})();
