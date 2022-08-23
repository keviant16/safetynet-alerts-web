import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const BasicModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant={props.variant} onClick={handleShow}>
                {props.button}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title} </Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>);
}

export default BasicModal;