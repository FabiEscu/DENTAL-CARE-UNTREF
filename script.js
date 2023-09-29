fetch("productos.json")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
    json.forEach((producto) => console.log(producto?.name));

    localStorage.setItem("productos", JSON.stringify(json));
  });

const jsonProductos = JSON.parse(localStorage.getItem("productos"));

const listaProductos = document.querySelector("#product-details");

const productoSeleccionado = [];

jsonProductos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
        <h3>${product.nombre}</h3>
        <img class="image" src="${product.imagen}">
        <p class="description">${product.descripcion}</p>
        <p class="price">${product.precio}</p>
    `;

    listaProductos.append(content);

  let ver = document.createElement("button");
  ver.innerText = "Ver";
  content.append(ver);
  ver.className = "ver";

  ver.addEventListener("click", () => {
    productoSeleccionado.push({
      id: product.id,
      nombre: product.nombre,
      imagen: product.imagen,
      descripcion: product.descripcion,
      descripcionLarga: product.descripcionLarga,
      precio: product.precio,
      puntuacion: product.puntuacion,
    });

    localStorage.setItem("producto", JSON.stringify(productoSeleccionado));

    console.log(productoSeleccionado);

    location.href = "producto.html";
  });
});
