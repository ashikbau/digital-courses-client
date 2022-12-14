import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
const [error,setError] = useState('');
  const {signIn,setLoading} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathName || '/courses'

  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      form.reset();
      setError('');
      navigate(from, {replace: true})
    })
    .catch(error => {
      console.error(error)
      setError(error.message);
    })
    .finally(()=>{
      setLoading(false)
    })
  }

    return (
        <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter Your email" required/>
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name ="password" type="password" placeholder=" Your Password" required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className='text-danger'>
          {error}

        </Form.Text>
      </Form>
    );
};

export default Login;