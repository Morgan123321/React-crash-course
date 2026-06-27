import './Modal.css'
function Modal({title, cancelModal, confirmModal}) {
    return (
        <div>
            <div className="modal">
                <p className="modal__title">{title}</p>
                <div className="modal__buttons">
                    <button onClick={cancelModal}className="btn btn__cancel">cancel</button>
                    <button onClick={confirmModal} className="btn">confirm</button> 
                </div>
            </div>
        
        <div className="backdrop" />
        </div>
    )
}

export default Modal;