import classes from './FavoriteProductItem.module.css'
import blackheart from '../images/black-heart.png';
import whiteheart from '../images/empty-heart.png'
import FavoriteContext from '../store/favorite-contex';
import React, { useContext } from 'react';

function FavoriteProductItem(props) {

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

    function basketStatus() {
        if (itemInBasket) {
            favoriteCtx.removeBasket(props.id)
        }
        else {
            favoriteCtx.addBasket({
                id: props.id,
                name: props.name,
                image: props.image,
                quantity: 5,
                price: props.price
            })
        }
    }
    return (
        <div className={classes.item}>
            <div className={classes.item_image}>
                <img src={props.image} alt="" className={classes.photo} />
                <div className={classes.hearts} onClick={favoriteStatus}>
                    {itemIsFavorite ? <img src={blackheart} alt="" className={classes.black_heart} /> : <img src={whiteheart} alt="" className={classes.white_heart} />}
                </div>
            </div>
            <div className={classes.item_description}>
                <div className={classes.item_description_text}>
                    <p className={classes.name}>{props.name}</p>
                    <p className={classes.price}>{props.price}</p>
                </div>
                <div className={classes.item_description_button}>
                    <button onClick={basketStatus} className={classes.basket_button}>{itemInBasket ? "Remove from basket" : "Add to basket"}</button>
                </div>
            </div>

        </div>

    )
}

export default FavoriteProductItem;