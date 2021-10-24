import React, { useContext } from 'react';
import styles from './formModal.module.css';
import { BsSearch } from 'react-icons/bs';
import { ModalContext } from '../contexts/ModalContext';
import { ProductContext } from '../contexts/ProductContext';





function FormModal(props) {
    const { guests, location, focused, dispatchFocused, } = useContext(ModalContext)
    const { FilterData } = useContext(ProductContext)
    const submitHandler = (event) => {
        event.preventDefault()
        FilterData(location, guests)
        props.onClose()
    }
    return (
        <div className={styles.formWrapper}>
            <div>
                <form onSubmit={submitHandler} className={styles['input-box']}>
                    <input className={styles.input} onClick={() => dispatchFocused({ type: 'location' })} value={location} type="text" readOnly placeholder='Helsinki, Finland' />
                    <input className={styles.input} onClick={() => dispatchFocused({ type: 'age_input' })} readOnly type="text" placeholder={guests === 0 ? 'Add Guests' : `${guests} Guests`} />
                    <div className={styles.buttonWrapper}>
                        <button  className={styles['input--action']}><BsSearch size={10} />Search </button>
                    </div>
                </form>
            </div>
            <div className={styles.content}>
                {focused}
            </div>
        </div>
    )
}

export default FormModal
