document.addEventListener("DOMContentLoaded", function () {
    // Get the product ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const producto = parseInt(urlParams.get("id"));
  
    function convertirAEstrellas(Puntuación) {
      const estrellasLlenas = Puntuación.length;
      const estrellasVacias = 5 - estrellasLlenas;
  
      const estrellasHTML =
        '<span class="estrella-llena">★</span>'.repeat(estrellasLlenas) +
        '<span class="estrella-vacia">☆</span>'.repeat(estrellasVacias);
  
      return `<p class="puntuacion-estrellas">${estrellasHTML}</p>`;
    }


const productoElegido = sessionStorage.getItem("id");
console.log(productoElegido);

const destacado = JSON.parse(localStorage.getItem("producto"));
console.log(destacado)

const mostrarProducto = document.querySelector("#producto-elegido");


destacado.forEach((product) => {
    if(product.id == productoElegido){
    let content = document.createElement("div");
    content.className = "card2";
    content.innerHTML = `
        <div>
            <h3 class="name">${product.nombre}</h3> </div>
        <div class="imagen-descripcion">
            <img class="imagen" src="${product.imagen}">
            <p class="descriptionLarge">${product.descripcionLarga}</p>
        </div>
        <div>
            <p class="price-product">$ ${product.precio}</p>
            <p>${convertirAEstrellas(product.puntuacion)}</ p>
        </div>
        <div>
            <p> ${product.puntuacion}</p>
        </div>
    `;
    mostrarProducto.append(content);
}
})});