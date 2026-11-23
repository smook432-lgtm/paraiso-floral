# Keratinas B&G — Página web

Vitrina de servicios del Centro de Keratinas B&G (Dosquebradas). Sitio estático
(un solo HTML, sin dependencias), aparte de la floristería y de Engrana.
El contexto del negocio y lo pendiente está en `PROYECTO.md`.

```
keratinas-bg/
├── index.html          la página: catálogo de productos capilares (CATALOGO con productos, precios y kits)
├── productos/          /productos/ solo redirige al inicio (enlace viejo, por si alguien lo tiene)
├── assets/
│   ├── estilos.css     el diseño de la página
│   ├── productos/      fotos de los productos y kits (.webp)
│   ├── resenas/        fotos de antes y después de las reseñas de Google
│   ├── logos/          logo completo y logo pequeño (también es el ícono de la pestaña)
│   ├── fotos/          blanca.webp (foto de Blanca con la línea B&G; hoy no se usa en la página)
│   └── og.jpg          imagen que aparece al compartir el link (1200×630)
├── netlify.toml        configuración vieja de Netlify (referencia; hoy se publica en GitHub Pages)
├── robots.txt, sitemap.xml
└── PROYECTO.md         contexto del cliente
```

Todo lo editable está en el objeto `CATALOGO`, al final de `index.html`: productos, presentaciones,
precios, beneficios, kits, reseñas y mensajes de WhatsApp.

## 1. Cambiar un producto o un precio

En `CATALOGO`, cada producto es un bloque así:

```js
{ nombre:"Sérum Capilar", foto:"serum-capilar", presentacion:"30 mL", precio:"$35.000", ... }
```

- `foto`: nombre de la foto en `assets/productos/`, sin el `.webp`. Las fotos van en 4:5 (800×1000);
  las de los kits, cuadradas (800×800).
- `precio:""` hace que la tarjeta diga "Consúltalo" (el precio se da por WhatsApp).
- Al tocar la foto se abre completa: se usa `assets/productos/<foto>-full.webp` (la foto sin recortar).
  Si un producto nuevo no la tiene, el visor muestra la misma foto de la tarjeta.
- El botón "Pedir por WhatsApp" de cada producto abre el chat con el nombre y la presentación.

## 2. Imagen al compartir

`assets/og.jpg` es la tarjeta que se ve al mandar el link por WhatsApp, Instagram o Facebook.
WhatsApp guarda la vista previa un tiempo: si se cambia, puede tardar en verse.

## 3. Dónde está publicada

**Hoy: GitHub Pages.** No hay que hacer nada: cada cambio de esta carpeta que llega a la rama
`master` se publica solo en 1–2 minutos (`.github/workflows/keratinas-pages.yml`; se ve en la
pestaña *Actions* del repositorio). En *Settings → Pages* están el dominio `keratinasbyg.com` y
la casilla *Enforce HTTPS*. Los archivos `.md` y `netlify.toml` no se publican.

Lo de abajo (Netlify) queda como referencia: se usó hasta el 14-oct-2026, cuando el plan gratis
se quedó sin créditos y dejó de publicar cambios.

### Publicar en Netlify (referencia)

### Opción conectada a GitHub (recomendada)

Cada cambio que se guarde en el repositorio se publica solo.

1. Entra a https://app.netlify.com e inicia sesión **con tu cuenta de GitHub**.
2. *Add new project* → *Import an existing project* → **GitHub**.
3. Autoriza a Netlify y elige el repositorio `paraiso-floral`.
4. En la configuración:
   - *Branch to deploy*: `master`
   - *Base directory*: **`keratinas-bg`** ← lo más importante; sin esto publicaría la floristería
   - *Build command*: déjalo vacío
   - *Publish directory*: déjalo como lo propone Netlify (`keratinas-bg`)
5. *Deploy*. En un minuto te da una dirección tipo `nombre-al-azar.netlify.app`.
6. *Project configuration → Change project name* → escribe `keratinas-byg` (o el que esté
   libre). La página queda en `https://keratinas-byg.netlify.app`.

### Opción rápida (arrastrar y soltar)

1. Descarga esta carpeta `keratinas-bg` a tu computador.
2. Entra a https://app.netlify.com/drop y arrastra la carpeta completa.
3. Para actualizar (por ejemplo, al agregar videos) hay que volver a arrastrarla en
   *Deploys* del mismo proyecto.

---

## 4. Conectar un dominio propio

1. Compra el dominio (por ejemplo en Namecheap, GoDaddy, Hostinger, o directamente en
   Netlify en *Domains*). Un `.com` suele ser más barato que un `.com.co`.
2. En Netlify: tu proyecto → *Domain management* → *Add a domain* → escribe el dominio.
3. Netlify te ofrece dos caminos:
   - **Usar Netlify DNS (el más fácil):** Netlify te muestra 4 "nameservers"
     (tipo `dns1.p01.nsone.net`). Entra a donde compraste el dominio, busca
     *Nameservers / Servidores DNS*, elige "personalizados" y pega los 4. Listo.
   - **Dejar el DNS donde lo compraste:** crea dos registros allá:
     - Tipo `A`, nombre `@`, valor `75.2.60.5`
     - Tipo `CNAME`, nombre `www`, valor `keratinas-byg.netlify.app` (tu dirección de Netlify)
4. Espera. El cambio puede tardar desde minutos hasta 24–48 horas.
5. Netlify activa el candado (HTTPS) solo y gratis. Revísalo en *Domain management → HTTPS*.

Dominio actual: **keratinasbyg.com** (comprado en Netlify, oct-2026; su DNS en Netlify apunta a GitHub Pages:
4 registros `A` 185.199.108.153 / .109 / .110 / .111 y `CNAME www` → `smook432-lgtm.github.io`). Ya están `sitemap.xml`,
la línea `Sitemap:` en `robots.txt`, la dirección canónica y la imagen para compartir
(`assets/og.jpg`, 1200×630). Falta darla de alta en Google Search Console y ponerla en el
perfil de Google del negocio y en las redes. Si algún día cambia el dominio, hay que
cambiarlo en esos tres archivos y en las etiquetas `og:` de `index.html`.
