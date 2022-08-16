function mostrarErrorCampo (campo){
    Toastify({
        text: "Complete el campo: " + campo,
        duration: 3000,
        gravity: 'top',
        position: 'right',
    }).showToast();
}

function hacerClick(valor){
    Toastify({
        text: "Hacer click acá",
        onClick: () => {
            Toastify({
                text: "Hiciste Click!",
                duration: 2000,
                position: 'left',
                destination:'http://www.google.com.ar',
                newWindow: true
            }).showToast();
        },
        className: 'cartel'
    }).showToast();
}

function guardarDatos(){
    let campo_nombre = document.getElementById("nombre").value;
    let campo_email = document.getElementById("email").value;
    localStorage.setItem("datos_formulario", JSON.stringify({nombre:campo_nombre, email:campo_email}));
    console.log("Los datos del formulario se guardaron en la LocalStorage");
}

function eliminarDatos(){
    localStorage.removeItem("datos_formulario");
    console.log("Los datos fueron eliminados");
}

function validarFormulario(){
    let campo_nombre = document.getElementById("nombre").value;
    let campo_email = document.getElementById("email").value;
    
    if (campo_nombre.length == 0){
        mostrarErrorCampo ("Nombre");
        hacerClick();
        return false;
    }

    if (campo_email.length == 0){
        mostrarErrorCampo ("Email");
        hacerClick();
        return false;
    }

    guardarDatos();
    mostrarFormEnviado();
}

function mostrarAlerta() {
    Toastify({
  text: "Éxitos!",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();

}

document.getElementById("boton_enviar").addEventListener("click", mostrarAlerta);