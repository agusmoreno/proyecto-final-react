import {Link} from 'react-router-dom'
function Item({ item }) {
     return (
    <div>
        <img style={{maxHeight:"200px"}} src={item.pictureUrl} alt={item.title}/>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <Link to={`/item/${item.id}`}>
        <button className="btn btn-outline-primary">Details</button>
        </Link>

    </div>
    )
   } 
export default Item
   