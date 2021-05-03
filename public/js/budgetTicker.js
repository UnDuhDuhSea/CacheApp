const counters = document.querySelectorAll('.counter');
const total = document.querySelector('#total-amount');
total.className += ' text-red-600';

window.addEventListener('load', (event) => {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // adding a + in front of the counter changes it to a number.
      const target = +counter.getAttribute('data-target');
      const c = +counter.innerText;

      const increment = target / 150;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
        counter.innerText = '$' + counter.innerText;
      }
      if (target < 0) {
        total.className += ' text-red-600';
      } else {
        total.className += ' text-green-600';
      }
    };
    updateCounter();
  });
});
