# SciVoces

Sitio estático de entrevistas a científicos. HTML + CSS + JS puro. Listo para desplegar en **Netlify** desde un repositorio de **GitHub**.

## Estructura

```
/
├── index.html              # Home: intro + 10 últimas entrevistas + contacto + form + donate
├── about.html              # Acerca del proyecto
├── gracias.html            # Página de confirmación del formulario
├── 404.html                # Página de error
├── ciencias/
│   ├── matematicas.html
│   ├── fisica.html
│   ├── quimica.html
│   ├── biologia.html
│   └── tecnologia.html
├── entrevistas/            # Una página HTML por entrevista (plantilla dinámica)
│   └── *.html
├── css/styles.css
├── js/main.js              # Lógica + base de datos de entrevistas (window.INTERVIEWS)
└── netlify.toml            # Config básica de Netlify
```

## Cómo añadir una entrevista

1. Edita `js/main.js` y agrega un nuevo objeto al array `window.INTERVIEWS` con: `slug`, `title`, `category`, `cat` (uno de: `matematicas`, `fisica`, `quimica`, `biologia`, `tecnologia`), `glyph`, `author`, `affiliation`, `date` (formato `YYYY-MM-DD`) y `summary`.
2. Crea el archivo `entrevistas/<slug>.html` copiando cualquier entrevista existente como plantilla y reemplazando título, autor, preguntas y respuestas.
3. Commit + push. Netlify desplegará automáticamente.

> El Home muestra las **10 más recientes** y cada categoría muestra **todas** las suyas ordenadas de más reciente a más antigua. Todo se ordena por la fecha `date`.

## Despliegue en Netlify

1. Sube este folder a un repositorio de GitHub.
2. En Netlify: *Add new site → Import from Git → selecciona el repo*.
3. **Build command:** (vacío) — **Publish directory:** `/`.
4. Deploy. El formulario de contacto funcionará automáticamente gracias a `data-netlify="true"`.

## Formulario

El formulario está configurado para **Netlify Forms**:
- Atributo `data-netlify="true"` y campo oculto `form-name`.
- Honeypot anti-spam (`netlify-honeypot="bot-field"`).
- Redirige a `/gracias.html` tras enviar.
- Verás las respuestas en *Netlify → Forms*.

## Personalización rápida

- **Datos de contacto y donaciones:** edita la sección `#contact` dentro de `index.html`.
- **Colores y tipografía:** variables en `:root` de `css/styles.css`.
- **Nombre del sitio:** `SciVoces` aparece en el header (`build.js` lo genera) y en los `<title>`.
