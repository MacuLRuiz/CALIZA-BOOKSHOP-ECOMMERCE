const product = [

    {
        id: 1,
        name: "Harry Potter",
        img: "../../books/harrypotter.png",
        description: "La colección completa del mago más famoso",
        price: 15500,
        stock: 8,
        author: "J.K Rouling",
        sinopsis: "La magia llega en una edición especial, con tapas modernas y renovadas. Coleccioná la saga completa de la historia más fantástica de todos los tiempos.",
        category: "Fantasia"
    },
    {
        id: 2,
        name: "Dune",
        img: "../../books/dune.png",
        description: "La primera parte de la saga de ciencia ficción más vendida de la historia",
        price: 2599,
        stock: 6,
        author: "Frank Herbert",
        sinopsis: "En el desértico planeta Arrakis, el agua es el bien más preciado y llorar a los muertos, el símbolo de máxima prodigalidad. Pero algo hace de Arrakis una pieza estratégica para los intereses del Emperador, las Grandes Casas y la Cofradía, los tres grandes poderes de la galaxia. Arrakis es el único origen conocido de la melange, preciosa especia y uno de los bienes más codiciados del universo.ezcla fascinante de aventura, misticismo, intrigas políticas y ecologismo, Dune se convirtió, desde el momento de su publicación, en un fenómeno de culto y en la mayor epopeya de ciencia-ficción de todos los tiempos.",
        category: "Ciencia Ficcion"
    },
    {
        id: 3,
        name: "Fuego y Sangre",
        img: "../../books/fireandblood.png",
        description: "La historia jamás contada de la casa Targaryen",
        price: 2459,
        stock: 7,
        author: "George R.R. Martin",
        sinopsis: "Siglos antes de que tuvieran lugar los acontecimientos que se relatan en «Canción de hielo y fuego», la casa Targaryen, la única dinastía de señores dragón que sobrevivió a la Maldición de Valyria, se asentó en la isla de Rocadragón. Este es el primero de dos volúmenes, donde el autor de Juego de tronos nos cuenta, con todo lujo de detalles, la historia de tan fascinante familia, empezando por Aegon I Targaryen, creador del icónico Trono de Hierro, y seguido por el resto de las generaciones de Targaryen que lucharon enconadamente por conservar el poder y el trono, hasta la llegada de la guerra civil que estuvo a punto de acabar con ellos.",
        category: "Fantasia"
    },
    {
        id: 4,
        name: "Lo que dicen tus ojos",
        img: "../../books/loquedicentusojos.png",
        description: "Una historia de amor que atraviesa desiertos",
        price: 1659,
        stock: 8,
        author: "Florencia Bonelli",
        sinopsis: "Apenas iniciada una brillante carrera en el diario que dirige su padrino y mentor, la joven periodista Francesca de Gecco sufre un terrible desengaño amoroso. Solo el tiempo y la distancia podrán curar una herida tan profunda, y por eso la muchacha acepta un puesto en la embajada de su país en Ginebra. Sin embargo, esa ciudad solo será la primera etapa de un viaje mucho más largo. Al otro lado del mundo, en los palacios más deslumbrantes del desierto de Arabia, Francesca encontrará una segunda oportunidad para ser feliz.",
        category: "Romantica"
    },
    {
        id: 5,
        name: "1984",
        img: "../../books/1984.png",
        description: "la clásica fábula del totalitarismo de George Orwell",
        price: 2000,
        stock: 5,
        author: "George Orwell",
        sinopsis: "En 1984, Londres está controlada por un gobieno totalitario. El Gran Hermano lo vigila absolutamente todo. La mano ejecutora, la Policía del Pensamiento, controla cada aspecto de la vida de los ciudadanos. Un ejemplo claro de cómo el Gran Hermano es cada día más real.",
        category: "Ciencia Ficcion"
    },
    {
        id: 6,
        name: "Jane Austen: La coleccion",
        img: "../../books/janeausten.png",
        description: "Esta colección honra la grandeza literaria de Austen y es un excelente regalo para las lectoras del género",
        price: 12000,
        stock: 5,
        author: "Jane Austen",
        sinopsis: "Es una verdad reconocida universalmente que Jane Austen es una de las gigantes literarias de todos los tiempos, y los amantes de ella, adorarán el diseño moderno de este set de regalo en caja que contiene ocho de sus novelas más populares e icónicas, en siete volúmenes: La Abadía de Northanger, Orgullo y Prejuicio, Sentido y Sensibilidad, Lady Susan, Los Watson, Mansfield Park, Persuasión y Emma.",
        category: "Romantica"
    },
    {
        id: 7,
        name: "It",
        img: "../../books/it.png",
        description: "Una de las novelas más ambiciosas de Stephen King, donde ha logrado perfeccionar las claves del género de terror",
        price: 1100,
        stock: 11,
        author: "Stephen King",
        sinopsis: "¿Quién o qué mutila y mata a los niños de un pequeño pueblo norteamericano? ¿Por qué llega cíclicamente el horror a Derry en forma de un payaso siniestro que va sembrando la destrucción a su paso? Esto es lo que se proponen averiguar los protagonistas de esta novela. Tras veintisiete años de tranquilidad y lejanía una antigua promesa infantil les hace volver al lugar en el que vivieron su infancia y juventud como una terrible pesadilla.",
        category: "Terror"
    },
    {
        id: 8,
        name: "El origen",
        img: "../../books/elorigen.png",
        description: "La quinta entrega de la protagonizada por el profesor Robert Langdon",
        price: 1100,
        stock: 5,
        author: "Dan Brown",
        sinopsis: "Ante la inminente amenaza de que el valioso hallazgo se pierda para siempre, Langdon y Ambra deben huir desesperadamente a Barcelona e iniciar una carrera contrarreloj para localizar la críptica contraseña que les dará acceso al revolucionario secreto de Kirsch.",
        category: "Suspenso"
    },
    {
        id: 9,
        name: "Marlene",
        img: "../../books/marlene.png",
        description: "Otra novela de época que te atrapará, esta vez desde los pasillos porteños de Boca de 1910",
        price: 900,
        stock: 14,
        author: "Florencia Bonelli",
        sinopsis: "El tango nace en el barrio porteño de La Boca a principios del siglo XX y un amor imposible crece en sus calles. La famosa soprano Micaela Urtiaga Four, conocida en Europa como La divina Four, decide regresar a Buenos Aires, su ciudad natal, después de años de ausencia. Pero el remanso que ansiaba hallar entre sus seres queridos se transforma en un torbellino cuando su vida se vincula repentinamente a la de Carlo Varzi, un proxeneta del barrio de La Boca, un hombre temible y sin escrúpulos, con un pasado tan oscuro como su presente. Y aunque Micaela tratará de vencer la atracción que ese hombre ejerce sobre ella, finalmente cederá al impulso que la domina.",
        category: "Romantica"
    },
    {
        id: 10,
        name: "Cementerio de animales",
        img: "../../books/cementerio.png",
        description: "Una de las novelas perturbadoras más conocidas de Stephen King",
        price: 12000,
        stock: 9,
        author: "Stephen King",
        sinopsis: "Narra la historia del doctor Louis Creed, que al poco de mudarse con su esposa Rachel y sus dos hijos pequeños desde Boston a un recóndito paraje de Maine, descubre un misterioso cementerio escondido en lo más impenetrable del bosque, a escasa distancia del nuevo hogar familiar.",
        category: "Terror"
    },
    {
        id: 11,
        name: "El códio Da Vinci",
        img: "../../books/elcodigodavinci.png",
        description: "Una de las novelas más leídas de todos los tiempos. Una mezcla trepidante de aventuras, intrigas vaticanas, simbología y enigmas.",
        price: 990,
        stock: 4,
        author: "Dan Brown",
        sinopsis: "Robert Langdon, experto en simbología, recibe una llamada en mitad de la noche: el conservador del museo del Louvre ha sido asesinado en extrañas circunstancias, y junto a su cadáver ha aparecido un desconcertante mensaje cifrado. Al profundizar en la investigación, Langdom descubre que las pistas conducen a las obras de Leonardo Da Vinci… y que están a la vista de todos, ocultas por el ingenio del pintor.",
        category: "Suspenso"
    },
    {
        id: 12,
        name: "La Comunidad del Anillo - El señor de los anillos I",
        img: "../../books/lacomunidad.png",
        description: "El primer libro de la épica y fantástica saga de Tolkien",
        price: 1100,
        stock: 13,
        author: "J.R.R. Tolkien",
        sinopsis: "En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo único y emprender el viaje para su destrucción en las Grietas del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras del País Oscuro, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.",
        category: "Fantasia"
    },

];


    export const getFetch = new Promise((res, rej) => {
        setTimeout(() => {
            res(product);
        }, 2000);
    })
    
    export default getFetch