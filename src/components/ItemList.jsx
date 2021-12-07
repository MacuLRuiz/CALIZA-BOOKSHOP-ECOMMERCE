import Item from './Item';

const ItemList = ({products}) => {

return (
    products.map(prod=> <Item  key={prod.id} prod={prod}/>
                
                )
    )
}

export default ItemList