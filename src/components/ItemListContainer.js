import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ItemCount from "./ItemCount";
import ItemList from "./ItemList"
import { getFirestore } from '../firebase/getFirebase';

const ItemListContainer = ({ greeting }) => {
    const itemsList = [{
        id: 1,
        category: "hairCare",
        title: "Aloe vera & neem hair cleanser (200ml)",
        price: 100,
        pictureUrl: "https://www.ayurvedabay.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/f/o/forest-essentials-aloe-vera-_-neem-hair-cleanser.jpg"
    },
    {
        id: 2,
        category: "hairCare",
        title: "Aloe vera & neem hair conditioner (200ml)",
        price: 150,
        pictureUrl: "https://mliucwkxxnyr.i.optimole.com/B5ND7_w-ptHCS-wA/w:auto/h:auto/q:auto/https://jolpari.com/wp-content/uploads/2021/03/AVNHC200ml_aloeveraneemconditioner1.jpg"
    },
    {
        id: 3,
        category: "hairCare",
        title: "Hair vitalizer bhringraj (130ml)",
        price: 200,
        pictureUrl: "https://m.media-amazon.com/images/I/612eEAWy9yL._SL1500_.jpg"
    },
    {
        id: 4,
        category: "facialCare",
        title: "Hair vitalizer bhringraj (130ml)",
        price: 200,
        pictureUrl: "https://cdn.forestessentialsindia.com/pub/media/catalog/product/9/7/9772_face_wash_sandalwood_orange_peel_200ml_fornt1.png"
    }
    ]

    const { category } = useParams()
    const [items, setItems] = useState([]);
    useEffect(() => {

        let db = getFirestore()
        let itemCollection = db.collection('items')
        const dbQuery = categoryId ?  itemCollection.where('categoryId', '==', categoryId) : itemCollection
        dbQuery.get().then(resp => {
            if (resp.size === 0) {
                console.log('No Result!!')
            }
            setItems(resp.docs.map(item=> ({id: item.id, ...item.data()}) ))
        })
        .catch((error) => {
            console.log("Error searching items", error)
        }).finally(() => {
            setLoading(false)
        })








    console.log(items)


    return (
        <div>
            <h1> {greeting}</h1>
            <ItemList items={items} />
        </div>

    )

}

export default ItemListContainer