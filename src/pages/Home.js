import React, { useEffect, useState } from 'react';
import { Banners } from '../store/banner-images';
import classes from './Home.module.css'
import next from '../images/next.png'
import back from '../images/back.png'

function Home() {

    const [current, SetCurrent] = useState(0)
    const bannerLength = Banners.length

    const nextBanner = () => {
        SetCurrent(current === bannerLength - 1 ? 0 : current + 1)
    }

    const prevBanner = () => {
        SetCurrent(current === 0 ? bannerLength - 1 : current - 1)
    }

    return (
        <div className={classes.home_page}>
            <div onClick={prevBanner} className={classes.arrow_box_back}>
                <img src={back} className={classes.arrow}/>
            </div>
            <div onClick={nextBanner} className={classes.arrow_box_next}>
                <img src={next} className={classes.arrow}/>
            </div>
            {Banners.map((banner, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'}>
                        {index === current && (<img src={banner.image} className={classes.banner_image}/>)}
                    </div>
                )
            })}
        </div>
    )
}

export default Home;