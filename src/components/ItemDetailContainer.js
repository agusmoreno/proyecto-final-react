import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import  ItemDetail  from "./ItemDetail";


const itemsDetails = [
        {
            id: 1,
            title: "Aloe vera & neem hair cleanser (200ml)",
            price: 100,
            description: "WITH REGULAR USE, THE HAIR IS LEFT SOFTER, MORE LUSTROUS AND STRONGER FROM THE ROOTS.",
            stock: 5,
            pictureUrl: "https://www.ayurvedabay.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/f/o/forest-essentials-aloe-vera-_-neem-hair-cleanser.jpg"
        },
        {
            id: 2,
            title: "Aloe vera & neem hair conditioner (200ml)",
            price: 150,
            description: "EXCELLENT BLEND FOR SOFTENING AND NOURISHING THE HAIR.",
            stock: 5,
            pictureUrl: "https://mliucwkxxnyr.i.optimole.com/B5ND7_w-ptHCS-wA/w:auto/h:auto/q:auto/https://jolpari.com/wp-content/uploads/2021/03/AVNHC200ml_aloeveraneemconditioner1.jpg"
        },
        {
            id: 3,
            title: "Hair vitalizer bhringraj (130ml)",
            price: 200,
            description: "ANTI-BREAKAGE BENEFITS AND STRENGTHEN HAIR FOLLICLES.",
            stock: 5,
            pictureUrl: "https://m.media-amazon.com/images/I/612eEAWy9yL._SL1500_.jpg"
        },
        {
            id: 4,
            title: "Facial cleanser sandalwood & orange peel (200ml)",
            price: 200,
            description: "The Forest Essentials Facial Cleanser Sandalwood & Orange Peel is enriched with a fresh infusion of antioxidant rich ingredients including Nagkesar, Orange Peel, Basil, and hydrating Coconut Water, which is one of the purest, natural moisturizers. Together, they gently cleanse the skin by removing excess sebum and impurities. The skin is left perfectly matte, clear and fresh.",
            stock: 5,
            pictureUrl: "https://cdn.forestessentialsindia.com/pub/media/catalog/product/9/7/9772_face_wash_sandalwood_orange_peel_200ml_fornt1.png" 
        }
    ]
    
let itemsDetailPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(getItemsDetails());        
    }, 2000);
});
function getItemsDetails() {
    return itemsDetails
    
}

const ItemDetailContainer = () => {
    const { id } = useParams()

    const [item, setItem] = useState([]);
    useEffect(() => {
        itemsDetailPromise.then((result)=> { 
            console.log("RESULT ", result)
            console.log(typeof id)
            setItem(result.filter(item => item.id === parseInt(id))[0])})     
    }, [id])

    return (
        <div>
                <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
