function ToggleEvent() {
    const barra = document.getElementById('barra1');
    const overlay = document.getElementById('overlay');
    
    // O toggle adiciona a classe se não existir, e remove se existir
    barra.classList.toggle('open');
    overlay.classList.toggle('open');
}