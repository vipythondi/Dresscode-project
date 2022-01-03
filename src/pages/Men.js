import React, {useEffect, useState} from 'react'
import ProductList from '../products/ProductList'
import filter from '../images/filter.png'
import classes from '../pages/Men.module.css'

function Men(){
    const [menProducts, setMenProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        fetch('https://dresscode-8f71f-default-rtdb.firebaseio.com/men/-MqiGn1XAyPSnMaZmOCz.json')
        .then(data => data.json())
        .then(result => setMenProducts(result))
    }, [])

    function getFilteredItems(event){
        let filterType = event.target.value
        if(filterType === "T-shirt"){
            setFilteredProducts(menProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Pullover"){
            setFilteredProducts(menProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Jeans"){
            setFilteredProducts(menProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Sweatshirt"){
            setFilteredProducts(menProducts.filter(product => product.type === filterType))
        }
        if(filterType === "All"){
            setFilteredProducts(menProducts)
        }
    }

    console.log()
    return(
        <div className={classes.man_page}>
            <div className={classes.men_page_title}>
                <p>Men products</p>
                <div className={classes.men_page_title_filter}>
                    <p>filter</p>
                    <img src={filter} className={classes.men_page_photo} alt=""/>
                    <select className={classes.options}  onChange={getFilteredItems}>
                        <option value="All" selected >All</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Pullover">Pullover</option>
                        <option value="Sweatshirt">Sweatshirt</option>
                    </select>
                </div>
            </div>
            <ProductList products={filteredProducts.length ? filteredProducts : menProducts}></ProductList>
        </div>
        
    )
}

export default Men;