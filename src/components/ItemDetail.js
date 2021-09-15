import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'


function ItemDetail({ item }) {
    const [changeButton, setChangeButton] = useState(false)
    const {addToCart} = useCartContext()
    const onAdd = (quantity) => {
        addToCart(item, quantity)
        setChangeButton(true)
    }
    

    return (
        <div>
            <img style={{maxHeight:"200px"}} src={item.pictureUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <div>
                {
                    !changeButton &&
                    <ItemCount stock={5} initial={0} onAdd={onAdd} changeButton={changeButton} />}
                {
                    changeButton &&
                    <Link to='/cart'>
                        <button>Finish your order</button>
                    </Link>
                }
            </div>

        </div>
    )


}
export default ItemDetail
