let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    actualizarCarrito();
}

function quitarDelCarrito(index) {
    const precioEliminado = carrito[index].precio;
    carrito.splice(index, 1);
    total -= precioEliminado;

    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElement = document.getElementById("total");

    // Limpiar el contenido actual
    listaCarrito.innerHTML = "";

    // Actualizar la lista de productos en el carrito
    carrito.forEach((producto, index) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;

        // botón "Eliminar" para quitar el producto del carrito
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function() {
            quitarDelCarrito(index);
        });

        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });

    // Actualizar el total
    totalElement.textContent = total.toFixed(2);
}

function finalizarCompra() {
    //mensaje de confirmación
    alert("¡Compra realizada con éxito!");

    //reiniciar el carrito
    carrito = [];
    total = 0;

    // Actualizar la interfaz después de la finalización de la compra
    actualizarCarrito();
}