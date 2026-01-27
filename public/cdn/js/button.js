document.addEventListener("DOMContentLoaded", () => {
  const toDaniBtn = document.getElementById('toDaniBtn');
  const extraText = document.getElementById('extraText');

  toDaniBtn.addEventListener('click', () => {
    toDaniBtn.classList.toggle('open');
    extraText.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (
      extraText.classList.contains('open') &&
      !extraText.contains(e.target) &&
      e.target !== toDaniBtn
    ) {
      extraText.classList.remove('open');
      toDaniBtn.classList.remove('open');
      toDaniBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});