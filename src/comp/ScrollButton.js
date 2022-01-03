import classes from './ScrollButton.module.css';
import React, {useEffect, useState} from 'react';
import blackupicon from '../images/up-icon-18-000000-16.png'
import whiteupicon from '../images/up-icon-18-ffffff-16.png'

function ScrollButton(){

    const [isShow, setIsShow] = useState(false)

    const isScrolledEnough = () => {
        if(window.pageYOffset > 200){
            setIsShow(true)
        }
        else{
            setIsShow(false)
        }
    }

    const scrollSmooth = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect( () => {
        window.addEventListener('scroll', isScrolledEnough)

        return () => {
            window.removeEventListener('scroll', isScrolledEnough)
        }
    }, [])


    return (
        <div onClick={scrollSmooth} className={classes.scroll_box} style={
            isShow ? {display: 'flex'} : {display: 'none'}
        }>
            <img src={whiteupicon} alt="" className={classes.white_photo} />
            <img src={blackupicon} alt="" className={classes.black_photo} />
        </div>
    )
      
}

export default ScrollButton;