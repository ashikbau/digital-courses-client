import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error,setError] = useState('')

  const {createUser} = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      form.reset();
      setError('');
    })
    .catch(error => {
      console.error(error)
      setError(error.message)
    
    })
  }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter Your email" required/>
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name ="password" type="password" placeholder=" Your Password" required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className='text-danger'>
          {error}
        </Form.Text>
      </Form>
    );
};

export default Register;