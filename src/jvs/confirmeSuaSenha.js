const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const senha1 = document.getElementById('floatingPassword').value;
    const senha2 = document.getElementById('confirmPassword').value;

    if (senha1 !== senha2) {
        e.preventDefault();
        alert("As duas senhas precisam ser iguais!");
        document.getElementById('confirmPassword').value = "";
    }
});
