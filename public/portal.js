const links=document.querySelectorAll('#nav a[data-view]');
const views=document.querySelectorAll('.view');
const title=document.querySelector('#title');
links.forEach(link=>link.addEventListener('click',()=>{
 const id=link.dataset.view;
 links.forEach(x=>x.classList.toggle('active',x===link));
 views.forEach(v=>v.classList.toggle('active',v.id===id));
 title.textContent=link.querySelector('span').textContent;
}));
