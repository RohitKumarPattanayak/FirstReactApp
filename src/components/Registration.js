import Swal from 'sweetalert2'
import {useState ,useEffect} from 'react'
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"
const axios = require('axios');


function Registration() {
    
    const  [emailAddress, setEmailAddress] = useState("")
    const  [password, setPassword] = useState("")
    const  [username, setUsername] = useState("")
    async function UserPost(){
      // console.log("email :",emailAddress)
      // console.log("username :",username)
      const UserDetails =  {
        "username": username,
        "email": emailAddress,
        "password": password
      }
      await axios.post('http://localhost:5000/user-register', UserDetails).then(()=>{                   
                                                                                    Swal.fire({
                                                                                      title: '<strong><u>Submitted !!</u></strong>',
                                                                                      icon: 'success',
                                                                                      showCloseButton: true,
                                                                                      focusConfirm: false,
                                                                                      confirmButtonText:
                                                                                        '<i class="fa fa-thumbs-up"></i> Great!',
                                                                                    })
                                                                                    setEmailAddress("")
                                                                                    setPassword("")
                                                                                    setUsername("")
                                                                                  }).catch((err)=>Swal.fire({
                                                                                              title: `<strong><u>${err.message}</u></strong>`,
                                                                                              icon: 'error',
                                                                                              showCloseButton: true,
                                                                                              focusConfirm: false,
                                                                                              confirmButtonText:
                                                                                              '<i class="fa fa-thumbs-up"></i> Exit',
                                                                                  })) 
    }

  return (
    <div>
       <Container style={{padding:"8%",background:"lightgrey"}}>
       <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>    
    <Form.Control value={username} onChange={(e)=>setUsername(e.target.value)} type="" placeholder="Enter Username" />
    <Form.Label>Email address</Form.Label>
    <Form.Control value={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button variant="primary" type="" onClick={UserPost}>
    Submit
  </Button>
</Form>
       </Container>
    </div>
  );
}

export default Registration;
