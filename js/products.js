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
    categoria: ["canastas", "rosas"],
    descripcion: "Canasta festiva con rosas rosadas, pompones verdes y fruta fresca, rematada con un globo metalizado. Perfecta para celebrar a alguien especial.",
    precio: 135000,
    img: "images/canasta-cumpleanos.jpg"
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
  }
];
