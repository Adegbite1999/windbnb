import React from 'react';
import styles from '../../styles/style.module.css';
import { FaStar } from 'react-icons/fa';

function CardList(props) {
    return (
        <div className={styles.rows}>
            <div className={styles.imageContainer}>
                <img className={styles.img} src={props.src} alt="Bedroom" />
            </div>
            <div className={`${styles.imageCaption} ${styles['d-flex']}`}>
                <div className={styles['d-flex']}>
                    {/* <h5>{props.superhost && 'Superhost'}</h5> */}
                    {props.superhost && <h5 className={`${styles.superhost}`}>Superhost</h5>}
                    <div className={`${styles['d-flex']}`}>
                        <p className={styles.mr}>{props.type}</p>
                        <p>{`${props.beds === null ? "" : `${props.beds} beds`}`}</p>
                    </div>
                </div>
                <div><FaStar color='#EB5757' />{props.rating}</div>
            </div>
            <h5 className={styles.sub}>{props.title}</h5>
        </div>
    )
}

export default CardList
