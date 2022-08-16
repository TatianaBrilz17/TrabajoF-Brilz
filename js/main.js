/*fetch("https://jsonplaceholder.typicode.com/posts")
.then((repuesta) => repuesta.json())
.then((data) => {
    console.log(data);
    let resultado = document.getElementById("resultado");
    let contenido = `Id: ${data.id} <br>Title: ${data.title} <br> Body: ${data.body} <hr>`;
    resultado.innerHTML = contenido;
})
*/


fetch('js/productos.json')
.then((response) => response.json())
.then((data) => {
    const resultado = document.getElementById("resultado");
    data.forEach(valor => {
        let columna = document.createElement("div");
        columna.className = "col-md-4";
        let div_padre = document.createElement("div");
        div_padre.className = "card m-2";
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card-header text-center";
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card-body text-center";
        let parrafo = document.createElement("p");
        div_hijo1.innerHTML = `${valor.nombre} <b>($${valor.precio})</b>`;
        parrafo.innerText = valor.descripcion;
        let imagen = document.createElement("img");
        imagen.src = imagen.src + valor.imagen;
        imagen.width = 160;
        div_hijo2.appendChild(parrafo);
        div_hijo2.appendChild(imagen);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        columna.appendChild(div_padre)
        resultado.appendChild(columna);
        
    });

}) 
/*
//Post: Enviar datos!
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify({
    title: 'Fetch',
    body: 'Practicando Fetch',
    id: 1
  })
 
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });*/

  //DOM

  let div = document.getElementById("NuestrosProductos");
  let MenuNavegacion = document.getElementById("MenuNavegacion");
  console.log(div);
  console.log(MenuNavegacion);
  console.log(MenuNavegacion.innerHTML);
  console.log(MenuNavegacion.innerText)

