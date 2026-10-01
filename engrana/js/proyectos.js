/* ═══════════════════════════════════════════════════════
   Engrana — Proyectos del portafolio

   PARA AGREGAR O CAMBIAR UN TRABAJO, EDITA SOLO ESTE ARCHIVO.

   Campos de cada proyecto:
     id         identificador corto, sin espacios ni tildes
     nombre     nombre del cliente o del proyecto
     rubro      a qué se dedica el negocio (sale encima del título)
     anio       año del trabajo
     img        ruta de la imagen, dentro de "images/"
     url        enlace al sitio en vivo. Pon "" si todavía no está publicado
     ejemplo    true  = tarjeta de muestra, se marca como "Ejemplo"
                false = trabajo real
     tags       etiquetas cortas que se ven en la tarjeta
     resumen    una frase para la tarjeta
     reto       el problema que tenía el negocio
     solucion   qué construiste
     logros     lista de resultados concretos
   ═══════════════════════════════════════════════════════ */

const PROYECTOS = [
  {
    id: "paraiso-floral",
    nombre: "Floristería Paraíso Floral",
    rubro: "Floristería · Santa Rosa de Cabal",
    anio: "2025",
    img: "images/trabajo-paraiso-floral.jpg",
    url: "https://floristeriaparaisofloral.com",
    ejemplo: false,
    tags: ["Catálogo", "Pedidos por WhatsApp", "SEO local"],
    resumen:
      "Catálogo de 40 arreglos con pedido directo por WhatsApp y posicionamiento para búsquedas de la zona.",
    reto:
      "El negocio vendía solo por redes sociales. Los clientes preguntaban precios uno por uno y muchas ventas se perdían entre mensajes sin responder.",
    solucion:
      "Un sitio con catálogo filtrable por ocasión, buscador, favoritos y modo oscuro. Cada arreglo tiene su botón de WhatsApp, que abre el chat con el código, el precio y la foto del producto ya escritos en el mensaje.",
    logros: [
      "40 productos reales con precio y foto",
      "El pedido llega a WhatsApp ya armado, sin preguntas de ida y vuelta",
      "Ficha de negocio optimizada para «floristería en Santa Rosa de Cabal»",
      "Carga rápida y diseño pensado primero para el celular"
    ]
  },

  /* ─── Las tres tarjetas de abajo son EJEMPLOS ───
     Reemplázalas por trabajos reales: cambia los textos,
     pon ejemplo: false y sube la foto a la carpeta images/. */

  {
    id: "ejemplo-barberia",
    nombre: "Barbería Nombre del Negocio",
    rubro: "Barbería · Ejemplo",
    anio: "2025",
    img: "",
    url: "",
    ejemplo: true,
    tags: ["Agenda online", "Recordatorios", "Panel de admin"],
    resumen:
      "Agenda de citas en línea con horarios reales y aviso automático al barbero cuando entra una reserva.",
    reto:
      "Las citas se agendaban por mensajes y se cruzaban dos clientes en el mismo horario más de una vez por semana.",
    solucion:
      "Una página con calendario de disponibilidad por barbero, bloqueo del horario apenas alguien reserva y confirmación al cliente.",
    logros: [
      "Reservas 24 horas sin contestar mensajes",
      "Cero cruces de horario",
      "Panel para ver la agenda del día desde el celular"
    ]
  },
  {
    id: "ejemplo-restaurante",
    nombre: "Restaurante Nombre del Negocio",
    rubro: "Restaurante · Ejemplo",
    anio: "2025",
    img: "",
    url: "",
    ejemplo: true,
    tags: ["Carta digital", "Código QR", "Domicilios"],
    resumen:
      "Carta digital que se actualiza desde el celular y se abre con un código QR en cada mesa.",
    reto:
      "Reimprimir la carta cada vez que cambiaba un precio costaba tiempo y plata.",
    solucion:
      "Carta en línea con fotos, categorías y disponibilidad del día, más pedido a domicilio por WhatsApp.",
    logros: [
      "Precios actualizados en segundos",
      "Un QR por mesa, sin cartas impresas",
      "Pedidos a domicilio con la dirección y el total ya escritos"
    ]
  },
  {
    id: "ejemplo-inmobiliaria",
    nombre: "Inmobiliaria Nombre del Negocio",
    rubro: "Finca raíz · Ejemplo",
    anio: "2025",
    img: "",
    url: "",
    ejemplo: true,
    tags: ["Buscador", "Galería", "Formulario"],
    resumen:
      "Listado de inmuebles con filtros por barrio, precio y número de habitaciones.",
    reto:
      "Los inmuebles solo se mostraban en publicaciones sueltas que se perdían en el muro.",
    solucion:
      "Un buscador con filtros, galería de fotos por inmueble y formulario de contacto que llega directo al asesor.",
    logros: [
      "Cada inmueble con su enlace propio para compartir",
      "Filtros por barrio, precio y habitaciones",
      "Contactos que llegan con los datos del inmueble incluidos"
    ]
  }
];
