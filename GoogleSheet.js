const scriptURL = 'https://script.google.com/a/macros/greenlabelrecycling.com/s/AKfycbxa5ZWAciSXHbyXvuiUrulH1ZQp7dFPQF3XqS9rr4YQQxEMCtW00gquEf07Dhtc5BKf/exec'

const form = document.forms['contact-form']
console.log(window.location);
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
