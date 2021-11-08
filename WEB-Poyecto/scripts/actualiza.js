
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\ \-]{4,50}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 100 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

    var user = document.getElementById("usuario");
    var correo = document.getElementById("correo");
    var direccion = document.getElementById("direccion");
    var telefono = document.getElementById("telf");

    const accion = document.getElementById("actualiza");
    var estado = false;
    var estado2 = false;
accion.addEventListener("click", (e)=>{
    e.preventDefault();

    if(user.value == "" ||correo.value == "" ||direccion.value == "" || telefono.value == ""){
        alert("los campos no pueden estar vacios");
        estado = false;
    }else{
        estado = true;
        if(expresiones.usuario.test(user.value)== false|| expresiones.correo.test(correo.value)== false
        || expresiones.telefono.test(telefono.value)== false){
        alert("compruebe que todos los datos sean correctos");
        estado2 = false;
    }else{
        estado2 = true;
    }
    }
    
    if(estado==true && estado2 == true){
        location.href="home.html";
    }
});
