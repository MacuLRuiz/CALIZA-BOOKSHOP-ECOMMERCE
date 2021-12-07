import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { getFirestore } from '../../services/getFirestore';

export function ItemListContainer () {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

const { id } = useParams()

useEffect(() => {
    const db = getFirestore()

        const dataBaseFilter = 
            id
                ? db.collection("products").where("category", "==", id)
                : db.collection("products").orderBy("category")

        dataBaseFilter.get()
            .then(response => setProducts(response.docs.map(prod => ({id:prod.id, ...prod.data()}))))
            .catch (error => alert("Error:", error))
            .finally(()=> setLoading(false))
  
}, [id])

    return (
        <>  {
                loading ? 
                
                    <div className="loadingio-spinner-spinner-azwl2vh0tq8"><div className="ldio-3aj1p72vvt4">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div></div>

                : 

                    <div>
                        <div className= "items-container" >
                        <ItemList products={products}/>
                        </div>
                    </div>
            }
            
        </>
    )
}