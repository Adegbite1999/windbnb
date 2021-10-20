import React, { createContext, useReducer, useContext, useState } from 'react';
import AgeInput from '../components/AgeInput';
import Location from '../components/Location';
import { ProductContext } from './ProductContext';

export const ModalContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment_children':
            return { ...state, childrenCount: state.childrenCount + 1 };
        case 'decrement_children':
            return { ...state, childrenCount: state.childrenCount - 1 }
        case 'increment_adult':
            return { ...state, adultCount: state.adultCount + 1 }
        case 'decrement_adult':
            return { ...state, adultCount: state.adultCount - 1 }
        default:
            return state
    }
}


const focusedReducer = (state, action) => {
    switch (action.type) {
        case 'location':
            return <Location />

        case 'age_input':
            return <AgeInput />
        default:
            return state;
    }
}


const ModalContextProvider = (props) => {
    const { data } = useContext(ProductContext)
    const [count, dispatch] = useReducer(reducer, { childrenCount: 0, adultCount: 0 })
    const [focused, dispatchFocused] = useReducer(focusedReducer, <Location />)

    const locationMap = data.map((product) => `${product.city}, ${product.country}`)
    const uniqueLocation = [...new Set(locationMap)]
    const [location, setLocation] = useState(uniqueLocation[0])
    const guests = count.childrenCount + count.adultCount;
    const locationHandler = (val) => {
        setLocation(val)
    }
    return (
        <ModalContext.Provider value={{
            count,
            dispatch,
            focused,
            dispatchFocused,
            location,
            guests,
            locationHandler,
            uniqueLocation
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider