import { createContext, useState, useContext } from "react";

export const CartContext = createContext()
export const UseCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

    function addItem (itemAdded) {

        const findItemid = cartList.find(itemCart => itemCart.detail.id === itemAdded.detail.id)
        
        if (findItemid) {
            findItemid.quantity = findItemid.quantity + itemAdded.quantity
            setCartList(cartList)
        }
        else {
            setCartList([...cartList, itemAdded])
        }
        
    }

    const precioTotal = () => {

        return cartList.reduce((acum, prod) => acum + (prod.quantity * prod.detail.price), 0)
    }

    const precioProductoTotal = (prod, cant) => {

        return (prod * cant)
    }


    function removeItem(itemId) {
        setCartList(
            cartList.filter(item => item.detail.id !== itemId)
        )
    }


    function clear() {
        setCartList([])
    }


    return (
        <CartContext.Provider value={{cartList,
                                     addItem,
                                    removeItem, 
                                    clear,
                                    precioTotal,
                                    precioProductoTotal}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider