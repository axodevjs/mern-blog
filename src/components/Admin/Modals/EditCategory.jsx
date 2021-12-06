import Modal from 'react-modal';

Modal.setAppElement('#root');

const EditCategory = (props) => {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.toggleModal}
            contentLabel="Edit category"
            className="mymodal"
            overlayClassName="myoverlay"
            closeTimeoutMS={200}
        >
            <div>My modal dialog.</div>
            <button onClick={props.toggleModal}>Close modal</button>
        </Modal>
    );
}

export default EditCategory