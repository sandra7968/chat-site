import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Button, Col, Container, Form, Row} from 'react-bootstrap'
import './Register.css'
import imagePlaceholder from  '../Assets/userPlaceholder.jpg'
import axios from 'axios'
import { registerRoute } from '../utils/commonAPI'
function Register() {
  // const [userDetails,setUserDetails] = useState({
  //   username:"",
  //   email:"",
  //   password:"",
  //   confirmPassword:""
  // })
  // const handleSubmit = async (e)=>{
  //   e.preventDefault()
  //    const  {username,email,password,confirmPassword} = userDetails 
  //   if(!username || !email || !password || !confirmPassword){
  //     alert("Please fill the form completely!")
  //   }else{
  //     if(password !== confirmPassword){
  //       alert("Password does not match!")
  //     }else if(username.length<3){
  //       alert("Username should have more than 3 characters!")
  //     }else if(password.length<6){
  //       alert("Password should have more than 3 characters!")
  //     }else{
  //       console.log("in validation",registerRoute);
  //       const data = await axios.post(registerRoute,{
  //         username,email,password
  //       })
  //     }

  //   }
    
    
  // }
  // console.log(userDetails);
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const [image,setImage] = useState(null)
  const [uploadImage,setUploadImage] = useState(false)
  const [imagePreview,setImagePreview] = useState(null)


  const validateImage = (e)=>{
    const file = e.target.files[0]
    if(file.size >= 1048576){
      return alert("Maximux file size for uploading image is 1MB")
    }else{
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }
  const uploadImageAPI = async ()=>{
    const data = new FormData()
    data.append('file',image)
    data.append('upload_preset','dzlzzbbm')
    try{
      setUploadImage(true)
      let res = await fetch('https://api.cloudinary.com/v1_1/dshmc8xl3/image/upload',{
        method:'post',
        body: data
      })
      const urlData = await res.json()
      setUploadImage(false)
      return urlData.url
    }catch(err){
      setUploadImage(false)
      console.log(err);
    }
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!name || !email || !password || !confirmPassword || !image) 
    return alert("Please fill the form completely!");
    if(password !== confirmPassword)
    return alert('Please enter the password correctly!')
    const url = await uploadImageAPI(image)
    console.log(url);

  }
  return (
    <>
   <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
           <div className='register w-75'>
             
              <Form onSubmit={handleSubmit} className=' p-4'>
              <div className='d-flex justify-content-center align-items-center'>
             <i className="fa-solid fa-feather fa-2x me-2"></i>
             <h1>Swoosh!</h1>
             </div>
             <div className="register-profile-pic-container mb-3">
              <img src={imagePreview?imagePreview:imagePlaceholder} className='register-profile-pic' alt="" />
              <label htmlFor="image-upload" className='image-upload-label'>
                <i className='fas fa-plus-circle add-picture-icon'></i>
              </label>
              <input type="file" id="image-upload" hidden accept='image/png, image/jpeg' onChange={validateImage} />
             </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email ID" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />
              </Form.Group>
              <Button className='btn btn-success ' variant="primary" type="submit">
                Create Account
              </Button>
              <span> Already an User? <Link to={'/login'}>Login</Link></span>
            </Form>
           </div>
        </Col>
        <Col md={5} className="register_bg"></Col>
      </Row>
   </Container>
    </>
  )
}

export default Register