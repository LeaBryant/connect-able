import React, { useState } from 'react';
import { Form, Alert,Link } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

// import { loginUser } from '../utils/API';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userFormData);

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

  const mystyle = {
    color: "black",
    padding: "5px",
    fontFamily: "Arial",
    alignItems: "center"
    };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group style={mystyle}>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
            style={{ width: '50%'}} 
            
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group style={mystyle}>
          <Form.Label htmlFor='password'>Password </Form.Label>
         
          <Form.Control
          
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
            style={{ width: '50%'}} 

          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
         
        </Form.Group>
        <Form.Group style={mystyle}>
        <Button
          className='Button'          
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
          Link="profile"
          
       >
          Submit
        </Button>
        </Form.Group>
        <Form.Group style={mystyle} >
        <Button
          className='Button'
          type='button'
          variant='link'
          Link="signup" 
          >
          Not a Member? Register Now
        </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Login;