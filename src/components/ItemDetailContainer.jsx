import React from 'react'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import {getFetchOne} from '../components/getFetch';

const ItemDetailContainer = () => {

    const [prod, setProd] = useState({});
    const [loading, setLoading] = useState(true);
    
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
