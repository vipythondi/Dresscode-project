import React, { useState, createContext } from 'react';

const FavoriteContext = createContext({
    favorite: [],
    addFavorite: (favoriteProduct)=> {},
    removeFavorite: (productId) => {},
    itemIsFavorite: (productId) => {},
    basket: [],
    addBasket: (basketProduct)=> {},
    removeBasket: (productId) => {},
    itemInBasket: (productId) => {},
})



export function FavoritesContextProvider(props){
    const [userFavorite, setUserFavorite] = useState([])
    const [userBasket, setUserBasket] = useState([])


    function addFavorite(favoriteProduct){
        setUserFavorite(prevUserFavorite => {
            return prevUserFavorite.concat(favoriteProduct)
        })
    }

    function removeFavorite(productId){
        setUserFavorite(prevUserFavorite => {
            return prevUserFavorite.filter(product => product.id !==productId)
        })
    }

    function itemIsFavorite(productId){
        return userFavorite.some(product => product.id === productId)
    }

    function addBasket(basketProduct){
        setUserBasket(prevUserBasket => {
            return prevUserBasket.concat(basketProduct)
        })
    }

    function removeBasket(productId){
        setUserBasket(prevUserBasket => {
            return prevUserBasket.filter(product => product.id !==productId)
        })
    }

    function itemInBasket(productId){
        return userBasket.some(product => product.id === productId)
    }

    const context={
        favorite: userFavorite,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        itemIsFavorite: itemIsFavorite,
        basket: userBasket,
        addBasket: addBasket,
        removeBasket: removeBasket,
        itemInBasket: itemInBasket,
    }


    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
}

export default FavoriteContext;