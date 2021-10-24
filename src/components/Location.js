import React, { useContext } from 'react'
import { ImLocation } from 'react-icons/im';
import styles from './formModal.module.css';
import { ModalContext } from '../contexts/ModalContext';

const Location = () => {
    const { uniqueLocation, locationHandler } = useContext(ModalContext)
    return (
        <ul>
            {
                uniqueLocation.map((location) => {
                    return (
                        <div className={styles.location}><ImLocation size={25} className={styles.icons} /> <li onClick={locationHandler.bind(null, location)}>{location}</li></div>
                    )
                })
            }
        </ul>
    )
}


export default Location;