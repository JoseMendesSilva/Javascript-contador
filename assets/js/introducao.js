let numberEventValues = document.getElementById("mostrar");
let elementValues = 0;
numberEventValues.innerHTML = elementValues;

document.getElementById('incr').addEventListener("click", function(){ increment(); });

document.getElementById('decr').addEventListener("click", function(){ decrement(); });

function increment(){
 elementValues = elementValues + 1;
 numberEventValues.innerHTML = elementValues;
}

function decrement(){
    elementValues = elementValues - 1;
    numberEventValues.innerHTML = elementValues;
}