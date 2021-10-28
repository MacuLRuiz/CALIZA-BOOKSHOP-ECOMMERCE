import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "./getFetch";
import ItemList from "./ItemList";



export function ItemListContainer ({ greeting }) {

const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
getFetch
.then(res => setProduct(res))
.catch(err => console.log(err))
.finally(()=> setLoading(false))
}, [])

console.log(product)
    return (
        <div class= "items-container" >
            <h1> {greeting}</h1>;
            <ItemList product={product}/>
        </div>

    )
    
    
}