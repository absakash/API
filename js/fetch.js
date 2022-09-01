// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
const url='https://jsonplaceholder.typicode.com/todos/1';
function loadData(){
  fetch(url)
  .then(response=>response.json())
  .then(json=>console.log(json));
}


function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(json=>console.log(json));
}

function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>display(data));
}

function display(data){
    console.log(data);
   const name=document.getElementById('name');

    for(each of data){
        const li=document.createElement('li');
        console.log(each.name+" akash");
        li.innerText=each.name;
        name.appendChild(li);
    }
}