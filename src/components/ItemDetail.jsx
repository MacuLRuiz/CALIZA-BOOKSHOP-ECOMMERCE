import { prettyDOM } from '@testing-library/dom'
import React from 'react'

const ItemDetail = ({prod}) => {
    return (
        <div class="itemDetail">
            <div class="imgContainer">
                <img src="../../books/harrypotter.png" alt="Harry Potter books" />
            </div>
            <div class="itemDetailDescription">
                <h4>
                    {prod.name}
                </h4>
                <div>
                    Precio: ${prod.price}
                </div>
                <div>
                    {prod.description}
                </div>
                <button class="buttonDetail_add">
                Comprar
            </button>
            </div>
        </div>
    )
}

export default ItemDetail
