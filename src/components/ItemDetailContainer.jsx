import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import {getFetchOne} from '../components/getFetch';

const ItemDetailContainer = () => {

    const [prod, setProd] = useState({});
    const [loading, setLoading] = useState(true);

    const { productoId } = useParams()
    
    useEffect(() => {
    getFetchOne
    .then(res => {
        console.log("llamado a la API");    
        setProd(res)
    })
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    }, [])

    console.log (prod);

    return (
        <>
            <ItemDetail prod={prod}/>
        </>
    )
}

export default ItemDetailContainer
