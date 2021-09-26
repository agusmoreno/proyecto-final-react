import  Item  from "./Item";

const ItemList = ({items}) => {
    items = Array.from(items)
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default ItemList

   