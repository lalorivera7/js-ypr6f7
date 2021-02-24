// Import stylesheets
// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
// Import stylesheets
import "./style.css";

// Write Javascript code!
//const appDiv = document.getElementById("app");
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
var acumulador= 0;
const buttonDiv= document.getElementById("lalo");
console.log("buttonDiv");
buttonDiv.onclick = enviar;
function enviar(){
  acumulador= acumulador +1;
  console.log(acumulador);
}


 


