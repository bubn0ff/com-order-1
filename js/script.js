var closeModalBtn = document.querySelector('.modal__cross');
var openModalBtn = document.querySelector('.balance__button_item');
var modal = document.querySelector('.modal');
var content = document.querySelector('.modal__sum_input');

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  content.focus();
});

document.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});