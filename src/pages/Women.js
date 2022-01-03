import React, {useEffect, useState} from 'react'
import ProductList from '../products/ProductList'
import filter from '../images/filter.png'
import classes from '../pages/Women.module.css'

function Women(){
    const [womenProducts, setWomenProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        fetch('https://dresscode-8f71f-default-rtdb.firebaseio.com/women/-MqiH38RP4BWc3-Y3yZg.json')
        .then(data => data.json())
        .then(result => setWomenProducts(result))
    }, [])

    function getFilteredItems(event){
        let filterType = event.target.value
        if(filterType === "T-shirt"){
            setFilteredProducts(womenProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Pullover"){
            setFilteredProducts(womenProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Jeans"){
            setFilteredProducts(womenProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Sweatshirt"){
            setFilteredProducts(womenProducts.filter(product => product.type === filterType))
        }
        if(filterType === "All"){
            setFilteredProducts(womenProducts)
        }
    }
    return(
        <div className={classes.women_page}>
            <div className={classes.women_page_title}>
                <p>Women products</p>
                <div className={classes.women_page_title_filter}>
                    <p>filter</p>
                    <img src={filter} className={classes.women_page_photo} alt=""/>
                    <select className={classes.options}  onChange={getFilteredItems}>
                        <option value="All" selected >All</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Pullover">Pullover</option>
                        <option value="Sweatshirt">Sweatshirt</option>
                    </select>
                </div>
            </div>
            <ProductList products={filteredProducts.length ? filteredProducts : womenProducts}></ProductList>
        </div>
        
    )
}

export default Women;