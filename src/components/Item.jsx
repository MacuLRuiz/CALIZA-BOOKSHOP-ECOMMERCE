import React from 'react';
import ItemCount from './ItemCount';

const Item = ({prod}) => {

    return (
        <div className="item">
            <div class="img-container">
                <img src={prod.img} alt={prod.name} />
            </div>
            <h4 class="title">{prod.name}</h4>
            <p class="description">{prod.description}</p>
            <span class="price">${prod.price}</span>
            <ItemCount stock={prod.stock} />
            <button class="button_add">
                agregar al carrito
            </button>
        </div>
    )
}

export default Item