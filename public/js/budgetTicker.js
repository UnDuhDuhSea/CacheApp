const counters = document.querySelectorAll('.counter');

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
      }
    };
    updateCounter();
  });
});