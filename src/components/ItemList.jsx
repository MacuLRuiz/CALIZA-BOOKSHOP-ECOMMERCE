
import Item from './Item';
// import Loader from "../Loader/Loader";


const ItemList = ({products}) => {

console.log(products)

return (
    products.map(prod=> <Item  key={prod.id} prod={prod}/>
                
                )
    )
}

export default ItemList