
  const listaProductos = document.querySelector("#lista-productos");
  let productos;

  const listaDeProductos = async () => {
    localStorage.clear();
    listaProductos.innerHTML = "";

    productos = localStorage.getItem("productos");

    if (productos == null) {
      const response = await fetch("producto.json");
      productos = await response.json();

      localStorage.setItem("producto", JSON.stringify(productos));
    }

    if (typeof productos == "string") {
      productos = JSON.parse(productos);
    }

    productos.forEach(cargarProductos);
  };

  const cargarProductos = (product) => {
   
    const productoHTML = `
    <div class="card">
        <h3>${product.nombre}</h3>
        <img class="imagen" src="${product.imagen}">
        <p class="description">${product.descripcion}</p>
        <p class="price">$ ${product.precio}</p>
        <button class="ver" id="${product.id}">Ver</button>
    </div>
  `;

    listaProductos.innerHTML += productoHTML;
  };

  listaDeProductos();

  document.addEventListener("click", (event) => {
    console.log(event.target.tagName == "BUTTON");
    sessionStorage.setItem("id", event.target.id);
    window.location = "producto.html";
  });

