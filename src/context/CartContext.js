import {useState, createContext, useContext} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [items, setItems] = useState([])
   
    function addToCart(prod, quantity){
        setItems([...items, {item: prod, quantity: quantity}])
    }
    const deleteItem=(id)=>{
        console.log("id:" ,id)
        console.log("items", items)
      const filteredCart =  items.filter((item) => item.item.id !== id)
      console.log("filteredCart", filteredCart)

       setItems([...filteredCart])
    }
    const deleteItems=()=>{
        setItems([])
    }  
    const total =()=>{
        return items.reduce((acum, value)=>(acum + (value.quantity * value.item.price)), 0) 
      }
    console.log(items)
    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            deleteItem,
            deleteItems,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
