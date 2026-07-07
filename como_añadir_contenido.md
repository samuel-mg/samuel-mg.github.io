Cómo añadir contenido a la web

Añadir un proyecto

1. Añadir la imagen

Guarda la imagen del proyecto en:

```txt
assets/img/projects/

Ejemplo:

assets/img/projects/mi-proyecto.webp

Puede ser .webp, .png, .jpg o .svg.

2. Crear el texto del proyecto

Crea un archivo .txt en:

data/projects/

Ejemplo:

data/projects/mi-proyecto.txt

Dentro del .txt, escribe el texto normal del proyecto.

Para separar párrafos, deja una línea en blanco:

Primer párrafo del proyecto.

Segundo párrafo del proyecto.

Tercer párrafo del proyecto.

También se pueden meter enlaces HTML dentro del texto:

This project was cited in the <a href="https://..." target="_blank" rel="noopener noreferrer">UN Human Development Report</a>.
3. Añadir el proyecto al JSON

Abre:

data/projects.json

Añade una entrada como esta:

{
  "title": "Título del proyecto",
  "textFile": "data/projects/mi-proyecto.txt",
  "image": "assets/img/projects/mi-proyecto.webp",
  "imageAlt": "Descripción breve de la imagen",
  "layout": "text-left",
  "links": [
    {
      "label": "Texto del botón",
      "url": "https://..."
    }
  ]
}

Opciones de layout:

"layout": "text-left"

Texto a la izquierda, imagen a la derecha.

"layout": "image-left"

Imagen a la izquierda, texto a la derecha.

4. Varios botones

Para poner varios botones:

"links": [
  {
    "label": "Primer botón",
    "url": "https://..."
  },
  {
    "label": "Segundo botón",
    "url": "https://..."
  }
]


Añadir una visualización en Outreach & Visuals
1. Crear el texto

Crea un archivo .txt en:

data/outreach/

Ejemplo:

data/outreach/mi-visualizacion.txt

Texto de ejemplo:

Visual explanation of the framework.

Design by ...

Separa párrafos con una línea en blanco.

2. Añadir la visualización al JSON

Abre:

data/outreach.json

Añade una entrada como esta:

{
  "title": "Título de la visualización",
  "textFile": "data/outreach/mi-visualizacion.txt",
  "embedUrl": "https://...",
  "buttonLabel": "Texto del botón",
  "buttonUrl": "https://...",
  "layout": "text-left"
}

Opciones de layout:

"layout": "text-left"

Texto a la izquierda, ventana embebida a la derecha.

"layout": "image-left"

Ventana embebida a la izquierda, texto a la derecha.

Probar cambios

Para probar la web en local, abrir con Live Server en VS Code.

No abrir con doble clic, porque los archivos .json y .txt pueden no cargar correctamente usando file://.

Ruta esperada con Live Server:

http://127.0.0.1:5500/
Notas importantes
En JSON no se pueden poner comentarios.
En JSON no puede haber comas sobrantes al final.
Los nombres de archivo deben coincidir exactamente.
Si una visualización no carga dentro del iframe, puede ser que esa web bloquee ser embebida.
Todo esto funciona en GitHub Pages porque solo usa HTML, CSS, JavaScript, JSON, TXT e imágenes estáticas.

## Añadir software

### 1. Añadir imagen o captura

Guarda la imagen en:

```txt
assets/img/software/

Ejemplo:

assets/img/software/mi-software.webp
2. Crear el texto

Crea un archivo .txt en:

data/software/

Ejemplo:

data/software/mi-software.txt

Separa párrafos con una línea en blanco.

3. Añadir entrada al JSON

Abre:

data/software.json

Añade una entrada como esta:

{
  "title": "Nombre del software",
  "textFile": "data/software/mi-software.txt",
  "image": "assets/img/software/mi-software.webp",
  "imageAlt": "Screenshot of the software",
  "layout": "image-right",
  "links": [
    {
      "label": "GitHub",
      "url": "https://..."
    },
    {
      "label": "Documentation",
      "url": "https://..."
    }
  ]
}

Opciones de layout:

"layout": "image-right"

Imagen a la derecha.

"layout": "image-left"

Imagen a la izquierda.