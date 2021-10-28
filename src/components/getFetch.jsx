const product = [
    {
        id: 1,
        name: "Harry Potter",
        img: "https://via.placeholder.com/200/023e8a/FFFFFF",
        description: "Descripción de producto 1",
        price: 1500,
        stock: 8
    },
    {
        id: 2,
        name: "Dune",
        img: "https://via.placeholder.com/200/0077b6/FFFFFF",
        description: "Descripción de producto 2",
        price: 1899,
        stock: 6
    },
    {
        id: 3,
        name: "Fuego y Sangre",
        pictureUrl: "https://via.placeholder.com/200/0096c7/FFFFFF",
        description: "Descripción de producto 3",
        price: 2459,
        stock: 7
    },
];


    export const getFetch = new Promise((res, rej) => {
        setTimeout(() => {
            res(product);
        }, 2000);
    })
    