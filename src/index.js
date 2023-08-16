import './style.css';

const inputLocation = document.querySelector(
  'form.form-location>div>#location'
);

const btnSubmitLocation = document.querySelector('.btn.submit-location');
btnSubmitLocation.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(inputLocation.value);
});
