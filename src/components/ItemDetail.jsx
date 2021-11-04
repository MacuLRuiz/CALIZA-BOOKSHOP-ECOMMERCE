import { prettyDOM } from '@testing-library/dom'
import React from 'react'

const ItemDetail = ({Prod}) => {
    return (
        <div class="itemDetail">
            <div class="imgContainer">
                <img src={Prod.img} alt="" />
            </div>

            <div class="itemDetailDescription">
                <h4>
                    {Prod.name}
                </h4>
                <div>
                    Precio: ${Prod.price}
                </div>
                <div>
                    Autor: {Prod.author}
                </div>
                <div>
                    Categoría: {Prod.categoria}
                </div>
                <div>
                    {Prod.description}
                </div>
                <button class="buttonDetail_add">
                Comprar
            </button>
            </div>
        </div>
    )
}

export default ItemDetail
