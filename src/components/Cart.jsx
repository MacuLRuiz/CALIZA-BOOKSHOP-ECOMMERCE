import { UseCartContext } from "../context/CartContext";
import UserForm from "./UserForm";
import { useState } from 'react';
import firebase from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from '../services/getFirestore';
import { Link } from "react-router-dom";
import { Modal} from 'react-bootstrap';
import CartList from "./CartList";

const Cart = () => {

    const { cartList, precioTotal, precioProductoTotal, clear } = UseCartContext()
    
    // Operaciones para el funcionamiento del Modal
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <CartList handleShow={handleShow}/>
    
            <Modal show={show} onHide={handleClose}>
                {orderId === "" && (
                    <>
                        <Modal.Header closeButton>
                            <h2>Completá en formulario</h2>
                        </Modal.Header>
                        <Modal.Body>
                            <UserForm 
                                buyerForm={buyerForm} 
                                generateOrder={generateOrder} 
                                handleChange={handleChange} 
                            />
                        </Modal.Body>
                    </>  
                )}

                {orderId !== "" && (
                    <>
                        <Modal.Header closeButton>
                            <h2>¡Muchas gracias por su compra!</h2>
                        </Modal.Header>
                        <Modal.Body className="">
                            {`Su código de orden es: ${orderId}`}
                        </Modal.Body>
                        <Modal.Footer>
                            <Link to="/" className="buttonDetail_add" onClick={handleClose}>
                                Cerrar
                            </Link>
                        </Modal.Footer>                   
                    </>
                )}

            </Modal>               
        </div>
    )
}

export default Cart
