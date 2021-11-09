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
                                    clear}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider