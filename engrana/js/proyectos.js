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
     Son disenos de muestra: el negocio no existe. Las maquetas que
     generaron las fotos estan en la carpeta muestras/.
     Cuando tengas un trabajo real, reemplaza los textos, sube la foto
     y pon ejemplo: false. */

  {
    id: "ejemplo-barberia",
    nombre: "Barbería El Cafetal",
    rubro: "Barbería · Ejemplo",
    anio: "2026",
    img: "images/trabajo-barberia.jpg",
    url: "",
    ejemplo: true,
    tags: ["Agenda online", "Horarios por barbero", "Panel de admin"],
    resumen:
      "Agenda de citas con horarios por barbero: el cliente aparta su hora y el cupo se bloquea al instante.",
    reto:
      "Las citas se agendan por mensajes, se cruzan dos clientes en el mismo horario más de una vez por semana y el barbero termina contestando el celular con las manos ocupadas.",
    solucion:
      "Calendario de disponibilidad por barbero, bloqueo del horario apenas alguien reserva, confirmación automática al cliente por WhatsApp y un panel para ver la agenda del día desde el celular.",
    logros: [
      "Reservas a toda hora, sin contestar mensajes",
      "Cero cruces de horario",
      "Servicios con precio y duración a la vista",
      "La agenda del día en el bolsillo"
    ]
  },
  {
    id: "ejemplo-restaurante",
    nombre: "Sazón de la Montaña",
    rubro: "Restaurante · Ejemplo",
    anio: "2026",
    img: "images/trabajo-restaurante.jpg",
    url: "",
    ejemplo: true,
    tags: ["Carta digital", "Código QR", "Domicilios"],
    resumen:
      "Carta digital que se actualiza desde el celular y se abre con un código QR en cada mesa.",
    reto:
      "Reimprimir la carta cada vez que sube un precio cuesta tiempo y plata, y el plato agotado se descubre cuando el cliente ya lo pidió.",
    solucion:
      "Carta con fotos, categorías y precios que el dueño cambia desde el celular, sello de «agotado» por plato, un código QR por mesa y pedido a domicilio que llega por WhatsApp.",
    logros: [
      "Precios actualizados en segundos",
      "Un QR por mesa, sin cartas impresas",
      "El cliente ve lo que de verdad hay en la cocina",
      "Domicilios con la dirección y el total ya escritos"
    ]
  },
  {
    id: "ejemplo-inmobiliaria",
    nombre: "Inmobiliaria Cordillera",
    rubro: "Finca raíz · Ejemplo",
    anio: "2026",
    img: "images/trabajo-inmobiliaria.jpg",
    url: "",
    ejemplo: true,
    tags: ["Buscador con filtros", "Ficha por inmueble", "Contacto al asesor"],
    resumen:
      "Listado de inmuebles con filtros por barrio, precio y habitaciones, y contacto directo con el asesor.",
    reto:
      "Los inmuebles solo se muestran en publicaciones sueltas que se pierden en el muro, y el interesado escribe sin decir cuál le gustó.",
    solucion:
      "Buscador con filtros, ficha por inmueble con galería y características, un enlace propio para compartir cada uno y un botón que le escribe al asesor con los datos del inmueble ya incluidos.",
    logros: [
      "Cada inmueble con su enlace para compartir",
      "Filtros por barrio, precio y habitaciones",
      "El asesor sabe de qué inmueble le hablan",
      "Un catálogo que no se pierde en el muro"
    ]
  }
];
