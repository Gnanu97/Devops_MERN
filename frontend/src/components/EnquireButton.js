import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

//a bootstrap modal to alert users when they press the enquire button on a product

const EnquireButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="" size="sm" className="enquire-button" onClick={handleShow}>
                Enquire now
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enquiry Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for you interest in Simple Life life-insurance. One of our trusted life-insurance agents will contact you to finalize your cover and answer any questions you may have.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default EnquireButton