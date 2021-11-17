import React from 'react'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail'
import { getFirestore } from "../getFirestore";
// import getFetch from '../getFetch';


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true);
    

    const {id} = useParams()

    useEffect(() => {
        //             getFetch 
        //             .then(response => {        
        //                 setDetail(response.find(prod => prod.id === parseInt(id)))
        //             })
        // .catch (error => alert("Error:", error))
        // .finally(()=> setLoading(false))


        const db = getFirestore();
		const dbQuery = db.collection("products").doc(id).get();
		dbQuery
			.then((resp) => setDetail({id: resp.id, ...resp.data()}))
			.catch((err) => alert(`Error: ${err}`))
			.finally(() => setLoading(false));


    },[id])   

    return (
            <>
                {   loading ? <h2> LOADING... </h2> 
                    : <div className="itemDetail-container">
                        <ItemDetail detail={detail}/>
                    </div>
                }
            </>
            
    )
}

export default ItemDetailContainer




