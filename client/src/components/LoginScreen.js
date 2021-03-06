import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Message from './Message'
import Loader from './Loader'
import FormContainer from './FormContainer'
import { GlobalContext } from '../context/GlobalState'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { error, loading, userInfo, login } = useContext(GlobalContext)

  useEffect(() => {}, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    //Dispatch Login
    login(email, password)
  }

  return (
    <FormContainer mdsize='4'>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}

      <Form
        onSubmit={submitHandler}
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='700'
      >
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button type='submit' variant='primary' size='lg'>
          Sign In
        </Button>
      </Form>
      <Row className='py-5'>
        <Col>
          New player? <Link to='/register'>Register here</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
