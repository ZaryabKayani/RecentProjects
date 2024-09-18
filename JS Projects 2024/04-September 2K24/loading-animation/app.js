const box = document.querySelector('.background');
const text = document.querySelector('h1');
function change(){
    text.style.color = 'crimson';
}
function white(){
    text.style.color = 'white';
}

box.addEventListener("webkitAnimationStart", change);
box.addEventListener("animationstart", change);
box.addEventListener("webkitAnimationIteration", white);
box.addEventListener("animationiteration", white);

