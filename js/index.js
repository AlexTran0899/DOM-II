// Your code goes here
const navLink = document.querySelectorAll('.nav-link');
Array.from(navLink).forEach(link => {
    link.addEventListener(`mouseover`,(event) => {event.target.style.color = "green"});
    link.addEventListener(`dblclick`,(event) => {event.target.style.color = "red"})
    link.addEventListener(`mouseleave`,(event) => {event.target.style.color = "black"})
})

// document.addEventListener(`keydown`,(event) => {
//     if(event.key === "Escape"){event.target.style.color = "blue"}})
window.addEventListener(`keydown`, event => {
     if(event.key === `Escape`){event.target.style.color = `blue`}
 })
 document.addEventListener(`keyup`, event => {
    if(event.key === `Escape`){event.target.style.color = `black`}
})
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const el = document.querySelector('#bus');
  el.addEventListener(`wheel`,zoom)

window.addEventListener("load", function(event){console.log(`hello world`)})

// document.querySelectorAll("btn").focus();

const something= document.querySelector('.intro p')
something.addEventListener('select', function(event){console.log(event)})

document.addEventListener('scroll', function(e) {
    console.log(window.scrollY) })

// document.addEventListener(`select`, function(event){console.log(event)})


window.addEventListener('resize', () => {console.log(`i'm resizing`)})