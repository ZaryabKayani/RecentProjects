const body = document.querySelector('body');
const btn = document.querySelector('button');
const icon = document.querySelector('button i');

btn.addEventListener('click', ()=>{
    if(icon.className === 'fas fa-moon'){
        icon.className = 'fas fa-sun';
        body.style.background = 'rgb(17, 17, 17)';
    }else{
      body.style.background = 'white';
      icon.className = 'fas fa-moon';
    }
});