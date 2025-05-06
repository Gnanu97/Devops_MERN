//importing all the necassary modules
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//some bootsrap components
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
//some actions and components
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import family from '../assets/family.png'

//this is the user register screen, here a user can sign up and create their own user profile for the application
//setting the initial state
const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  //handling the submit once a user has entered their details
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  //the register component is a basic form making it easy for users to use and sign up
  return (
    <div className="sign">
      <div className="signup-bg">
        <h1>We've <br />  Got you <br />Covered</h1>
        <img className="sign-image" src={family} alt="" />
      </div>
      <div className="signup">
        <FormContainer>
          <h1 className="signup-head">Get Started!</h1>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="signup-button" type='submit' variant='primary'>
              Sign Up
            </Button>
          </Form>

          <div className="sign-bottom">
            <Row className='py-3'>
              <Col>
                Already Registered?{' '}
                <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                  Sign in
                </Link>
              </Col>
            </Row>
          </div>
        </FormContainer>
      </div>
    </div>
  )
}

export default RegisterScreen
