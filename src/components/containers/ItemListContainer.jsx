
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
// import { getFetch } from "../getFetch";
import ItemList from "../ItemList";
import { getFirestore } from "../getFirestore";



export function ItemListContainer () {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

const { id } = useParams()

useEffect(() => {

    const db = getFirestore()
  
    // dbQuery
    // .then(res => setProducts(res.docs.map(prod =>( { id: prod.id, ...prod.data() } ))))

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
        
    

    
    // if(id) {
    //     getFetch
    //     .then(res => setProduct(res.filter(prod =>prod.category === id)))
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))

    // }   
    
    // else {
    //     getFetch
    //     .then(res => setProduct(res))
    //     .catch(err => console.log(err))
    //     .finally(()=> setLoading(false))
    // }  

}, [id])

console.log(products)
    return (
        <>  {

            loading ? <h2> LOADING... </h2> 
            : <div>
                <div className= "items-container" >
                <ItemList products={products}/>
                </div>
            </div>
        }
            
        </>

    )
    
    
}