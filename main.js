const input = document.getElementById('pass');
const div = document.querySelector('.message');


const passwords = ["iglasmigla", "mięki musk"];
const messages = ["Jesteś SUPER!", "Mam cię, ty gagatku! Też jesteś SUPER!"];

/* input.addEventListener('input', (e) => {
    //console.log(e.target.value);

    if(password === e.target.value) {
        div.textContent = message;
        e.target.value = "";
    } else{
        div.textContent = "";
    }
}) */

input.addEventListener('input', (e) => {
    div.textContent = "";

    const text = e.target.value;

    passwords.forEach((password, index) => {
        if(password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })
})

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
    
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
    
})
