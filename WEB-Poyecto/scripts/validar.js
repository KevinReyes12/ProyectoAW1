var user = document.getElementById("usuario");
var password = document.getElementById("contraseña");

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\ \-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 100 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const accion = document.getElementById("btn");
var estado = false;
var estado2 = false;
accion.addEventListener("click", (e)=>{
    e.preventDefault();

    if(user.value == "" ||password.value == ""  ){
        alert("los campos no pueden estar vacios");
        estado = false;
    }else{
        estado = true;
        if(expresiones.usuario.test(user.value)== false|| expresiones.password.test(password.value)== false){
        alert("usuario o contraseña incorrectas");
        estado2 = false;
    }else{
        estado2 = true;
    }
    }
    
    if(estado==true && estado2 == true){
        location.href="home.html";
    }
});
