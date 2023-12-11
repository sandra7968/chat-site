import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <Row>
      <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
        <div>
          <h1>Share the world with your friends!</h1>
          <p>Swoosh lets you connect with the world</p>
          <Link to='/chat'>
            <Button variant="success">Get Started  <i className="fas fa-comments home-message-icon"></i></Button>
          </Link>
        </div>
      </Col>
      <Col md={6} className='home_bg'></Col>
    </Row>
  )
}

export default Home