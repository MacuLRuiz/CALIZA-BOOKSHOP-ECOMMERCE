const productDetail = [
    {
        id: 1,
        name: "Harry Potter",
        img: "../../books/harrypotter.png",
        sinopsis: "sinopsis de producto 1",
        price: 1500,
        stock: 8,
        author: "J.K Rouling",
        category: "Fantasia"
    },
    {
        id: 2,
        name: "Dune",
        img: "../../books/dune.png",
        sinopsis: "sinopsis de producto 2",
        price: 1899,
        stock: 6,
        author: "Frank Herbert",
        category: "Ciencia Ficcion"
    },
    {
        id: 3,
        name: "Fuego y Sangre",
        img: "../../books/fireandblood.png",
        sinopsis: "sinopsis de producto 3",
        price: 2459,
        stock: 7,
        author: "George R.R. Martin",
        category: "Fantasia"
    },
    {
        id: 4,
        name: "Lo que dicen tus ojos",
        img: "../../books/loquedicentusojos.png",
        sinopsis: "sinopsis de producto 4",
        price: 1659,
        stock: 8,
        author: "Florencia Bonelli",
        category: "Romantica"
    },
    {
        id: 5,
        name: "1984",
        img: "../../books/1984.png",
        sinopsis: "sinopsis de producto 5",
        price: 2000,
        stock: 5,
        author: "George Orwell",
        category: "Ciencia Ficcion"
    },
    {
        id: 6,
        name: "Jane Austen: La coleccion",
        img: "../../books/janeausten.png",
        sinopsis: "sinopsis de producto 5",
        price: 12000,
        stock: 5,
        author: "Jane Austen",
        category: "Romantica"
    },
    {
        id: 7,
        name: "It",
        img: "../../books/it.png",
        sinopsis: "Descripción de producto 7",
        price: 1100,
        stock: 11,
        author: "Stephen King",
        category: "Terror"
    },
    {
        id: 8,
        name: "El origen",
        img: "../../books/elorigen.png",
        sinopsis: "Descripción de producto 8",
        price: 1100,
        stock: 5,
        author: "Dan Brown",
        category: "Suspenso"
    },
    {
        id: 9,
        name: "Marlene",
        img: "../../books/marlene.png",
        sinopsis: "Descripción de producto 9",
        price: 900,
        stock: 14,
        author: "Florencia Bonelli",
        category: "Romantica"
    },
    {
        id: 10,
        name: "Cementerio de animales",
        img: "../../books/cementerio.png",
        sinopsis: "Descripción de producto 10",
        price: 12000,
        stock: 9,
        author: "Stephen King",
        category: "Terror"
    },
    {
        id: 11,
        name: "El códio Da Vinci",
        img: "../../books/elcodigodavinci.png",
        sinopsis: "Descripción de producto 11",
        price: 990,
        stock: 4,
        author: "Dan Brown",
        category: "Suspenso"
    },
    {
        id: 12,
        name: "La Comunidad del Anillo - El señor de los anillos I",
        img: "../../books/lacomunidad.png",
        sinopsis: "Descripción de producto 12",
        price: 1100,
        stock: 13,
        author: "J.R.R. Tolkien",
        category: "Fantasia"
    },
];

    const getFetchDetail = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(productDetail)
        }, 2000)
    })

    export default getFetchDetail

