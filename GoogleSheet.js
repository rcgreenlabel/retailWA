const scriptURL = 'https://script.google.com/a/macros/greenlabelrecycling.com/s/AKfycbxQBtQWAcJgZ-I0e7RbjiGi4_XSy_vx5KpFl0V2_h1OKCyLlvnJRmJSSgtBLYVk70Gr/exec'

const form = document.forms['contact-form']
console.log(window.location);
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
