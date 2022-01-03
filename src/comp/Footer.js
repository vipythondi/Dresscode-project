import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import pinterest from '../images/pinterest.svg';
import {Link} from 'react-router-dom';
import classes from '../comp/Footer.module.css'

function Footer(){
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_logo}>
                <Link className={classes.logo} to="/">Dresscode</Link>
            </div>
            <div className={classes.footer_navbar}>
                <ul className={classes.navbar}>
                    <li>About us</li>
                    <li>Corporate</li>
                    <li>Support</li>
                    <li>Policies</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className={classes.footer_icons}>
                <a href="https://www.facebook.com/" target="_blank"><img src={facebook} className={classes.icon}/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram} className={classes.icon}/></a>
                <a href="https://www.pinterest.com/" target="_blank"><img src={pinterest} className={classes.icon}/></a>
                <a href="https://www.linkedin.com/" target="_blank"> <img src={linkedin} className={classes.icon}/></a>
            </div>
        </footer>
    )
}

export default Footer;