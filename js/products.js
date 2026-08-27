// Catálogo de Floristería Paraíso Floral
// Para agregar/editar productos: copia un bloque y cambia sus datos.
// "img" debe apuntar a un archivo dentro de la carpeta /images (ej: "images/rosas-rojas.jpg").
// Mientras no exista la foto, se muestra un ícono de flor como marcador de posición.

const PRODUCTS = [
  {
    codigo: "PF-01",
    nombre: "Ramo Clásico de Rosas Rojas",
    categoria: ["rosas"],
    descripcion: "Ramo de rosas rojas frescas, ideal para expresar amor y cariño en cualquier ocasión.",
    precio: 85000,
    img: "images/producto-01.jpg"
  },
  {
    codigo: "PF-02",
    nombre: "Girasoles Radiantes",
    categoria: ["girasoles", "bouquets"],
    descripcion: "Bouquet de girasoles frescos que transmite alegría, energía y buenos deseos.",
    precio: 78000,
    img: "images/producto-02.jpg"
  },
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
    categoria: ["canastas"],
    descripcion: "Canasta decorada con flores frescas y fruta seleccionada, ideal para regalar.",
    precio: 145000,
    img: "images/producto-04.jpg"
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
    codigo: "PF-09",
    nombre: "Arreglo Premium Paraíso",
    categoria: ["premium", "rosas"],
    descripcion: "Arreglo exclusivo con rosas y flores importadas, para ocasiones muy especiales.",
    precio: 220000,
    img: "images/producto-09.jpg"
  },
  {
    codigo: "PF-10",
    nombre: "Caja de Girasoles",
    categoria: ["cajas", "girasoles"],
    descripcion: "Caja decorativa con girasoles frescos, un regalo brillante y diferente.",
    precio: 98000,
    img: "images/producto-10.jpg"
  },
  {
    codigo: "PF-11",
    nombre: "Canasta de Cumpleaños",
    categoria: ["canastas", "chocolates"],
    descripcion: "Canasta festiva con flores, globo y chocolates para celebrar un cumpleaños.",
    precio: 135000,
    img: "images/producto-11.jpg"
  },
  {
    codigo: "PF-12",
    nombre: "Mini Ramo Económico",
    categoria: ["rosas", "bouquets"],
    descripcion: "Pequeño ramo de rosas, ideal para un detalle sencillo y significativo.",
    precio: 55000,
    img: "images/producto-12.jpg"
  },
  {
    codigo: "PF-13",
    nombre: "Ramo Redondo Clásico",
    categoria: ["ramos-redondos", "rosas"],
    descripcion: "Ramo compacto en forma circular con rosas y follaje, armado a mano en presentación tradicional.",
    precio: 90000,
    img: "images/producto-13.jpg"
  },
  {
    codigo: "PF-14",
    nombre: "Esfera Multicolor",
    categoria: ["ramos-redondos", "bouquets"],
    descripcion: "Ramo redondo con flores de varios colores dispuestas en capas, ideal como regalo llamativo.",
    precio: 105000,
    img: "images/producto-14.jpg"
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
  }
];
