import ProductItem from './ProductItem'
import classes from './ProductList.module.css'

function ProductList(props) {
    return (
        <div  className={classes.items}>
            {props.products.map(product => <ProductItem id={product.id} name={product.name} type={product.type}
                image={product.image} price={product.price} quantity={product.quantity}/>)}
        </div>
    )
}

export default ProductList;