import '../comp/Header.module.css'
import classes from '../comp/Header.module.css'
import basket from '../../src/images/shopping-bag.png'
import heart from '../../src/images/empty-heart.png'
import menu from '../../src/images/menu.png'
import cancel from '../../src/images/letter-x.png'
import { Link } from 'react-router-dom';
import FavoriteContext from '../store/favorite-contex';
import React, { useState, useContext } from 'react';

function Header() {

    const favoriteCtx = useContext(FavoriteContext)
    const baskets = favoriteCtx.basket

    const [menuStatus, SetMenuStatus] = useState(false)
    function changeMenuStatus(){
        if(menuStatus){
            SetMenuStatus(false)
        }
        else{
            SetMenuStatus(true)
        }
    }

    const cancelMenu = () => SetMenuStatus(false)

    return (
        <header className={classes.header}>
            <div className={classes.header_upper}>
                <div className={classes.header_upper_hamburger} onClick={changeMenuStatus}>
                    {menuStatus ? <img src={cancel} className={classes.cancel}/> :  <img src={menu} className={classes.menu} />}
                </div>
                <div className={classes.header_upper_logo}>
                    <Link className={classes.logo} to="/" onClick={cancelMenu}>Dresscode</Link>
                </div>
                <div className={classes.header_upper_icons}>
                    <Link to="/favorite"><img src={heart} className={classes.icon} onClick={cancelMenu}/></Link>
                    <Link to="/basket"><img src={basket} className={classes.icon} onClick={cancelMenu}/></Link>
                </div>
            </div>
            <ul className={classes.header_lower}>
                <Link to="/women" className={classes.header_lower_links}>women</Link>
                <Link to="/men" className={classes.header_lower_links}>men</Link>
                <Link to="/children" className={classes.header_lower_links}>children</Link>
                <Link to="/baby" className={classes.header_lower_links}>baby</Link>
            </ul>
            <div className={classes.basket_counter}>
                <Link to="/basket" className={classes.basket_counter_link}>{baskets.length}</Link>
            </div>
            {menuStatus ?  <ul className={classes.header_mobile_menu}>
                <Link to="/women" className={classes.header_mobile_menu_link} onClick={cancelMenu}>women</Link>
                <Link to="/men" className={classes.header_mobile_menu_link} onClick={cancelMenu}>men</Link>
                <Link to="/children" className={classes.header_mobile_menu_link} onClick={cancelMenu}>children</Link>
                <Link to="/baby" className={classes.header_mobile_menu_link} onClick={cancelMenu}>baby</Link>
            </ul>: ""}
           
        </header>
    )

}

export default Header;