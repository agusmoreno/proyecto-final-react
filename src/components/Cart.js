import React, { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { Link } from 'react-router-dom'
import Modal from './Modal'

const Cart = () => {
    const [showModal, setShowModal] = useState(false);
    const { items, deleteItems, total, deleteItem } = useCartContext()
    console.log("items=", items)
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
                <button onClick={() => setShowModal(true)}>Finish Order</button>
                <Modal show={showModal} onHide={() => setShowModal(false)}/>
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