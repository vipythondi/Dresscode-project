import BasketProductItem from './BasketProductItem'
import classes from './BasketProductList.module.css'

function BasketProductList(props) {
    return (
        <div  className={classes.items}>
            {props.products.map(product => <BasketProductItem id={product.id} name={product.name} type={product.type}
                image={product.image} price={product.price} quantity={product.quantity}/>)}
        </div>
    )
}

export default BasketProductList;