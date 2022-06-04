const input = document.getElementById('pass');
const div = document.querySelector('.message');


const password = "iglasmigla"
const message = "Jesteś SUPER!"

input.addEventListener('input', (e) => {
    //console.log(e.target.value);

    if(password === e.target.value) {
        div.textContent = message;
        e.target.value = ""
    } else{
        div.textContent = ""
    }

})
