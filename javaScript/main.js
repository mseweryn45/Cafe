//PRZYWITANIE
const dateP = document.querySelector('.header-date')
const dayP = document.querySelector('.header-day')

let today = new Date();
let hourNow = today.getHours();
let greeting;

const time = () => {
    if (hourNow >= 18) {
        greeting = "Dobry wieczór!";
    } else if (hourNow < 6) {
        greeting = "Dobry wieczór!";
    } else if (hourNow > 6) {
        greeting = "Dzień dobry!";
    } else {
        greeting = "Witamy!";
    }
}
time();
dayP.innerHTML = `${greeting}`

let date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

dateP.innerHTML = `${date}`

//BURGER
const burgerBox = document.querySelector('.burger-box');
const burger = document.querySelector('.burger');
const button = document.querySelector('.burger-button')
const link = document.querySelector('.burger-box__list')
const main = document.querySelector('main')

const show = () => {
    button.classList.add('hide')
    burger.classList.add('active')

}
const hide = () => {
    button.classList.remove('hide')
    burger.classList.remove('active')

}


button.addEventListener('click', show)
main.addEventListener('click', hide)
link.addEventListener('click', hide)