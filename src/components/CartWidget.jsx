import React from "react"
import { UseCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cartList, itemsQuantity } = UseCartContext()


    return <div className='CartWidget'>

        {cartList.length 

            ?   <div>
                    <Link to="/Cart"> <img className="icon" src= "../../shopping-cart.svg" alt="shoppingcart"/> </Link> 
                    {itemsQuantity()}
                </div>

            : <div></div>
        
        
        }
        
        
        
    </div>
        


}

export default CartWidget