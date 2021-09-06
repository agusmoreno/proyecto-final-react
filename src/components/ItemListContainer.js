import React from 'react'
import ItemCount from "./ItemCount";
// import Item from "./Item"
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {

    return (
        <div>
        <h1> {greeting}</h1>
        <ItemCount stock={5} initial={0} />
        <ItemList />
        
        </div>

    )

}

export default ItemListContainer