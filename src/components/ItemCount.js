import React, { useState } from "react";


 
const ItemCount = ({initial, stock, onAdd, changeButton}) => {
    const [count, setCount] = useState(initial)


    const handlerAdd =()=>{
        setCount(count +1)        
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
        
    }


     return (
         <div>
             <button onClick={handlerAdd}>
                +
            </button>
            <p> {count} </p>
            <button onClick={handlerRm}>
                -
            </button>
            {
                !changeButton && <button  onClick={handlerOnAdd}>Add</button>
            }  


         </div>
     )
 }
 
 export default ItemCount
 
 
