const product = [
    {
        id: 1,
        name: "Harry Potter",
        img: "../../books/harrypotter.png",
        description: "Descripción de producto 1",
        price: 1500,
        stock: 8,
        author: "J.K Rouling",
        categoria: "Fantasia"
    },
    {
        id: 2,
        name: "Dune",
        img: "../../books/dune.png",
        description: "Descripción de producto 2",
        price: 1899,
        stock: 6,
        author: "Frank Herbert",
        categoria: "Ciencia Ficcion"
    },
    {
        id: 3,
        name: "Fuego y Sangre",
        img: "../../books/fireandblood.png",
        description: "Descripción de producto 3",
        price: 2459,
        stock: 7,
        author: "George R.R. Martin",
        categoria: "Fantasia"
    },
];


    export const getFetchDetail = new Promise((res, rej) => {
        setTimeout(() => {
            res(product);
        }, 2000);
    })
    

