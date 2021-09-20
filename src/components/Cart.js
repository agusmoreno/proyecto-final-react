import { useCartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
const Cart = () => {
    const { items, deleteItems, total, deleteItem } = useCartContext()
    return (
        <div>
            {(items.length > 0) && <div>
                {items.map(product => <div>
                    <p>{product.item.title}</p>
                    <p>{product.quantity}</p>
                    <button onClick={() => deleteItem(product.item.id)} >X</button>
                </div>
                )}
                <p> Total: {total()} </p>
                <button onClick={deleteItems} >Delete items on cart</button>
            </div>
            }

            {(items.length === 0) && <div>
                <p>Your cart is empty</p>
                <Link to='/'>
                <button>Click here to view our products</button>
                </Link>
            </div>
            }

        </div>
    )
}
export default Cart