import React, { useContext } from 'react';
import CardList from './CardList';
import styles from '../../styles/style.module.css';
import { ProductContext } from '../../contexts/ProductContext';


function Card(props) {
    const { products } = useContext(ProductContext)
    return (
        <section className={styles.card}>
            <div className={styles.cardHeader}>
                <h5 className={styles.cardTitle}>Stays in Finland</h5>
                <p className={styles.stats}>{`${products.length} Stays`}</p>
            </div>
            <div className={styles.container}>
                {products.map((product) => {
                    return <CardList
                        src={product.photo}
                        superhost={product.superHost}
                        type={product.type}
                        beds={product.beds}
                        rating={product.rating}
                        title={product.title}
                        key={product.rating}

                    />
                })}
            </div>
        </section>
    )
}

export default Card
