
const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");
const max = 7;
const min = 1;
let label1 = 0;
let label2 = 0;
let label3 = 0;


mybutton.onclick = function(){
    label1= Math.floor(Math.random() * (max- min ) )+ min ;
    label2= Math.floor(Math.random() * (max- min ) )+ min ;
    label3= Math.floor(Math.random() * (max- min ) )+ min ;
    document.getElementById("mylabel1").textContent = label1;
    document.getElementById("mylabel2").textContent = label2;
    document.getElementById("mylabel3").textContent = label3;
}
