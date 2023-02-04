import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ListOfUsers = ({user}) => {
  return (
    <div className='line'>
    <Card border="primary" style={{ width: '19rem' }}>
        <Card.Header>{user.username}</Card.Header>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text> {user.address.city} {user.address.street}</Card.Text>
          <Card.Text> {user.phone}</Card.Text>
          <Card.Text> {user.website}</Card.Text>
          <Card.Text> {user.company.name}</Card.Text>
        </Card.Body>
      </Card>
      </div>
  )
}

export default ListOfUsers