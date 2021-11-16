import React from "react";
import { UseCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cartList, precioTotal, precioProductoTotal, clear, removeItem } = UseCartContext()


    console.log(cartList)
    console.log(precioTotal())



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