import Notiflix from 'notiflix';

const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const form = document.querySelector('.form');



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    //delay = delayInput + stepInput;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }, delay);
  })
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const { elements: { delay, step, amount } } = evt.currentTarget;
  for (let i = 1; i <= amount.value; i++) {
         
    createPromise(i, parseInt(delay.value) + parseInt(step.value))
      .then((result) => {
        Notiflix.Notify.success(result);
        console.log(result)
  })
      .catch((error) => {
        Notiflix.Notify.failure(error);
        console.log(error)
      });
    
  }
  
})
