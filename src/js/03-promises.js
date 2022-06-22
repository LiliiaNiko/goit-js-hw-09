import Notiflix from 'notiflix';

const form = document.querySelector('.form');



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  
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
  
  for (let i = 1; i <= amount.value; i += 1) {
    //position = i;
    if (delay.value < 0 || step.value < 0 || amount.value < 0) {
      return;
    }
    createPromise(i, delay.value)
      .then((result) => {
        Notiflix.Notify.success(result);
        console.log(result);
      })
      .catch((error) => {
        Notiflix.Notify.failure(error);
        console.log(error)
      });
    delay.valueAsNumber += step.valueAsNumber;
    }
    form.reset();
  
  })