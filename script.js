document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('.tab');
  const panels = document.querySelectorAll('.tabarticle');
  const buttons = document.querySelectorAll('.tabbutton');

  function showPanel(id) {
    panels.forEach(p => p.style.display = 'none');
    
    buttons.forEach(b => b.classList.remove('active'));

   
    const panel = document.getElementById(id);
    if (panel) panel.style.display = 'grid';

    
    const btn = [...buttons].find(b => b.dataset.target === id);
    if (btn) btn.classList.add('active');
  }


  tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.tabbutton');
    if (!btn) return;
    const id = btn.dataset.target;
    showPanel(id);
  });

  
  showPanel('politics');
});
