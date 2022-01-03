import FavoriteContext from '../store/favorite-contex';
import React, { useContext } from 'react';
import FavoriteProductList from '../products/FavoriteProductList';
import classes from './Favorite.module.css';
import favoritephoto from '../images/preview.gif'
import { Link } from 'react-router-dom';

function Favorite() {

    const favoriteCtx = useContext(FavoriteContext)
    const favorite = favoriteCtx.favorite


    return (
        <div>
            {favorite.length === 0 ?
                <div className={classes.empty_favorite}>
                    <div className={classes.empty_favorite_photo}>
                        <img src={favoritephoto} className={classes.empty_favorite_heart} />
                    </div>
                    <div className={classes.empty_favorite_title}>
                        <h2>There are no items in your wish list.</h2>
                    </div>
                    <div className={classes.empty_favorite_text}>
                        <p>You haven't added any items to your wish list yet; all you have to do is click on the little heart icon on the items.</p>
                    </div>
                    <div className={classes.empty_favorite_btn}>
                        <Link to="/"><button className={classes.start_shopping_btn}>START SHOPPING</button></Link>
                    </div>
                </div> :
                <div className={classes.favorite_page}>
                    <div className={classes.favorite_page_title}>
                        {favorite.length < 2 ?
                            <p>Favorites ({favorite.length} Item)</p> :
                            <p>Favorites ({favorite.length} Items)</p>}
                    </div>
                    <FavoriteProductList products={favorite} />
                </div>}
        </div>

    )
}

export default Favorite;