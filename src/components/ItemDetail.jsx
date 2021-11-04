import { prettyDOM } from '@testing-library/dom'
import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({detail}) => {
    return (
        <div class="itemDetail">
            <div class="imgContainer">
                <img src= {detail.img} alt="" />
            </div>
            <div class="itemDetailDescription">
                <h4>
                    {detail.name}
                </h4>
                <div>
                    {detail.author}
                </div>
                <div>
                    {detail.categoria}
                </div>
                <div>
                    Precio: ${detail.price}
                </div>
                <div>
                    Sinopsis: {detail.sinopsis}
                </div>
                <div className="ItemCountDetail">
                    <ItemCount stock={detail.stock} />
                </div>
                
                <button class="buttonDetail_add">
                Comprar
            </button>
            </div>
        </div>
    )
}

export default ItemDetail