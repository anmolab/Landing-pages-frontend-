// to get the mouse pointer we need to add it to the window not to any particular div bcz it will stop working once we hover our mouse on tht div


let circle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
const svgelem = document.querySelector('svg');

var tl = gsap.timeline();

window.addEventListener('mousemove', function(details){
    let x = details.clientX;
    let y = details.clientY;

    setTimeout(function(){
        circle.style.top = `${y}px`;
        circle.style.left = `${x}px`;
    },50);
});

btn.addEventListener('click', function(){
    tl.reverse();
    setTimeout(function(){
        svgelem.classList.add('animate');
    }, 3500)
});



tl
.from('#wrapper', {
    duration:4,
    scale:0.7, 
    ease: 'Expo.easeInOut',
    opacity:0
})

.from('#strip', {
    duration: 2,
    width:0,
    ease: 'Expo.easeInOut',
    opacity:0
}, '-=2.5')

.from('#blackcard', {
    duration: 1.5,
    x:50,
    ease: 'Expo.easeInOut',
    opacity:0
}, '-=1')

.from('#lineelem', {
    duration: 1.5,
    x:50,
    ease: 'Expo.easeInOut',
    opacity:0
}, '-=1')

.from('#lineelem .line', {
    duration: 2,
    x:50,
    ease: 'Expo.easeInOut',
    opacity:0
}, '-=1')

.from('#blackcard p', {
    duration: 1.2,
    y:30,
    ease: 'Expo.easeInOut',
    opacity:0
}, '-=2')

.from('#sideelem', {
    duration: 2,
    x: 30,
    ease: 'Expo.easeInOut',
    opacity:0
}, '-=2')