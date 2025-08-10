document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Tak for din besked! Vi vender tilbage hurtigst muligt.');
  this.reset();
});
