const counter = document.querySelectorAll('.counter');
const value = 10000;

counter.forEach((counter) => {  
  counter.innerText = '0';

    const updateCounter = () => {
        const target = +value;
        const c = +counter.innerText;

        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});