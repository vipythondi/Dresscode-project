import React, {useEffect, useState} from 'react'
import ProductList from '../products/ProductList'
import filter from '../images/filter.png'
import classes from '../pages/Children.module.css'

function Children(){
    const [childrenProducts, setChildrenProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        fetch('https://dresscode-8f71f-default-rtdb.firebaseio.com/children/-MqiHXeF97hISnLc_D5A.json')
        .then(data => data.json())
        .then(result => setChildrenProducts(result))
    }, [])

    function getFilteredItems(event){
        let filterType = event.target.value
        if(filterType === "T-shirt"){
            setFilteredProducts(childrenProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Pullover"){
            setFilteredProducts(childrenProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Jeans"){
            setFilteredProducts(childrenProducts.filter(product => product.type === filterType))
        }
        if(filterType === "Sweatshirt"){
            setFilteredProducts(childrenProducts.filter(product => product.type === filterType))
        }
        if(filterType === "All"){
            setFilteredProducts(childrenProducts)
        }
    }

    return(
        <div className={classes.children_page}>
            <div className={classes.children_page_title}>
                <p>Children products</p>
                <div className={classes.children_page_title_filter}>
                    <p>filter</p>
                    <img src={filter} className={classes.children_page_photo} alt=""/>
                    <select className={classes.options}  onChange={getFilteredItems}>
                        <option value="All" selected >All</option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Pullover">Pullover</option>
                        <option value="Sweatshirt">Sweatshirt</option>
                    </select>
                </div>
            </div>
            <ProductList products={filteredProducts.length ? filteredProducts : childrenProducts}></ProductList>
        </div>
        
    )
}

export default Children;