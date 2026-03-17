const form = document.getElementById('signup-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        const value = input.value.trim();
        const parent = input.parentElement;

        if (value === '') {
            parent.classList.add('error');
        } else if (input.id === 'email' && !validateEmail(value)) {
            parent.classList.add('error');
            parent.querySelector('small').textContent = 'Looks like this is not an email';
        } else {
            parent.classList.remove('error');
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
