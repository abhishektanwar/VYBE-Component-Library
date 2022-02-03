//alert close example

const alertContainerBox = document.querySelector('#alert-container-close');
const alertContainerCloseBtn = document.querySelector('#alert-container-close-btn');

alertContainerCloseBtn.addEventListener('click', () => {
  alertContainerBox.style.display = 'none';
  setTimeout(() => {
    alertContainerBox.style.display = 'block';
  }, 3000);
});
