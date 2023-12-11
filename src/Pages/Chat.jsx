import React from 'react'
import Sidebar from '../components/Sidebar'
import { Col, Container, Row } from 'react-bootstrap'
import MessageForm from '../components/MessageForm'

function Chat() {
  return (
    <Container>
        <Row>
            <Col md={4}>
            <Sidebar/>
            </Col>
            <Col md={8}>
            <MessageForm/>
            </Col>
        </Row>
    </Container>
  )
}

export default Chat