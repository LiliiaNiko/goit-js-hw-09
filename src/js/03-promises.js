const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const createBtn = document.querySelector('button');

const onFormSubmit = addEventListener('submit', createPromise);

function createPromise(position, delay) {
 
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }, 500);
  })
}
for (let i = 0; i < 10; i++) {
  //position = amountInput.currentTarget.value;
  //delay = delayInput.currentTarget.value + stepInput.currentTarget.value;
  createPromise(i)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}