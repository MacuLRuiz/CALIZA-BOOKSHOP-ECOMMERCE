import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import getFetchDetail from './getFetchDetail';


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})

    const {id} = useParams()

    useEffect(() => {
        getFetchDetail
        .then(response => {        
            setDetail(response.find(prod => prod.id === parseInt(id)))
        })
        .catch (error => alert("Error:", error))
    },[id])   

    return (
            <div className="itemDetail-container">
                <ItemDetail detail={detail}/>
            </div>
    )
}

export default ItemDetailContainer




