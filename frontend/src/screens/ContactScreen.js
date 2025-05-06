//importing the neccassary modules
import React from 'react'
//bootstrap component
import { Form } from 'react-bootstrap'
import contact from '../assets/contact.png'
import ContactButton from '../components/ContactButton'

//a basic contact sreen page

const ContactScreen = () => {

    return (
        <div className="contact-page">
            <div className="contact-form">
                <h1>Please enter your contact details below</h1>
                <h5>and a life-insurance <br />professional will <br />contact you</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="name" placeholder="Your name..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="Your e-mail...." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Control type="number" placeholder="Your cell-number...." />
                    </Form.Group>
                    <ContactButton />
                </Form>
            </div>
            <div className="contact-img">
                <img src={contact} alt="" />
            </div>
        </div>
    )
}

export default ContactScreen