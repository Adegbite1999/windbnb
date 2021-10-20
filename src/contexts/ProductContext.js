import React, { createContext, useEffect, useState } from 'react';
import data from '../data/stays.json';


export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
    }, [])


    const FilterData = (location, guests) => {
        const filtered = data.filter(product => `${product.city}, ${product.country}` === location && product.maxGuests >= guests)
        if (location.length === 0) {
            setProducts(data)
        } else {
            setProducts(filtered)
        }
    }
    return (
        <ProductContext.Provider value={{ products, data, FilterData }}>
            {props.children}
        </ProductContext.Provider>
    )
}


export default ProductContextProvider;