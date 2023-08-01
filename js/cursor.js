

gsap.set(".cursor-wrapper", {xPercent: -50, yPercent: -50});
let xTo = gsap.quickTo(".cursor-wrapper", "x", {duration: 0.4, ease: "power3"});
let  yTo = gsap.quickTo(".cursor-wrapper", "y", {duration: 0.4, ease: "power3"});
window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
});

const cursor_wrapper = document.querySelector('.cursor-wrapper')
document.querySelectorAll('.big-cursor').forEach(item => {
item.addEventListener('mouseenter', unit_hover_cursor);
item.addEventListener('mouseleave', unit_unhover_cursor);
//Hover behaviour
function unit_hover_cursor(e) { cursor_wrapper.classList.add('unit_cursor_hover'); }
function unit_unhover_cursor(e) { cursor_wrapper.classList.remove('unit_cursor_hover'); }

})

//mouse enter and leave  the window
document.addEventListener('mouseleave',()=>{
    cursor_wrapper.classList.add('mouse-out');
})
document.addEventListener('mouseenter',()=>{
    cursor_wrapper.classList.remove('mouse-out');
})

