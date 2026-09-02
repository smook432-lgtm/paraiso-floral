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
  },

  /* ── Con Chocolates ── */
  {
    codigo: "PF-43",
    nombre: "Corazón Rojo y Ferrero",
    categoria: ["chocolates", "cajas", "rosas"],
    descripcion: "Caja en forma de corazón con rosas rojas y un corazón de Ferrero Rocher, lazo rojo satinado. Un clásico romántico infalible.",
    precio: 160000,
    img: "images/choco-corazon-rosas-rojas.jpg"
  },
  {
    codigo: "PF-44",
    nombre: "Caja Madera Feliz Día",
    categoria: ["chocolates", "cajas", "rosas"],
    descripcion: "Caja de madera calada con mensaje \"Feliz Día\", rosas rojas y gypsophila arriba y un cajón de Ferrero Rocher en la base.",
    precio: 150000,
    img: "images/choco-caja-madera-feliz-dia.jpg"
  },
  {
    codigo: "PF-45",
    nombre: "Corazón de Girasoles y Ferrero",
    categoria: ["chocolates", "cajas", "girasoles"],
    descripcion: "Caja corazón en girasoles frescos y Ferrero Rocher, lazo dorado. Un detalle luminoso y dulce a la vez.",
    precio: 145000,
    img: "images/choco-corazon-girasoles.jpg"
  },
  {
    codigo: "PF-46",
    nombre: "Caja Azul con Ferrero",
    categoria: ["chocolates", "cajas", "rosas"],
    descripcion: "Caja blanca con rosas en un llamativo tono azul y Ferrero Rocher al centro, lazo azul rey. Una propuesta fuera de lo común.",
    precio: 150000,
    img: "images/choco-caja-azul-ferrero.jpg"
  },
  {
    codigo: "PF-47",
    nombre: "Ramo Romántico con Ferrero",
    categoria: ["chocolates", "bouquets", "rosas", "premium"],
    descripcion: "Ramo abundante de rosas rojas y orquídeas con un corazón de Ferrero Rocher y globo con mensaje personalizado. Ideal para aniversarios.",
    precio: 190000,
    img: "images/choco-ramo-rosas-globo.jpg"
  },

  /* ── Ramos Fúnebres ── */
  {
    codigo: "PF-48",
    nombre: "Corazón Rojo y Blanco",
    categoria: ["funebres"],
    descripcion: "Gran corazón de rosas rojas y blancas con cinta de dedicatoria. Una expresión profunda de amor y despedida.",
    precio: 280000,
    img: "images/funebre-corazon-rojo-blanco.jpg"
  },
  {
    codigo: "PF-49",
    nombre: "Corazón Blanco y Crema",
    categoria: ["funebres"],
    descripcion: "Corazón elaborado con rosas blancas y crema, gypsophila y margaritas. Sobrio, elegante y lleno de paz.",
    precio: 220000,
    img: "images/funebre-corazon-blanco-crema.jpg"
  },
  {
    codigo: "PF-50",
    nombre: "Corona Girasoles y Blanco",
    categoria: ["funebres"],
    descripcion: "Corona ovalada de rosas blancas y girasoles con lazo blanco. Combina la solemnidad del blanco con la calidez del girasol.",
    precio: 230000,
    img: "images/funebre-girasoles-blanco.jpg"
  },
  {
    codigo: "PF-51",
    nombre: "Corona Blanca y Azul",
    categoria: ["funebres"],
    descripcion: "Corona circular de flores blancas con lirios y acentos en azul. Una composición serena y de gran presencia.",
    precio: 210000,
    img: "images/funebre-corona-blanca-azul.jpg"
  },
  {
    codigo: "PF-52",
    nombre: "Estandarte Lila y Blanco",
    categoria: ["funebres"],
    descripcion: "Arreglo alto en tonos lila, blanco y crema con aves del paraíso, ideal para acompañar una ceremonia en iglesia.",
    precio: 240000,
    img: "images/funebre-lila-blanco.jpg"
  },

  /* ── Premium ── */
  {
    codigo: "PF-53",
    nombre: "Degradado de Rosas",
    categoria: ["premium", "rosas"],
    descripcion: "Arreglo en cascada con rosas en degradado de coral, rosado y durazno sobre base de madera. Elegancia en movimiento.",
    precio: 190000,
    img: "images/premium-rosas-degradado.jpg"
  },
  {
    codigo: "PF-54",
    nombre: "Cumpleaños con Globo y Perrito",
    categoria: ["premium", "cajas"],
    descripcion: "Arreglo de rosas coral con un adorable perrito hecho de flores, globo numérico y burbuja de \"Feliz Cumpleaños\" personalizables con la edad.",
    precio: 230000,
    img: "images/premium-98-globo-perrito.jpg"
  },
  {
    codigo: "PF-55",
    nombre: "Multicolor Clásico",
    categoria: ["premium", "rosas", "cajas"],
    descripcion: "Caja redonda con rosas rojas, fucsia y blancas combinadas con astromelias. Vibrante, abundante y siempre acertado.",
    precio: 200000,
    img: "images/premium-multicolor-clasico.jpg"
  },
  {
    codigo: "PF-56",
    nombre: "Corazón Morado y Mariposas",
    categoria: ["premium", "rosas"],
    descripcion: "Gran corazón de rosas moradas con mariposas doradas, orquídeas y gerberas fucsia en la base. Una pieza de autor, distinta a todo lo demás.",
    precio: 260000,
    img: "images/premium-corazon-morado-mariposas.jpg"
  },
  {
    codigo: "PF-57",
    nombre: "Corazón Rojo y Coral",
    categoria: ["premium", "rosas"],
    descripcion: "Imponente corazón de rosas rojas y coral sobre pedestal. Una declaración de amor a gran escala.",
    precio: 240000,
    img: "images/premium-corazon-rojo-coral.jpg"
  },
  {
    codigo: "PF-58",
    nombre: "Girasoles y Rosas Multicolor",
    categoria: ["premium", "girasoles", "cajas"],
    descripcion: "Caja negra con girasoles, rosas fucsia, naranja y amarillas en una explosión de color. Alegre, generoso y muy fotogénico.",
    precio: 200000,
    img: "images/premium-girasoles-rosas-multicolor.jpg"
  },
  {
    codigo: "PF-59",
    nombre: "Orquídeas y Ferrero",
    categoria: ["premium", "chocolates"],
    descripcion: "Arreglo alto de orquídeas cymbidium y aves del paraíso, acompañado de una caja de Ferrero Rocher. Sofisticado y exclusivo.",
    precio: 250000,
    img: "images/premium-orquideas-ferrero.jpg"
  }
];
