import React, { useState } from "react";
 
 function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(initial);
    const onAdd = () => {
        setCount(count + 1)
        alert(`Agregaste ${count + 1} al carrito`)
    }
     return (
         <div>
             <button disabled= {count === stock} onClick={onAdd}>
                +
            </button>
            <p> {count} </p>
            <button disabled= {count === initial} onClick={() => setCount(count - 1)}>
                -
            </button>

         </div>
     )
 }
 
 export default ItemCount
 
 
