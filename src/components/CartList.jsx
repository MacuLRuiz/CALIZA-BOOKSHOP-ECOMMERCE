import {UseCartContext} from "../context/CartContext";
import {Link} from "react-router-dom";

const CartList = ({handleShow}) => {
	const { cartList, precioTotal, precioProductoTotal, clear, removeItem } = UseCartContext()

	return (
		<>
			{cartList.length
                    ?  <div className='carrito'>

                            <table className="tftable" border="1">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nombre</th>
                                        <th>Cantidad</th>
                                        <th>Precio unitario</th>
                                        <th>Precio total de producto</th>
                                        <th>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {cartList.map((prod)=> (
                        
                                        <tr key={prod.id}>
                                            
                                            <td><img src={prod.detail.img} alt="producto"/></td>
                                            <td>{prod.detail.name}</td>
                                            <td>{prod.quantity}</td>
                                            <td>${prod.detail.price}</td>
                                            <td>${precioProductoTotal(prod.detail.price, prod.quantity)}</td>
                                            <td>
                                                <button className="buttonCart" onClick = {() => removeItem(prod.detail.id)}>Eliminar Item</button>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                                <tfoot>
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
                                </tfoot>
                            </table>

                            <div>
                                <button className="buttonBack" onClick={()=> clear()}>Borrar carrito</button>
                            </div>

                            
                            <button className="buttonDetail_add" onClick={() => {handleShow();}}>
                                Comprar
                            </button>
                    
        
                              </div>
                              



                        
                    :   <div className='carrito'>
                            <h2 className="">El carrito está vacío</h2>
                            <Link className="buttonDetail_add" to="/"> Voler al inicio</Link>
                        </div>

                 }
            
		</>
	);
}

export default CartList;