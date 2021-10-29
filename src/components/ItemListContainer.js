import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import { getFirestore } from '../firebase/getFirebase'


const ItemListContainer = ({ greeting }) => {


    const [items, setItems] = useState({})
    const { category } = useParams()

    useEffect(() => {

        let db = getFirestore()
        let itmesCollection = db.collection('items')
        const dbQuery = category ? itmesCollection.where('category', '==', category) : itmesCollection
        dbQuery.get().then(resp => {
            if (resp.size === 0) {
                console.log('No Result!!')
            }
            setItems(resp.docs.map(item => ({ id: item.id, ...item.data() })))
        })
            .catch((error) => {
                console.log("Error searching items", error)
            })

    }, [category])


    console.log(items)


    return (
        <div>
            <h1> {greeting}</h1>
            <ItemList items={items} />

        </div>

    )

}

export default ItemListContainer