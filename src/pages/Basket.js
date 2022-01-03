import FavoriteContext from '../store/favorite-contex';
import React, { useContext } from 'react';
import BasketProductList from '../products/BasketProductList';
import classes from './Basket.module.css';
import basketphoto from '../images/basket-gif.gif'
import { Link } from 'react-router-dom';

function Basket() {

    const favoriteCtx = useContext(FavoriteContext)
    const basket = favoriteCtx.basket

    const totalSum = basket.reduce((a, b) => Number(a) + Number(b.price), 0);

    return (
        <div>
            {basket.length === 0 ?
                <div className={classes.empty_basket}>
                    <div className={classes.empty_basket_photo}>
                        <img src={basketphoto} className={classes.empty_basket_heart} />
                    </div>
                    <div className={classes.empty_basket_title}>
                        <h2>You have no items in your shooping cart.</h2>
                    </div>
                    <div className={classes.empty_basket_text}>
                        <p>Thousands of items are waiting for you in Dresscode.</p>
                    </div>
                    <div className={classes.empty_basket_btn}>
                        <Link to="/"><button className={classes.start_shopping_btn}>START SHOPPING</button></Link>
                    </div>
                </div> :
                <div className={classes.basket_page}>
                    <div className={classes.basket_page_items}>
                        {basket.length < 2 ?
                            <p>Basket ({basket.length} Item)</p> :
                            <p>Basket ({basket.length} Items)</p>}
                        <BasketProductList products={basket} className={classes.basket_page_items_list} />
                    </div>
                    <div className={classes.basket_page_summarybox}>
                        <div className={classes.basket_page_summarybox_title}>
                            <h3>summary of orders</h3>
                        </div>
                        <div className={classes.basket_page_summarybox_totalarticles}>
                            <p>Total Articles</p>
                            <span>{totalSum.toFixed(2)} BGN</span>
                        </div>
                        <div className={classes.basket_page_summarybox_subtotal}>
                            <p>Subtotal</p>
                            <span>{totalSum.toFixed(2)} BGN</span>
                        </div>
                        <div className={classes.basket_page_summarybox_total}>
                            <p>Total</p>
                            <span>{totalSum.toFixed(2)} BGN</span>
                        </div>
                        <div className={classes.basket_page_summarybox_payment}>
                            <button>Continue to pay</button>
                        </div>
                    </div>
                </div>}

        </div>


    )
}

export default Basket;