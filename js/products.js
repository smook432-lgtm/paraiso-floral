// Catálogo de Floristería Paraíso Floral
// Para agregar/editar productos: copia un bloque y cambia sus datos.
// "img" debe apuntar a un archivo dentro de la carpeta /images (ej: "images/rosas-rojas.jpg").
// Mientras no exista la foto, se muestra un ícono de flor como marcador de posición.

const PRODUCTS = [
  {
    codigo: "PF-03",
    nombre: "Bouquet Primaveral",
    categoria: ["bouquets"],
    descripcion: "Mezcla de flores de temporada en tonos pastel, perfecta para sorprender.",
    precio: 95000,
    img: "images/producto-03.jpg"
  },
  {
    codigo: "PF-04",
    nombre: "Canasta Frutal y Floral",
    categoria: ["canastas", "chocolates", "rosas"],
    descripcion: "Rosas rojas y rosadas con gypsophila sobre una base de fruta fresca seleccionada, acompañada de chocolates finos. Un regalo abundante y elegante.",
    precio: 145000,
    img: "images/canasta-frutal.jpg"
  },
  {
    codigo: "PF-05",
    nombre: "Caja Sorpresa de Rosas",
    categoria: ["cajas", "premium"],
    descripcion: "Caja redonda con rosas premium compactas, presentación elegante y moderna.",
    precio: 130000,
    img: "images/producto-05.jpg"
  },
  {
    codigo: "PF-06",
    nombre: "Detalle Dulce con Chocolates",
    categoria: ["chocolates"],
    descripcion: "Ramo pequeño acompañado de chocolates finos, perfecto para una disculpa o agradecimiento.",
    precio: 110000,
    img: "images/producto-06.jpg"
  },
  {
    codigo: "PF-07",
    nombre: "Ramo de Novia Elegante",
    categoria: ["novia", "premium"],
    descripcion: "Ramo de novia en tonos blancos y verdes, diseño delicado y sofisticado.",
    precio: 180000,
    img: "images/producto-07.jpg"
  },
  {
    codigo: "PF-08",
    nombre: "Gerberas Multicolor",
    categoria: ["bouquets"],
    descripcion: "Bouquet vibrante de gerberas de varios colores, alegre y lleno de vida.",
    precio: 72000,
    img: "images/producto-08.jpg"
  },
  {
    codigo: "PF-11",
    nombre: "Canasta de Cumpleaños",
    categoria: ["canastas", "rosas"],
    descripcion: "Canasta festiva con rosas rosadas, pompones verdes y fruta fresca, rematada con un globo metalizado. Perfecta para celebrar a alguien especial.",
    precio: 135000,
    img: "images/canasta-cumpleanos.jpg"
  },
  {
    codigo: "PF-13",
    nombre: "Ramo Redondo Clásico",
    categoria: ["ramos-redondos", "rosas"],
    descripcion: "Ramo redondo de rosas rojas con hypericum y eucalipto, envuelto en papel kraft. Una composición romántica de acabado impecable.",
    precio: 90000,
    img: "images/ramo-redondo-clasico.jpg"
  },
  {
    codigo: "PF-14",
    nombre: "Ramo Redondo Imperial",
    categoria: ["ramos-redondos", "rosas", "cajas", "premium"],
    descripcion: "Domo abundante de rosas rojas con follaje fresco sobre caja negra y lazo dorado. Nuestra pieza más imponente para una ocasión inolvidable.",
    precio: 105000,
    img: "images/ramo-redondo-imperial.jpg"
  },
  {
    codigo: "PF-15",
    nombre: "Corona Fúnebre Blanca",
    categoria: ["funebres"],
    descripcion: "Corona en tonos blancos y verdes, elaborada con flores frescas como muestra de condolencia y respeto.",
    precio: 210000,
    img: "images/producto-15.jpg"
  },
  {
    codigo: "PF-16",
    nombre: "Ramo Fúnebre Clásico",
    categoria: ["funebres"],
    descripcion: "Ramo funerario en tonos blancos y follaje verde, una expresión sobria y elegante de acompañamiento.",
    precio: 150000,
    img: "images/producto-16.jpg"
  },
  {
    codigo: "PF-17",
    nombre: "Copa Encanto Rosado",
    categoria: ["rosas", "premium"],
    descripcion: "Rosas rosadas y blancas con gypsophila y boca de dragón, montadas en copa de cerámica blanca. Una pieza clásica y sofisticada de gran presencia.",
    precio: 175000,
    img: "images/copa-rosas-pastel.jpg"
  },
  {
    codigo: "PF-18",
    nombre: "Domo Rosa Dorado",
    categoria: ["rosas", "ramos-redondos", "cajas"],
    descripcion: "Domo abundante de rosas rosadas con gypsophila y eucalipto sobre caja blanca con lazo dorado. Delicado, femenino y siempre acertado.",
    precio: 155000,
    img: "images/domo-rosas-rosadas.jpg"
  },

  /* ── Ramos en Girasoles ── */
  {
    codigo: "PF-19",
    nombre: "Sol de Verano",
    categoria: ["girasoles", "bouquets"],
    descripcion: "Ramo de girasoles frescos con solidago, envuelto en papel blanco de lunares dorados y lazo chocolate. Luminoso y siempre acertado.",
    precio: 85000,
    img: "images/girasoles-sol-verano.jpg"
  },
  {
    codigo: "PF-20",
    nombre: "Girasoles Campestres",
    categoria: ["girasoles", "bouquets"],
    descripcion: "Girasoles con eucalipto y follaje fresco sobre envoltura kraft con lazo marfil. Un ramo natural, cálido y de aire campestre.",
    precio: 90000,
    img: "images/girasoles-campestres.jpg"
  },
  {
    codigo: "PF-21",
    nombre: "Abrazo de Sol",
    categoria: ["girasoles", "bouquets"],
    descripcion: "Ramo abundante de girasoles con eucalipto y solidago en envoltura kraft con lazo verde. Un abrazo de energía y buenos deseos.",
    precio: 105000,
    img: "images/girasoles-abrazo-sol.jpg"
  },
  {
    codigo: "PF-22",
    nombre: "Trópico Dorado",
    categoria: ["girasoles", "bouquets", "premium"],
    descripcion: "Girasoles combinados con lirios amarillos y aves del paraíso en envoltura kraft. Una composición exótica de gran carácter.",
    precio: 120000,
    img: "images/girasoles-tropico-dorado.jpg"
  },
  {
    codigo: "PF-23",
    nombre: "Caja Sol Radiante",
    categoria: ["girasoles", "cajas", "ramos-redondos"],
    descripcion: "Girasoles de gran tamaño montados en caja negra con lazo dorado. Presentación moderna y de mucho impacto visual.",
    precio: 115000,
    img: "images/girasoles-caja-radiante.jpg"
  },
  {
    codigo: "PF-24",
    nombre: "Cumpleaños de Sol",
    categoria: ["girasoles", "cajas"],
    descripcion: "Caja negra con girasoles y rosas amarillas, coronada por un globo burbuja personalizado con tu mensaje. Ideal para una celebración inolvidable.",
    precio: 150000,
    img: "images/girasoles-cumpleanos.jpg"
  },
  {
    codigo: "PF-25",
    nombre: "Corazón Sol y Chocolate",
    categoria: ["girasoles", "cajas", "chocolates"],
    descripcion: "Caja en forma de corazón con girasoles y chocolates Ferrero Rocher, rematada con lazo dorado. Un detalle dulce y luminoso.",
    precio: 135000,
    img: "images/girasoles-corazon-chocolate.jpg"
  },
  {
    codigo: "PF-26",
    nombre: "Sinfonía de Girasoles",
    categoria: ["girasoles", "premium"],
    descripcion: "Arreglo de gran formato con girasoles abiertos, solidago y follaje tropical en abanico. Una pieza imponente para ocasiones importantes.",
    precio: 180000,
    img: "images/girasoles-sinfonia.jpg"
  },
  {
    codigo: "PF-27",
    nombre: "Paraíso Tropical",
    categoria: ["girasoles", "premium", "chocolates"],
    descripcion: "Girasoles con aves del paraíso, hypericum y follaje tropical, acompañados de chocolates Ferrero Rocher. Nuestro arreglo más exuberante.",
    precio: 195000,
    img: "images/girasoles-paraiso-tropical.jpg"
  },
  {
    codigo: "PF-28",
    nombre: "Canasta Sol Tropical",
    categoria: ["girasoles", "canastas", "premium"],
    descripcion: "Canasta de dos niveles con girasoles, aves del paraíso y una selección de fruta fresca de temporada. Un regalo generoso y espectacular.",
    precio: 220000,
    img: "images/girasoles-canasta-tropical.jpg"
  }
];
