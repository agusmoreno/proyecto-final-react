import React, {useState, useContext} from 'react'
import Modal from "react-bootstrap/Modal"
import { getFirestore } from "../firebase/getFirebase"
import { useCartContext } from "../context/CartContext"


const ModalOrder = (props) => {
    
    const { items, deleteItems, total } = useCartContext()
    
const [name, setName] = useState("");
const [phone, setPhone] = useState("")
const [email, setEmail] = useState("")    
const [idOrder, setIdOrder] = useState(null) 
   
    const generateOrder = (e) => {
            e.preventDefault()
            const buyer = { name, phone, email}
            const db = getFirestore();
            const ordersCollection = db.collection("orders")

            let order = {};
            order.date = new Date()
            order.buyer = {buyer}
            order.total = total()
            order.items = items.map((item) => {
                const id = item.item.id;
                const title = item.item.title
                return {id, title}
            })
            console.log("orderr" , order)
            ordersCollection.add(order)
            .then((IdDocument) => {
                setIdOrder(IdDocument.id)
            })
console.log('idOrder', idOrder);

    }

    return (

        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese los datos para generar su orden de compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={generateOrder} >
                        <label>Name:</label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Email:</label>
                        <input
                            value={email}
                            type="text"
                             onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Phone Number:</label>
                        <input
                            value={phone}
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button variant="outline-info" type="submit" className="mt-auto" >
                            Buy
                         </button>
                    </form>
                </fieldset>
            </Modal.Body>
            <Modal.Footer>
                <button variant="outline-info" type="submit" className="mt-auto" onClick={deleteItems}>
                    Close
              </button>
            </Modal.Footer>
            <small>{idOrder ? ` Su orden fue generada con el ID: ${idOrder}` : null}</small>
        </Modal>
    );
}

export default ModalOrder;