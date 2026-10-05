# Keratinas B&G — Página web

Vitrina de servicios del Centro de Keratinas B&G (Dosquebradas). Sitio estático
(un solo HTML, sin dependencias), aparte de la floristería y de Engrana.
El contexto del negocio y lo pendiente está en `PROYECTO.md`.

```
keratinas-bg/
├── index.html          la página completa (diseño + CONFIG con textos y precios)
├── assets/
│   ├── fotos/          foto de cada servicio, portada (hero) y local
│   ├── resenas/        fotos de antes y después de las reseñas de Google
│   ├── logos/          logo completo y logo pequeño (también es el ícono de la pestaña)
│   └── videos/         ← AQUÍ VAN LOS VIDEOS DE LOS SERVICIOS
├── netlify.toml        configuración para publicar
├── robots.txt
└── PROYECTO.md         contexto del cliente
```

Todo lo editable está en el objeto `CONFIG`, al final de `index.html`.

---

## 1. Poner el video de un servicio

1. Prepara el video (ver la sección 2) y guárdalo en `assets/videos/`.
   Nombre en minúsculas, sin espacios ni tildes: `liso-gloss.mp4`, no `Liso Glóss.MP4`.
   Ojo: en internet las mayúsculas cuentan. `Tradicional.mp4` y `tradicional.mp4` son
   archivos distintos.
2. En `CONFIG`, busca el servicio y escribe el nombre completo en `video`:

   ```js
   { nombre:"Liso Gloss", foto:"lisogloss", video:"liso-gloss.mp4", ...
   ```

Eso es todo. Lo que pasa en la página:

- La foto se sigue viendo hasta que el video empieza; entonces el video aparece encima
  con un fundido suave.
- Se reproduce solo, **sin sonido y en bucle**.
- **Solo se descarga cuando la tarjeta está en pantalla** (al menos un tercio visible).
  Si la clienta no baja hasta los alisados, no gasta datos en videos.
- Se pausa cuando la tarjeta sale de la pantalla.
- Si el celular tiene activado "ahorro de datos" o "reducir movimiento", se queda la foto.
- Si el archivo no existe o falla, se queda la foto. La página nunca se ve rota.

Para quitar un video, deja `video:""`.

---

## 2. Cómo debe ser cada video

| Qué | Valor |
|---|---|
| Formato | **MP4** (H.264). Funciona en iPhone, Android y en el navegador de Instagram |
| Forma | **Vertical 2:3** (la forma del arco de la tarjeta). Si tu app no tiene 2:3, usa 3:4 o 9:16: la página recorta los bordes sola; deja el cabello en el centro |
| Tamaño | **720 × 1080 px** |
| Duración | 10 a 15 segundos |
| Sonido | Ninguno (quítale la pista de audio: pesa y no se usa) |
| **Peso máximo** | **1,5 MB por video.** Lo ideal: entre 0,8 y 1,2 MB |

Por qué 1,5 MB: la mayoría de clientas llegan desde Instagram, con datos del celular.
Con este peso cada video carga en uno o dos segundos y, como solo bajan los que están en
pantalla, a la vez se descargan uno o dos como mucho.

### Cómo comprimirlo sin saber programar

**Opción A — CapCut (en el celular o el computador).** Seguramente ya lo usan para Instagram.

1. Abre el video y recorta los 10–15 segundos que mejor muestren el resultado.
2. *Formato / Relación de aspecto* → **2:3** (o 3:4 si no aparece). Acomoda el cabello en el centro.
3. Silencia el clip (ícono de volumen → apagado).
4. *Exportar* → resolución **720p**, **30 fps**, tasa de bits **baja** o "recomendada".
5. Mira el peso del archivo. Si pasa de 1,5 MB, expórtalo otra vez con tasa de bits más baja
   o acórtalo un poco.

**Opción B — HandBrake (gratis, Windows y Mac: handbrake.fr).** Para videos que ya están en forma vertical.

1. Abre el video. *Preset*: **Fast 720p30**.
2. Pestaña *Dimensiones*: ancho **720**.
3. Pestaña *Video*: códec **H.264**, *Calidad constante* **RF 28** (si pesa más de 1,5 MB, sube a 30).
4. Pestaña *Audio*: borra todas las pistas.
5. Marca **Web Optimized** y dale *Iniciar*.

**Opción C — Mándamelos** y los dejo listos. Como referencia técnica, este es el comando
que se usa (ffmpeg); recorta al centro en 2:3, quita el audio, optimiza para web y
nunca deja pasar el video de unos 1,4 MB:

```
ffmpeg -i original.mp4 -t 15 -vf "scale=720:1080:force_original_aspect_ratio=increase,crop=720:1080,fps=30" -c:v libx264 -preset slow -crf 28 -maxrate 750k -bufsize 1500k -profile:v high -pix_fmt yuv420p -an -movflags +faststart liso-gloss.mp4
```

---

## 3. Publicar en Netlify

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

Cuando el dominio funcione, hay que agregar `sitemap.xml` y la línea `Sitemap:` en
`robots.txt` con la dirección definitiva, y darla de alta en Google Search Console
y en el perfil de Google del negocio.
