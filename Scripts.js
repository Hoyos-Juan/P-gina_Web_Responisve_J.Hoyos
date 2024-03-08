// Validacion del formulario (Página formulario.html)
document.addEventListener('DOMContentLoaded', function () { // Haremos una funcion para poder hacer la validación.
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

            const nombre = document.getElementById('nombre').value; // const para obtener el valor de nombre
            const apellido = document.getElementById('apellido').value; // const para obtener el valor de nombre
            const email = document.getElementById('email').value; // const para obtener el valor de nombre
            const usuario = document.getElementById('usuario').value; // const para obtener el valor de nombre

                if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || usuario.trim() === '') {
                    alert('Por favor, completa todos los campos.');
                } else {
                    alert('Formulario enviado correctamente.');
                } /* La validación es sencilla, simplemente interpreta que si no esta relleno el formulario 
                    pide que se vuelva a hacer, si se completa, entonces avisa de que se ha completado el formulario. */
            });
});
// Cambio del color del encabezado (Solamente en página formulario.html)
const colores = ['#800000', '#000080', '#006400', '#B8860B', '#8B4513', '#6A5ACD']; // Hacemos un const con un array de los colores del <header> de cada página.

function cambioEncabezado() { // Creamos la función para poder cambiar el color del <header>
    const fondoLogo = document.getElementById('fondo-logo-Index'); // Detecta el fondo a cambiar.
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; // Generamos el aleatorio donde consigue el color nuevo en el array.
    fondoLogo.style.backgroundColor = colorAleatorio; // Ponemos el nuevo color en el <header>.
}
// Ocultar/Mostrar Texto (Página History.html)
let textoVisible = false; // Variable para controlar la visibilidad del texto

function mostrarOcultarTexto() {
    const texto = document.getElementById('Text-History');
        if (textoVisible) {
            texto.style.display = 'none'; // Oculta el texto
        } else {
            texto.style.display = 'block'; // Muestra el texto
        }
        textoVisible = !textoVisible; // Cambia el estado de la variable
}
// Encuesta de Valoración (En el <aside>)
function iniciarEncuesta() {
    const confirmacion = confirm("¿Deseas participar en nuestra encuesta de valoración?"); // Generamos el paso previo para hacer la encuesta.

    if (confirmacion) {
            const preguntas = [
                "¿Cómo calificarías la usabilidad del sitio?",
                "¿Qué opinas sobre el diseño visual?",
                "¿Te resultó fácil encontrar la información que buscabas?",
                "Ayudanos a mejorar la página."
            ];

            let respuestas = ""; // let para poder responder a las preguntas.
            for (const pregunta of preguntas) {
                const respuesta = prompt(pregunta);
                respuestas += `- ${pregunta}: ${respuesta}\n`;
            }

        const mensajeDiv = document.getElementById("mensaje"); // Identifica el <div> donde se alojará la respuesta.
        mensajeDiv.textContent = "Gracias por valorar:\n" + respuestas;
    }
    /* Hacemos un if que contiene las preguntas que queremos hacer en la encuesta.
       Luego tenemos un for que hace lo siguiente:
        - Genera la pregunta.
        - Permite la respuesta.
        - Da un formato de respuesta.
       Por último creamos un mensaje donde diga lo que ha respondido. */
}
// Script con las imágenes
function mostrarImagen(imagen) {
    const ventanaEmergente = window.open("", "_blank"); // Generamos la acción de abrir la imagen en una pestaña nueva.
    ventanaEmergente.document.write(`<img src="${imagen.src}" alt="Imagen a tamaño completo">`); // Cambia el alt de la imagen para reflejar que el tamaño real de la imagen.
}