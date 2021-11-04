import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import getFetchDetail from './getFetchDetail';


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})

    const {productoId} = useParams()

    useEffect(() => {
        getFetchDetail
        .then(response => {        
            setDetail(response.find(prod => prod.id === parseInt(productoId)))
        })
        .catch (error => alert("Error:", error))
    },[productoId])   

    return (
            <div className="itemDetail-container">
                <ItemDetail detail={detail}/>
            </div>
    )
}

export default ItemDetailContainer




