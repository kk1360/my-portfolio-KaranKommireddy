document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll('.number');
    const showElements = document.querySelectorAll('.degree');

    showElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, index * 300); // Stagger the appearance
    });

    numbers.forEach((num) => {
        const target = +num.getAttribute('data-number');
        let count = 0;
        const increment = target / 100;

        const updateNumber = () => {
            count += increment;
            if (count < target) {
                num.innerText = count.toFixed(2); // Adjust precision
                requestAnimationFrame(updateNumber);
            } else {
                num.innerText = target.toFixed(2); // Ensure it reaches the target
            }
        };

        updateNumber();
    });
});
