import React from 'react';
import  ReactDOM  from 'react-dom';
import styles from '../Modal/modal.module.css';


const Backdrop = (props) => {
    return (
        <div onClick={props.closeModal} className={styles.backdrop}></div>
    )
}

const Overlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}





function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal}/>, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlay'))}
        </React.Fragment>
    )
}

export default Modal
