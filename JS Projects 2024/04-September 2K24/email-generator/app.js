const btn = document.querySelector('#get');
const container = document.querySelector('.meal');
// Generating Random emails from an external api using ajax xhr.
function load(){
var xhttp = new XMLHttpRequest();
xhttp.open('GET','https://jsonplaceholder.typicode.com/comments',true);
xhttp.onload = function(){
    if(this.status == 200){
      var users = JSON.parse(this.responseText);
      const random = Math.floor(Math.random() * 100);
      output = ''
          output += '<p>'+'Email : '+users[random].email+'</p>';
      container.innerHTML = output;
    }
}
xhttp.send();
container.style.display = 'flex';
}
// Opening and closing the email box.
btn.addEventListener('click', load);
document.querySelector('#close').addEventListener('click',() =>{
    container.style.display ='none';
});
