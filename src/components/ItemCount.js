import React, { useState } from "react";
 
 function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(initial);
     return (
         <div>
             <button disabled= {count === stock} onClick={() => setCount(count + 1)}>
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
 
 
