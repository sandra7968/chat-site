 import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import '../App.css'
import './Login.css'

 
 function Login() {
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")

  const handleLogin = (e)=>{
    e.preventDefault()
  }
   return (
     <>
     <Container>
        <Row>
           <Col md={5} className="login_bg"></Col>
           <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
             <div className='login w-75 '>
             
             <Form className=' p-4 ' onSubmit={handleLogin}>
             <div className='d-flex justify-content-center align-items-center'>
            <i className="fa-solid fa-feather fa-2x me-2"></i>
            <h1>Swoosh!</h1>
            </div>
      
             <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Control type="email" placeholder="Email ID"  value={email} onChange={(e)=>setEmail(e.target.value)} required />
             </Form.Group>
       
             <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)} required />
             </Form.Group>
      
             <Button className='btn btn-success w-25 text-center' variant="primary" type="submit" >
               Register
             </Button>
             <span> Don't have an account? <Link to={'/register'}>Register</Link></span>
           </Form>
          </div>
           </Col>
        </Row>
     </Container>
     </>
   )
 }
 
 export default Login