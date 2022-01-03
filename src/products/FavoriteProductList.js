import FavoriteProductItem from './FavoriteProductItem'
import classes from './FavoriteProductList.module.css'

function FavoriteProductList(props) {
    return (
        <div  className={classes.items}>
            {props.products.map(product => <FavoriteProductItem id={product.id} name={product.name} type={product.type}
                image={product.image} price={product.price} />)}
        </div>
    )
}

export default FavoriteProductList;