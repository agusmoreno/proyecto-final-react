
import { useEffect, useState } from "react";
import  Item  from "./Item";


function getItems() {
    return [   {
        id: 1,
        title: "Aloe vera & neem hair cleanser (200ml)",
        price: 100,
        pictureUrl: "https://www.ayurvedabay.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/f/o/forest-essentials-aloe-vera-_-neem-hair-cleanser.jpg"
    },
    {
        id: 2,
        title: "Aloe vera & neem hair conditioner (200ml)",
        price: 150,
        pictureUrl: "https://mliucwkxxnyr.i.optimole.com/B5ND7_w-ptHCS-wA/w:auto/h:auto/q:auto/https://jolpari.com/wp-content/uploads/2021/03/AVNHC200ml_aloeveraneemconditioner1.jpg"
    },
    {
        id: 3,
        title: "Hair vitalizer bhringraj (130ml)",
        price: 200,
        pictureUrl: "https://m.media-amazon.com/images/I/612eEAWy9yL._SL1500_.jpg"
    }
    ]
    
}
let itemsPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(getItems());        
    }, 2000);
});

const ItemList = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        itemsPromise.then((result)=>  setItems(result))     
    }, [])

    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default ItemList

   