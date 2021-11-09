
import React from 'react'
import { useState } from 'react';
import { UseCartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({detail}) => {

    const [counter, setCounter] = useState(1)

    const {cartList, addItem} = UseCartContext()

    const onAdd = (cant) => {
        setCounter (cant)
        addItem({detail, quantity: cant})

    }

    console.log(cartList)

    return (
        <div className="itemDetail">
            <div className="imgContainer">
                <img src= {detail.img} alt="" />
            </div>
            <div className="itemDetailDescription-container">
                <h4>
                    {detail.name}
                </h4>
                <div className="itemDetailDescription1">
                    <div >
                        <span className="subtitle">Autor:</span> {detail.author}
                    </div>
                    <div>
                        <span className="subtitle">Género:</span> {detail.category}
                    </div>
        
                    <div>
                        <span className="subtitle">Precio: </span> ${detail.price} 
                    </div>

                </div>
                

                <div class="itemDetailDescription2">
                    <div className="subtitle">
                        Sinopsis:
                    </div>
                    <div className="sinopsis">
                        {detail.sinopsis}
                    </div>
                    <div className="subtitle">
                        Seleccionar cantidad:
                    </div>
                    <div className="ItemCountDetail">
                        <ItemCount stock={detail.stock} onAdd={onAdd} />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default ItemDetail