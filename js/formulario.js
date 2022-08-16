let boton = document.getElementById ("btnPrincipal");
boton.addEventListener ("Click", validar);

function repuestaClick(){
    console.log ("Repuesta Evento #1");
}

function validar(){
    let campo_nombre = document.getElementById("nombre").value;

    if (campo_nombre == "") {
        alert ("Falta completar el campo Nombre");
    }
}

//Mouse

let btn = document.getElementById ("btnPrincipal");
let nombre = document.getElementById ("nombre");
boton.onclick = () => {console.log ("Evento Click!")};
boton.onmousemove = () => {console.log ("Evento Move!")};

btn.addEventListener("click", eventoClick);
btn.addEventListener("mouseover", eventoOnMouseOver);
btn.addEventListener("mouseout", eventoOnMouseOut);
btn.addEventListener("mouseup", eventoOnMouseUp);
btn.addEventListener("mousedown", eventoOnMouseDown);

function eventoClick() {
    console.log ("Evento Click!");
}

function eventoOnMouseOver (){
    console.log ("Evento On Mouse Over");
}

function eventoOnMouseOut (){
    console.log ("Evento On Mouse Out");
}

function eventoOnMouseUp (){
    console.log ("Evento On Mouse Up");
}

function eventoOnMouseDown (){
    console.log ("Evento On Mouse Down");
}

//Eventos del Teclado

let name = document.getElementById ("nombre");
let email = document.getElementById ("email");
nombre.onkeyup = () => {console.log ("Evento KeyUp")};
email.onkeydown = () => {console.log ("Evento KeyDown")};

function eventoKeyDown(){
    cant_max = 80;
    cant_disponible = cant_max - email.value.length;
    let color = "text-black";

    if (cant_disponible < 10 ){
        color=  'text-danger';
    }

    documento.getElementById("emailError").innerHTML = "Caracteres disponibles: " + cant_disponible;
}

//Evento Change
/*
let nombre = document.getElementById("nombre");
let telefono = document.getElementById ("telefono");
let provincia = document.getElementById("provincia");

nombre.onchange = () => {
    let nombre = document.getElementById ("nombre").value;
    let contenido = "<p class= 'text-white bg-black p-3'>" + nombre + "</p>";
    document.getElementById ("resultado").innerHTML = contenido;
}

telefono.onchange = () => {
    let telefono_valor = telefono;
    let contenido = "<p class= 'text-white bg-black p-3'>" + nombre + "</p>";
    document.getElementById ("resultado").innerHTML = contenido;
}


provincia.addEventListener ("change", obtenerLocalidades);

function obtenerLocalidades (){
    let provincia_seleccionada = document.getElementById("provincia").value;
    let localidades = ""; 
    
    if (provincia_seleccionada == "Buenos Aires") {
       localidades = ["San Miguel", "San Martín"];
    }else if (provincia_seleccionada == "La Pampa"){
       localidades = ["Alpachiri", "General Campos", "Rolón"];
    } else if (provincia_seleccionada == "Río Cuarto"){
       localidades = ["Achiras", "Teguas"];
    }

    let contenido= "<h3>Localidades:<h3>";
    contenido+= "<ul>";

    for (let localidad of localidades) {
        contenido += "<li>" + localidad + "</li>";
    }

    contenido += "</ul>";
    document.getElementById("resultado").innerHTML = contenido;
    }*/

    //Input

   //Submit
   let miFormulario = document.getElementById()