import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {getFetchDetail} from '../components/getFetchDetail';
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer () {

    const [Prod, setProd] = useState([]);
    const [loading, setLoading] = useState(true);

    const { productoId } = useParams()
    
    useEffect(() => {

    if (productoId) {
        getFetchDetail
        .then(res => {    
            setProd(res.filter(prod =>prod.id === productoId))
            console.log(res)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        

    }

    else {
        getFetchDetail
        .then(res => {
            console.log("llamado a la API");    
            setProd(res)
            console.log(res)
            // .filter(prod =>prod.id === productoId)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

        }
    
        }, [productoId])

    console.log (Prod);

    return (
        <>
            <ItemDetail Prod={Prod}/>
        </>
    )
}