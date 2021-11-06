import { prettyDOM } from '@testing-library/dom'
import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({detail}) => {
    return (
        <div class="itemDetail">
            <div class="imgContainer">
                <img src= {detail.img} alt="" />
            </div>
            <div class="itemDetailDescription-container">
                <h4>
                    {detail.name}
                </h4>
                <div class="itemDetailDescription1">
                    <div >
                        <span class="subtitle">Autor:</span> {detail.author}
                    </div>
                    <div>
                        <span class="subtitle">Género:</span> {detail.category}
                    </div>
        
                    <div>
                        <span class="subtitle">Precio: </span> ${detail.price} 
                    </div>

                </div>
                

                <div class="itemDetailDescription2">
                    <div class="subtitle">
                        Sinopsis:
                    </div>
                    <div class="sinopsis">
                        {detail.sinopsis}
                    </div>
                    <div class="subtitle">
                        Seleccionar cantidad:
                    </div>
                    <div className="ItemCountDetail">
                        <ItemCount stock={detail.stock} />
                    </div>
                    
                    <button class="buttonDetail_add">
                        Comprar
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ItemDetail