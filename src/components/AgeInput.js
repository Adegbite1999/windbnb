import React, { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import styles from './ageInput.module.css'
const AgeInput = props => {
    const { count, dispatch } = useContext(ModalContext)
    return (
        <section className={styles.column}>
            <div>
                <h5>Adult</h5>
                <span>Ages 13 or above</span>
                <div>
                    <button onClick={() => dispatch({ type: 'decrement_adult' })}>-</button>{count.adultCount} <button onClick={() => dispatch({ type: 'increment_adult' })}>+</button>
                </div>
            </div>
            <div>
                <h5>Children</h5>
                <span>Age 2 to 13</span>
                <div>
                    <button onClick={() => dispatch({ type: 'decrement_children' })}>-</button>{count.childrenCount} <button onClick={() => dispatch({ type: 'increment_children' })}>+</button>
                </div>
            </div>
        </section>
    )
}

export default AgeInput;