const reader=document.getElementById('reader');
const body=document.getElementById('reader-body');
function showArticle(){const key=location.hash.slice(1);const template=document.getElementById(key);if(template instanceof HTMLTemplateElement){body.replaceChildren(template.content.cloneNode(true));if(!reader.open)reader.showModal();}else if(reader.open){reader.close();}}
window.addEventListener('hashchange',showArticle);
reader.querySelector('.close').addEventListener('click',()=>reader.close());
reader.addEventListener('click',e=>{if(e.target===reader){const r=reader.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)reader.close();}});
reader.addEventListener('close',()=>{if(document.getElementById(location.hash.slice(1)) instanceof HTMLTemplateElement)history.replaceState(null,'',location.pathname+location.search);});
showArticle();
