import { Link } from 'react-router-dom';
import React from 'react';
import ItemCount from './ItemCount';

const Item = ({prod}) => {

    return (
        <div className="item">
            <div class="img-container">
                <img src={prod.img} alt={prod.name} />
            </div>
            <h3 class="title">{prod.name}</h3>
            <p class="description">{prod.description}</p>
            <span class="price">${prod.price}</span>
            <ItemCount stock={prod.stock} />
            
            <Link to={`/item/${prod.id}`}>
                <button class="button_add">
                    Ver más
                </button>
            </Link>
        </div>
    )
}

export default Item