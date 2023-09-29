document.addEventListener("DOMContentLoaded", function () {
     //Get the product ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    // Fetch the JSON data (assuming data.json is in the same directory)
    fetch("productos.json")
        .then(response => response.json())
        .then(data => {
            // Find the selected product by its ID
          const selectedProduct = data.find(product => product.id === productId);

            // Display the product details
            if (selectedProduct) {
               const productDetails = document.getElementById("product-details");
               productDetails.innerHTML = `
                   <h2>${selectedProduct.name}</h2> 
                <p>Description: ${selectedProduct.descripcion}</p>
                   <img src="${selectedProduct.image_url}" alt="${selectedProduct.name}">
                   <p>DescriptionLarge: ${selectedProduct.descripcionLarga}</p>
                   <p>Price: $${selectedProduct.price.toFixed(2)}</p>
                   
               `;
            } else {
                // Handle product not found
                console.error("Product not found.");
            }
      })
       .catch(error => {
           console.error("Error fetching JSON data:", error);
        });
});

localStorage.removeItem(productoSeleccionado);