import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import  ItemDetail  from "./ItemDetail"
import { getFirestore } from '../firebase/getFirebase'



    


const ItemDetailContainer = () => {
const { id } = useParams()

    const [item, setItem] = useState({});
    useEffect(() => {

        let db = getFirestore()
        let itemsCollection = db.collection('items')
        console.log("ID", id)
        const dbQuery = id ? itemsCollection.where('id', '==', parseInt(id)).limit(1) : itemsCollection
        dbQuery.get().then(resp => {
            console.log(resp)
        
            if (resp.size === 0) {
                console.log('No Result!!')
            } else { 
                console.log('hay')
            }
        
            const item = resp.docs[0]
            
            setItem(item.data())

        
        }).catch((error) => {
                console.log("Error searching items", error)
            })

    }, [id])
    console.log("item state ", item)
    /* useEffect(() => {
        itemsDetailPromise.then((result)=> { 
            console.log("RESULT ", result)
            console.log(typeof id)
            setItem(result.filter(item => item.id === parseInt(id))[0])})     
    }, [id]) */

    return (
        <div>
                <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
