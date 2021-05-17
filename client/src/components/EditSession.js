import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Form, Button, Alert } from 'react-bootstrap'
import FormContainer from './FormContainer'
import moment from 'moment'

const EditSession = () => {
  const { activeItem, editSession, userInfo, error } = useContext(GlobalContext)

  const [location, setLocation] = useState(activeItem.location)
  const [date, setDate] = useState(activeItem.date)
  const [time, setTime] = useState(activeItem.time)
  const [totalCosts, setTotalCosts] = useState(activeItem.totalCosts)
  const [notes, setNotes] = useState(activeItem.notes)
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const sessionUpdates = {
      location: location,
      date: date,
      time: time,
      totalCosts: totalCosts,
      notes: notes,
    }

    editSession(activeItem._id, sessionUpdates, userInfo.token)

    if (!error) {
      setMessage('Updated!')
    } else {
      setMessage('Update failed')
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='location'>
          <Form.Label>Location</Form.Label>
          <Form.Control
            type='text'
            value={location}
            placeholder='Enter location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId='date'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type='Date'
            value={moment(date).format('YYYY-MM-D')}
            placeholder='Enter Date'
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId='time'>
          <Form.Label>Time</Form.Label>
          <Form.Control
            type='text'
            value={time}
            placeholder='Enter Time'
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId='totalCosts'>
          <Form.Label>Total Cost</Form.Label>
          <Form.Control
            type='text'
            value={totalCosts}
            placeholder='Enter Total Cost'
            onChange={(e) => setTotalCosts(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId='notes'>
          <Form.Label>Additional Notes</Form.Label>
          <Form.Control
            type='textarea'
            value={notes}
            placeholder='Add Notes'
            onChange={(e) => setNotes(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <br></br>
      {message && (
        <Alert variant={error ? 'danger' : 'success'}>{message}</Alert>
      )}
    </FormContainer>
  )
}

export default EditSession