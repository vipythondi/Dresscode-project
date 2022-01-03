import classes from './ProductItem.module.css'
import blackheart from '../images/black-heart.png';
import whiteheart from '../images/empty-heart.png'
import FavoriteContext from '../store/favorite-contex';
import React, {useContext} from 'react';

function ProductItem(props) {

    const favoriteCtx =  useContext(FavoriteContext)
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)

    function favotiteStatus(){
        if(itemIsFavorite){
            favoriteCtx.removeFavorite(props.id)
        }
        else{
            favoriteCtx.addFavorite({
                id: props.id,
                name: props.name,
                image: props.image,
                quantity: props.quantity,
                price: props.price
            })
        }
    }
    return (
        <div className={classes.item}>
            <div className={classes.item_image}>
                <img src={props.image} alt="" className={classes.photo} />
                <div className={classes.hearts} onClick={favotiteStatus}>
                    {itemIsFavorite ? <img src={blackheart} alt="" className={classes.black_heart} />  :  <img src={whiteheart} alt="" className={classes.white_heart} />}
                </div>
            </div>
             <div className={classes.item_description}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.price}>{props.price}</p>
            </div>
        </div>

    )
}

export default ProductItem;