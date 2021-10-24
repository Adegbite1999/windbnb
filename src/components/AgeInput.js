import React, { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';
import styles from './ageInput.module.css'
const AgeInput = props => {
    const { count, dispatch } = useContext(ModalContext)
    return (
        <section className={styles.column}>
            <div>
                <h5 className={styles.headerTitle}>Adult</h5>
                <span className={styles.ageSub}>Ages 13 or above</span>
                <div className={styles.actionBox}>
                    <button className={`${styles.btn} mr`} onClick={() => dispatch({ type: 'decrement_adult' })}>-</button> <span className={styles.count}>{count.adultCount}</span> <button className={styles.btn} onClick={() => dispatch({ type: 'increment_adult' })}>+</button>
                </div>
            </div>
            <div className={styles.childrenBox}>
                <h5 className={styles.headerTitle}>Children</h5>
                <span className={styles.ageSub}>Age 2 to 13</span>
                <div className={styles.actionBox}>
                    <button className={`${styles.btn} mr`} onClick={() => dispatch({ type: 'decrement_children' })}>-</button > <span className={styles.count}>{count.childrenCount}</span> <button className={styles.btn} onClick={() => dispatch({ type: 'increment_children' })}>+</button>
                </div>
            </div>
        </section>
    )
}

export default AgeInput;