import {useState, createContext, useContext} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [item, setItem] = useState([])
   
    function addToCart(prod, quantity){
        setItem([...item, {item: prod, quantity: quantity}])
    }
    console.log(item)
    return (
        <CartContext.Provider value={{
            item,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
