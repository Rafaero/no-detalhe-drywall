// No Detalhe Drywall — interações simples
function toggleMenu(){
  const nav = document.getElementById('nav');
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? 'none' : 'flex';
  if(!isOpen){ nav.style.flexDirection = 'column'; nav.style.gap = '10px'; }
}

function setupWhatsApp(){
  const num = (window.WHATSAPP_NUMBER || '').replace(/\D/g,'');
  const msg = encodeURIComponent('Olá! Vim pelo site e gostaria de um orçamento de drywall.');
  const href = num ? `https://wa.me/${num}?text=${msg}` : '#';
  const ctas = [document.getElementById('whatsCta'), document.getElementById('whatsCta2')];
  ctas.forEach(a => { if(a){ a.href = href; a.setAttribute('rel','noopener'); } });
}

function setYear(){ document.getElementById('year').textContent = new Date().getFullYear(); }

document.addEventListener('DOMContentLoaded', () => {
  setupWhatsApp();
  setYear();
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });
});
