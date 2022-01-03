import classes from './BasketProductItem.module.css'
import blackheart from '../images/black-heart.png';
import whiteheart from '../images/empty-heart.png'
import remove from '../images/remove.png'
import FavoriteContext from '../store/favorite-contex';
import React, { useContext } from 'react';

function BasketProductItem(props) {

    const favoriteCtx = useContext(FavoriteContext)
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)
    const itemInBasket = favoriteCtx.itemInBasket(props.id)

    function favoriteStatus() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id)
        }
        else {
            favoriteCtx.addFavorite({
                id: props.id,
                name: props.name,
                image: props.image,
                price: props.price
            })
        }
    }

    function removeFromBasket(){
        if (itemInBasket) {
            favoriteCtx.removeBasket(props.id)
        }
    }   
    return (
        <div className={classes.item}>
            <div className={classes.item_image}>
                <img src={props.image} alt="" className={classes.photo} />
            </div>
            <div className={classes.item_description}>
                <div className={classes.item_description_name}>
                    <p className={classes.name}>{props.name}</p>
                </div>
                <div className={classes.item_description_price}>
                    <p className={classes.price}>{props.price}</p>
                </div>
            </div>
            <div className={classes.item_buttons}>
                    <div className={classes.hearts} onClick={favoriteStatus}>
                        {itemIsFavorite ? <img src={blackheart} alt="" className={classes.black_heart} /> : <img src={whiteheart} alt="" className={classes.white_heart} />}
                    </div>
                    <div className={classes.item_description_basket}>
                        <img src={remove} className={classes.basket_button} onClick={removeFromBasket}/>
                    </div>
                   
            </div>
        </div>

    )
}

export default BasketProductItem;