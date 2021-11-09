import { Link } from 'react-router-dom';
import React from 'react';


const Item = ({prod}) => {

    return (
        <div className="item">
            <div className="img-container">
                <img src={prod.img} alt={prod.name} />
            </div>
            <h3 className="title">{prod.name}</h3>
            <p className="description">{prod.description}</p>
            <span className="price">${prod.price}</span>
            {/* <ItemCount stock={prod.stock} /> */}
            
            <Link to={`/item/${prod.id}`}>
                <button className="button_add">
                    Ver más
                </button>
            </Link>
        </div>
    )
}

export default Item