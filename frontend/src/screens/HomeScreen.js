//importing the neccasary modules
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
//some bootstrap components
import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import park from '../assets/park.jpeg'
import browse from '../assets/browse.png'
import select from '../assets/select.png'
import agent from '../assets/agent.jpeg'

//a basic homescreen page

const HomeScreen = () => {

    return (
        <div>
            <section className="home1">
                <div className="home1text">
                    <h1>Buying life insurance? <br /> A walk in the park.</h1>
                    <p>We provide life insurance for South <br /> Africans. Up to R5 million in coverage <br /> for less than you think.</p>
                    <Button className="home-button">
                        <LinkContainer to="/plans">
                            <h2>Get Started</h2>
                        </LinkContainer>
                    </Button>
                </div>
                <div className="home-img">
                    <img src={park} alt="" />
                </div>
            </section>
            <section className="home2">
                <div className="home22">
                    <div className="home2text">
                        <h1>We have simplified the way <br />you buy life insurance</h1>
                    </div>
                    <div className="process">
                        <Container>
                            <Row className="justify-content-md-center">
                                <div className="col">
                                    <Col xs={6} md={4}>
                                        <Image className="round-img" src={browse} roundedCircle />
                                        <div className="explanation">
                                            <h5>1. Browse our plans</h5>
                                            <p>Browse our list of curated life-insurance plans. Each plan is unique, we are confident there will be a plan that fits you and your family.</p>
                                        </div>
                                    </Col>
                                </div>
                                <div className="col">
                                    <Col xs={6} md={4}>
                                        <Image className="round-img" src={select} roundedCircle />
                                        <div className="explanation">
                                            <h5>2. Select your plan</h5>
                                            <p>Once you are happy with the coverage you would like to purchase, select the plan most suitable to you and your families needs.</p>
                                        </div>
                                    </Col>
                                </div>
                                <div className="col">
                                    <Col xs={6} md={4}>
                                        <Image className="round-img" src={agent} roundedCircle />
                                        <div className="explanation">
                                            <h5>3. Agent confirmation</h5>
                                            <p>One of our life-insurance experts will be in contact with you to confirm your coverage and answer any questions you may have.</p>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeScreen