const btn = document.querySelector('.open_modal')
const modal = document.querySelector('.my_modal')
const cl = document.querySelector('.close')


btn.onclick = () => {
    modal.style.display = "block";
}

cl.onclick =() => {
    modal.style.display = "none";
}

const body = document.querySelector('body');
const body_color = document.querySelector('.body_color');


body_color.onclick = () => {
    if(body.style.backgroundColor === 'black') {
        body.style.backgroundColor = "white"
    } else {
        body.style.backgroundColor = 'black'
    }

} 





