import React, { useState, useContext } from 'react';
import windbnb from '../assets/triangleLogo.png';
import { BsSearch } from 'react-icons/bs';
import styles from '../styles/style.module.css';
import Modal from '../UI/Modal/Modal';
import FormModal from './FormModal';
import { ModalContext } from '../contexts/ModalContext';


function Header() {
    const { guests, location } = useContext(ModalContext)
    const [showModal, setShowModal] = useState(false)

    const modalHandler = () => {
        setShowModal(!showModal)
    }
    return (
        <>
            {showModal &&
                <Modal show={showModal} closeModal={modalHandler}>
                    <section>
                        <FormModal />
                    </section>
                </Modal>}

            <header className={styles.header}>
                <div>
                    <img src={windbnb} alt="windbnb-logo" /> <span className={styles['header__text']}>windbnb</span>
                </div>
                <div onClick={modalHandler}>
                    <form className={styles['header__input-box']}>
                        <input type="text" value={location} placeholder='Helsinki, Finland' readOnly />
                        <input type="text" placeholder={guests === 0 ? 'Add Guests' : `${guests} Guests`} readOnly />
                        <button disabled className={styles['header__input--action']}><BsSearch size={20} /> </button>
                    </form>
                </div>
            </header>
        </>
    )
}



export default Header
