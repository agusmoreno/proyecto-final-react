import { Cart3 } from 'react-bootstrap-icons';
import { useCartContext } from "../context/CartContext"

export default function App() {
  const { items } = useCartContext()
  return (
    <div>
    <Cart3 />
    <p>{items.reduce((acum, value)=>(acum + (value.quantity)), 0)}</p>
    </div>
  )
}