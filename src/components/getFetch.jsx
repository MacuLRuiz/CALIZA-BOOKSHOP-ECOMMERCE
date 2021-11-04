const product = [
    {
        id: 1,
        name: "Harry Potter",
        img: "../../books/harrypotter.png",
        description: "Descripción de producto 1",
        price: 1500,
        stock: 8,
        author: "J.K Rouling",
        category: "Fantasia"
    },
    {
        id: 2,
        name: "Dune",
        img: "../../books/dune.png",
        description: "Descripción de producto 2",
        price: 1899,
        stock: 6,
        author: "Frank Herbert",
        category: "Ciencia Ficcion"
    },
    {
        id: 3,
        name: "Fuego y Sangre",
        img: "../../books/fireandblood.png",
        description: "Descripción de producto 3",
        price: 2459,
        stock: 7,
        author: "George R.R. Martin",
        category: "Fantasia"
    },
    {
        id: 4,
        name: "Lo que dicen tus ojos",
        img: "../../books/loquedicentusojos.png",
        description: "Descripción de producto 4",
        price: 1659,
        stock: 8,
        author: "Florencia Bonelli",
        category: "Romantica"
    },
    {
        id: 5,
        name: "1984",
        img: "../../books/1984.png",
        description: "Descripción de producto 5",
        price: 2000,
        stock: 5,
        author: "George Orwell",
        category: "Ciencia Ficcion"
    },
    {
        id: 6,
        name: "Jane Austen: La coleccion",
        img: "../../books/janeausten.png",
        description: "Descripción de producto 5",
        price: 12000,
        stock: 5,
        author: "Jane Austen",
        category: "Romantica"
    },

];


    export const getFetch = new Promise((res, rej) => {
        setTimeout(() => {
            res(product);
        }, 2000);
    })
    
