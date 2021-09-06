function Item({ item }) {
     return (
    <div>
        <img src={item.pictureUrl} alt={item.title}/>
        <h3>{item.title}</h3>
        <p>{item.price}</p>

    </div>
    )
   } 
export default Item
   