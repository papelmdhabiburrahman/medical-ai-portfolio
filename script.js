const toggle=document.querySelector('.nav-toggle'), nav=document.querySelector('#navlinks');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelector('#year').textContent=new Date().getFullYear();
