import React from 'react'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

const Session = ({ session }) => {
  return (
    <Row className='single-session'>
      <Col xs={2}>Host: {session.host.name}</Col>
      <Col xs={3}>{session.location}</Col>
      <Col xs={3}>
        <i className='fas fa-calendar-alt'></i>
        {moment(session.date).format('dddd MMMM d, YYYY')}
      </Col>
      <Col xs={3}>
        <i className='fas fa-clock'></i>
        {session.time}
      </Col>
      <Col xs={{ span: 1 }} className='player-number'>
        <i className='fas fa-users'></i>
        {session.players.length}
      </Col>
    </Row>
  )
}

export default Session
