import React from "react";
import { UseCartContext } from "../context/CartContext";
import UserForm from "./UserForm";
import { useState } from 'react';
import firebase from "firebase";
import { getFirestore } from './getFirestore';
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartList, precioTotal, precioProductoTotal, clear, removeItem } = UseCartContext()


    console.log(cartList)
    console.log(precioTotal())

    const [orderId, setOrderId] = useState("");
    const [buyerForm, setBuyerForm] = useState({name:"", surname:"", phone:"", email:"", provincia:"", localidad:"", adress:""});
   
    function handleChange(e) {
		setBuyerForm({
			...buyerForm,
			[e.target.name]: e.target.value,
		});
	}

    const generateOrder = (e) => {

        e.preventDefault()

        let order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = buyerForm;
        order.total = precioTotal();
        order.items = cartList.map(prod => {
            const id = prod.detail.id;
            const name = prod.detail.name;
            const subtotal = precioProductoTotal(prod.detail.price, prod.quantity);
            return {id, name, subtotal}
        })

        const dataBase = getFirestore()

        dataBase.collection("orders").add(order)
        .then(response => setOrderId(response.id))
        .catch (error => alert("Error:", error))
        .finally(() => clear())

        const updateStock = dataBase.collection("products").where
        (firebase.firestore.FieldPath.documentId(), "in", cartList.map(idToUpdate => idToUpdate.detail.id))

        const batch = dataBase.batch();

        updateStock.get()
        .then(response => {
            response.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - cartList.find(idToUpdate => idToUpdate.detail.id === docSnapshot.id).quantity
                })
            })
        
        batch.commit()
        .catch (error => alert("Error:", error))
        })
    }




        return (
            <div className='carrito'>
                <h1>Carrito de compras</h1>


                {cartList.length
                    ?  <div className='carrito'>

                            <table class="tftable" border="1">
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                                <th>Precio total de producto</th>
                                <th>
                                </th>
                            </tr>
                            {cartList.map(prod=> 
                            <tr>
                                
                                <td><img src={prod.detail.img} alt="producto"/></td>
                                <td>{prod.detail.name}</td>
                                <td>{prod.quantity}</td>
                                <td>${prod.detail.price}</td>
                                <td>${precioProductoTotal(prod.detail.price, prod.quantity)}</td>
                                <td>
                                    <button className="buttonCart" onClick = {() => removeItem(prod.detail.id)}>Eliminar Item</button>
                                </td>
                                
                            </tr>
                            )}
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                    PRECIO TOTAL
                                </th>
                                <th>
                                    ${precioTotal()}
                                </th>
                                <th></th>

                            </tr>
                            </table>

                            <div>
                                <button className="buttonDetail_add" onClick={()=> clear()}>Borrar carrito</button>
                            </div>

                            {/* <Link to='/BuyerForm'>
                                <button className="buttonDetail_add" >COMPRAR</button>
                            </Link> */}
                            
                            <UserForm 
                                buyerForm={buyerForm}
                                generateOrder={generateOrder}
                                handleChange={handleChange} 
                                />
        
                              </div>

                        
                    :   <div className='carrito'>
                            <h2 className="">El carrito está vacío</h2>
                            <Link className="buttonDetail_add" to="/"> Voler al inicio</Link>
                        </div>

                 }
            

                
            </div>

            
        )

}

export default Cart
