# Página Web Responsive (Pokémon Tower Defense FanPage)

Este es el README de la Página Web Responsive. Hecho por Juan David Hoyos Quiñonez.

- **Proyecto:** Página Web Responsive
- **Creador:** Juan David Hoyos Quiñonez
- **Curso:** Llenguatges de Marques i Sistemes de Gestió d’Informació ASIX DUAL 2023-2024




# Estructura de la Página Web Responsive

|        Carpetas           | Archivos (HTML) | Archivos (CSS) |
|---------------------------|-----------------|----------------|
| Fondo-Pantalla            | Index           | Estils         |
| Gif-Páginas               | About           |                |
| Multimedia                | History         |                |
| PressStart2P              | Photos          |                |
| Principal                 | Playthrough     |                |
| Imagenes Juego            | Contact         |                |
| Logos Enlaces             |                 |                |
| Capturas de Pantalla Web  |                 |                |


# Tecnologías y Caracteristicas y Funcinalidades de la Web

## Tecnologías Utilizadas para la Web
- Google Fonts (Fuente Descargada)
- Compressor.io (Comprimir las Imágenes)
- StackOverflow (CSS)
- W3schools (HTML y CSS)
- Developer Mozilla (HTML y CSS)
- ElBlogDelProgramador (CSS)
- Dev.to (CSS)
- Css-Tricks (CSS)
- Reddit (CSS)
- Support Microsoft (CSS)

## Caracteristicaas y Funcionalidades de la Web
1. Una barra de navegación original
2. Fondo de Pantalla mediante un GIF (Solo 1 Página)
3. Una caja que actua como aside
4. El fondo que contiene el Logo de la página cambia al color del hover
5. Acceso mediante Iconos a las redes sociales de Pokémon
6. Un footer donde se clarifica al dueño de la marca
7. En la esquina del footer 2 GIF de Pokémon que cambian en las diferentes páginas

# Capturas de Pantalla de la Página Web

1. **[Captura 1](Capturas-de-Pantalla-Web/Captura-Pantalla-1.png)**
   - Descripción: Esta captura muestra [El header con el fondo de logo y la barra de navegación original].

2. **[Captura 2](Capturas-de-Pantalla-Web/Captura-Pantalla-2.png)**
   - Descripción: Aquí se puede ver [El main de la página principal (que tiene el fondo GIF) y el texto de esta].

3. **[Captura 3](Capturas-de-Pantalla-Web/Captura-Pantalla-3.png)**
   - Descripción: En esta imagen, [El footer con el disclaimer y la aclaración de los derechos, además los GIF de Pokémon que cambian dependiendo de la página y el div con los links hacia las redes sociales de Pokémon].

4. **[Captura 4](Capturas-de-Pantalla-Web/Captura-Pantalla-4.png)**
   - Descripción: La captura 4 ilustra [El cambio tanto del fondo de pantalla como el del logo de la página que coincide con el color del hover].

5. **[Captura 5](Capturas-de-Pantalla-Web/Captura-Pantalla-5.png)**
   - Descripción: Finalmente, la captura 5 presenta [Como los GIF de Pokémon cambia dependiendo de la página seleccionada].

# Modificaciones HTML en la Web

Antes de ir a la parte de JavaScript, debo decir que he añadido un <aside> en la página web.

1. **[Captura 6](Capturas-de-Pantalla-Web/Captura-Aside.png)**

Este <aside> esta incluido en todos los html de la web, excepto en el del formulario (formulario.html)

# JavaScript Funciones

Ahora procedo a decir todas las funciones que he utilizado para la web.

## General

Para todas las páginas (excepto formulario.html), he añadido al aside 2 funciones en dos botones.

### Funciones Aside

El aside, como se ha dicho antes, contiene 2 botones. El primero es para poder acceder al formulario (formulario.html). Se hace por un onclick=location.href en button y su validación es básica.

1. **[Captura 7](Capturas-de-Pantalla-Web/Captura-Formulario.png)**

Luego esta el segundo botón, hace la función de la encuesta

2. **[Caprura 8](Capturas-de-Pantalla-Web/Captura-Encuesta.png)**

Al pulsar sobre la imagen, comienza una encuesta general sobre la página web

3. **[Captura 9](Capturas-de-Pantalla-Web/Captura-Encuesta-Funcionamiento-1.png)**

Al finalizar la encuesta, se crea un mensaje debajo del botón que contiene las respuestas a la encuesta

4. **[Captura 10](Capturas-de-Pantalla-Web/Captura-Encuesta-Funcionamiento-2.png)**

### Atributo Onclick

Seguimos con los atributos Onclick, que es un atributo html, que he añadido la confirmación a ir a los enlaces que hay

1. **[Captura 11](Capturas-de-Pantalla-Web/Captura-Onclick.png)**

Esta para acceder a las diferentes páginas

2. **[Captura 12](Capturas-de-Pantalla-Web/Captura-Onclick-Funcionamiento-1.png)**

En el logo del header

3. **[Captura 13](Capturas-de-Pantalla-Web/Captura-Onclick-Funcionamiento-2.png)**

Y para los enlaces de RRSS

4. **[Captura 14](Capturas-de-Pantalla-Web/Captura-Onclick-Funcionamiento-3.png)**

## Formulario

Para la página del formulario (formulario.html), tengo un formualrio (form)

1. **[Captura 15](Capturas-de-Pantalla-Web/Captura-Formulario.png)**

Y en el aside, no esta las otras 2 funciones, en este aside hay una tercera función que permite cambiar el color de fondo (backgroundColor) del header.

2. **[Captura 16](Capturas-de-Pantalla-Web/Captura-Cambio-Estilo.png)**

Al puslsar sobre el botón cambiara el color de fondo del header a cualquiera de las otras páginas.

Antes:

3. **[Captura 17](Capturas-de-Pantalla-Web/Captura-Funcionamiento-1.png)**

Despues:

4. **[Captura 18](Capturas-de-Pantalla-Web/Captura-Funcionamiento-2.png)**

## Imagen

Por último he hecho una función en Photos.html, que permite visualizar la imagen a su tamaño real. Solamente debemos pulsar sobra la imagen.
1. **[Captura 19](Capturas-de-Pantalla-Web/Captura-Imagen.png)**
Y se abrirá, en otra pestaña, se verá la imagen en el tamño real.
2. **[Captura 20](Capturas-de-Pantalla-Web/Captura-Imagen-Funcionamiento.png)**