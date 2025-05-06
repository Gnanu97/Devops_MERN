import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

//a basic bootstrap Modal component to alert users once they have filled in the contact form

const ContactButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="light" size="" className="contact-btn" onClick={handleShow}>
                Submit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Submission successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thank you for you interest in Simple Life life-insurance. One of our trusted life-insurance agents will contact you to answer any questions you may have.
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

export default ContactButton