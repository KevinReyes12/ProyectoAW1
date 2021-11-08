var time = document.getElementById("tiempo");
var fecha = document.getElementById("fecha");
var mes = document.getElementById("mes");
var semana = document.getElementById("semana");

const accion2 = document.getElementById("btn2");
accion2.addEventListener("click", (e)=>{
    e.preventDefault();

    if(time.value == "" ||fecha.value == "" || semana.value == "" || mes.value == ""  ){
        alert("rellene todos los campos");
    }else{
        location.href="#";
    }
    
});