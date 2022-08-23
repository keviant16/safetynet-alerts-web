import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        //delete function
        props.delete()
        handleClose();
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Supprimer
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                    Voulez vous supprimer cette element
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Supprimer
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;