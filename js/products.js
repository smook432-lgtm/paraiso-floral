// Catálogo de Floristería Paraíso Floral
// Para agregar/editar productos: copia un bloque y cambia sus datos.
// "img" debe apuntar a un archivo dentro de la carpeta /images (ej: "images/rosas-rojas.jpg").
// Mientras no exista la foto, se muestra un ícono de flor como marcador de posición.

const PRODUCTS = [
  {
    codigo: "PF-04",
    nombre: "Canasta Frutal y Floral",
    categoria: ["canastas", "chocolates", "rosas"],
    descripcion: "Rosas rojas y rosadas con gypsophila sobre una base de fruta fresca seleccionada, acompañada de chocolates finos. Un regalo abundante y elegante.",
    precio: 145000,
    img: "images/canasta-frutal.jpg"
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
    codigo: "PF-22",
    nombre: "Trópico Dorado",
    categoria: ["girasoles", "bouquets", "premium"],
    descripcion: "Girasoles combinados con lirios amarillos y aves del paraíso en envoltura kraft. Una composición exótica de gran carácter.",
    precio: 120000,
    img: "images/girasoles-tropico-dorado.jpg"
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
  },

  /* ── Ramos Buchones ── */
  {
    codigo: "PF-29",
    nombre: "Pasión Carmesí",
    categoria: ["bouquets", "rosas"],
    descripcion: "Ramo buchón de rosas rojas compactas envuelto en papel negro y dorado. Elegante, intenso y perfecto para declarar un amor profundo.",
    precio: 145000,
    img: "images/buchon-pasion-carmesi.jpg"
  },
  {
    codigo: "PF-30",
    nombre: "Jardín Pastel",
    categoria: ["bouquets", "rosas"],
    descripcion: "Ramo buchón de rosas en tonos durazno, crema, amarillo y rojo con eucalipto y gypsophila. Una paleta suave de acabado impecable.",
    precio: 150000,
    img: "images/buchon-jardin-pastel.jpg"
  },
  {
    codigo: "PF-31",
    nombre: "Coral Dulce",
    categoria: ["bouquets", "rosas", "chocolates"],
    descripcion: "Ramo buchón de rosas coral y bicolor con follaje fresco, envuelto en papel rosado con lazo dorado y acompañado de Ferrero Rocher.",
    precio: 155000,
    img: "images/buchon-coral-dulce.jpg"
  },
  {
    codigo: "PF-32",
    nombre: "Corazón de Chocolate",
    categoria: ["bouquets", "rosas", "chocolates"],
    descripcion: "Ramo buchón de rosas fucsia que rodean un corazón de Ferrero Rocher, sobre envoltura marmolada con lazos rosa y lila.",
    precio: 165000,
    img: "images/buchon-corazon-ferrero.jpg"
  },
  {
    codigo: "PF-33",
    nombre: "Rosa Encanto",
    categoria: ["bouquets", "rosas"],
    descripcion: "Ramo buchón con lirios rosados, rosas fucsia, hortensia y boca de dragón en envoltura rosa. Delicado, aromático y muy femenino.",
    precio: 160000,
    img: "images/buchon-rosa-encanto.jpg"
  },
  {
    codigo: "PF-34",
    nombre: "Detalle Especial",
    categoria: ["bouquets", "rosas"],
    descripcion: "Ramo buchón de lirios y rosas en tonos rosa y rojo, con topper personalizado según la ocasión o profesión de quien lo recibe.",
    precio: 155000,
    img: "images/buchon-detalle-especial.jpg"
  },
  {
    codigo: "PF-35",
    nombre: "Fiesta Tropical",
    categoria: ["bouquets"],
    descripcion: "Ramo buchón vibrante con lirios naranjas, gerberas, pompones y claveles en tonos cálidos. Alegría pura para celebrar la vida.",
    precio: 140000,
    img: "images/buchon-fiesta-tropical.jpg"
  },

  /* ── Cajas ── */
  {
    codigo: "PF-36",
    nombre: "Corazón de Rosas Rojas",
    categoria: ["cajas", "rosas", "chocolates"],
    descripcion: "Caja en forma de corazón con rosas rojas y gypsophila, acompañada de un corazón de Ferrero Rocher. El regalo romántico por excelencia.",
    precio: 165000,
    img: "images/caja-corazon-rojo.jpg"
  },
  {
    codigo: "PF-37",
    nombre: "Caja Quinceañera",
    categoria: ["cajas", "rosas"],
    descripcion: "Caja con rosas fucsia y gypsophila, lazo rosado y globo burbuja personalizado con la edad y el mensaje que elijas.",
    precio: 175000,
    img: "images/caja-quince-globo.jpg"
  },
  {
    codigo: "PF-38",
    nombre: "Caja Coral y Chocolate",
    categoria: ["cajas", "rosas", "chocolates"],
    descripcion: "Caja negra con rosas coral intercaladas con chocolates Ferrero Rocher y lazo naranja. Presentación moderna y muy vistosa.",
    precio: 180000,
    img: "images/caja-coral-ferrero.jpg"
  },

  /* ── Canastas ── */
  {
    codigo: "PF-39",
    nombre: "Canasta Rosas y Fruta",
    categoria: ["canastas", "rosas"],
    descripcion: "Canasta con rosas rojas y blancas, pompones fucsia y una selección de fruta fresca. Elegante y generosa para cualquier ocasión.",
    precio: 175000,
    img: "images/canasta-rosas-fruta.jpg"
  },
  {
    codigo: "PF-40",
    nombre: "Canasta Coral",
    categoria: ["canastas", "rosas"],
    descripcion: "Canasta con rosas coral y blancas sobre follaje variado, acompañada de bananos, uvas y manzanas. Un detalle cálido y completo.",
    precio: 165000,
    img: "images/canasta-coral-fruta.jpg"
  },
  {
    codigo: "PF-41",
    nombre: "Canasta Tropical Grande",
    categoria: ["canastas", "premium"],
    descripcion: "Composición de gran formato con rosas amarillas, aves del paraíso, heliconias y una canasta abundante de fruta fresca. Impacto asegurado.",
    precio: 320000,
    img: "images/canasta-tropical-grande.jpg"
  },
  {
    codigo: "PF-42",
    nombre: "Canasta Exótica con Vino",
    categoria: ["canastas", "premium"],
    descripcion: "Arreglo exótico con anturios, lirios, girasoles y aves del paraíso, con canasta de fruta fresca y una botella de vino. Nuestro regalo más completo.",
    precio: 350000,
    img: "images/canasta-vino-exotica.jpg"
  }
];
