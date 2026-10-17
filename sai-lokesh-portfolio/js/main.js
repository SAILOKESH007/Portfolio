'use strict';
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); }
menu.addEventListener('click', () => { const open = !nav.classList.contains('open'); nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
window.matchMedia('(min-width:761px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) { nav.querySelectorAll('a').forEach(link => { const active = link.hash === '#' + entry.target.id; link.classList.toggle('active', active); if(active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); } }); }, {rootMargin:'-15% 0px -55% 0px'}); document.querySelectorAll('main section[id]').forEach(section => observer.observe(section)); }
