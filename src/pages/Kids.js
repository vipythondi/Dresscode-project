import React, {useEffect, useState} from 'react'
import ProductList from '../products/ProductList'
import filter from '../images/filter.png'
import classes from '../pages/Kids.module.css'

function Baby(){
    const [babyProducts, setBabyProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        fetch('https://dresscode-8f71f-default-rtdb.firebaseio.com/kids/-MqiHlIfqVEDXKHTCuMe.json')
        .then(data => data.json())
        .then(result => setBabyProducts(result))
    }, [])

    function getFilteredItems(event){
        let filterType = event.target.value
        if(filterType === "T-shirt"){
            setFilteredProducts(babyProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Pullover"){
            setFilteredProducts(babyProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Overalls"){
            setFilteredProducts(babyProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Sweatshirt"){
            setFilteredProducts(babyProducts.filter(product => product.type === filterType))
        }
        if(filterType === "All"){
            setFilteredProducts(babyProducts)
        }
    }

    return(
        <div className={classes.baby_page}>
            <div className={classes.baby_page_title}>
                <p>Baby products</p>
                <div className={classes.baby_page_title_filter}>
                    <p>filter</p>
                    <img src={filter} className={classes.baby_page_photo} alt=""/>
                    <select className={classes.options}  onChange={getFilteredItems}>
                        <option value="All" selected >All</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Overalls">Overalls</option>
                        <option value="Pullover">Pullover</option>
                        <option value="Sweatshirt">Sweatshirt</option>
                    </select>
                </div>
            </div>
            <ProductList products={filteredProducts.length ? filteredProducts : babyProducts}></ProductList>
        </div>
        
    )
}

export default Baby;