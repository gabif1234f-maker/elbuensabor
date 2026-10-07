// Esperamos a que la página cargue por completo
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector(".order-form");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault(); // Evita que la página se recargue por defecto

            // Capturamos los datos que escribió el usuario
            const nombre = document.getElementById("name").value;
            const pizza = document.getElementById("pizza-select").options[document.getElementById("pizza-select").selectedIndex].text;

            // Mostramos la ventana flotante interactiva
            alert(`¡Gracias ${nombre}! Tu pedido de "${pizza}" ha sido enviado con éxito. ¡En breve estará en tu puerta! 🍕🔥`);

            // Limpiamos el formulario para un nuevo pedido
            formulario.reset();
        });
    }
});
