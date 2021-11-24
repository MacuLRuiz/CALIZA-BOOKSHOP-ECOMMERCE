
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { getFirestore } from "../getFirestore";



export function ItemListContainer () {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

const { id } = useParams()

useEffect(() => {

    const db = getFirestore()
  
   
        if(id) {
            const dbQuery = db.collection("products").where("category", "==", id).get()

            dbQuery
            .then(res => setProducts(res.docs.map(prod =>( { id: prod.id, ...prod.data() } ))))
            .catch((err) => alert(`Error: ${err}`))
            .finally(() => setLoading(false));
        }

        else {
            const dbQuery = db.collection("products").orderBy("category").get()
            dbQuery
            .then(res => setProducts(res.docs.map(prod =>( { id: prod.id, ...prod.data() } ))))
            .catch((err) => alert(`Error: ${err}`))
            .finally(() => setLoading(false));
        }
        

}, [id])


    return (
        <>  {

            loading ? 
            
                // <h2> LOADING... </h2> 
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