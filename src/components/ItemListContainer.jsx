import React from "react";
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import { getFetch } from "./getFetch";
import ItemList from "./ItemList";



export function ItemListContainer () {

const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

const { id } = useParams()

useEffect(() => {
    
    if(id) {
        getFetch
        .then(res => setProduct(res.filter(prod =>prod.categoria === id)))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    }   
    
    else {
        getFetch
        .then(res => setProduct(res))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }   
}, [id])

console.log(product)
    return (
        <>
            <div class= "items-container" >
                <ItemList product={product}/>
            </div>
        </>

    )
    
    
}