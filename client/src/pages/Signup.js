import React, { useState } from 'react';
import { Form, Button, Alert, Link } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { NEW_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import '../style.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
const Signup = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ 
    username: '', 
    email: '', 
    password: '',
    name: '',
    lookingForLove: '',
    lookingForFriends:'',
    DOB: '',
    gender: '',
    orientation: '',
    location: '',
    aboutMe: '',
    interests: '',
    selfIdentify: '',
    disability: ''
    });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [newUser, { error }] = useMutation(NEW_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await newUser({
        variables: { ...userFormData },
      });
      
      if (!{ data }) {
        throw new Error('something went wrong!');
      }
      Auth.login(data.newUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
        username: '', 
        email: '',
        name: '', 
        password: '',
        lookingForLove: '',
        lookingForFriends:'',
        DOB: '',
        gender: '',
        orientation: '',
        location: '',
        aboutMe: '',
        interests: '',
        selfIdentify: '',
        disability: ''
    });
  };
  const mystyle = {
    color: "Black",
    padding: "10px",
    fontFamily: "Arial",
    background: '#ffffff' 
   };

  
  return (
    <>
  <div className="body">
     <div>
      <Header />
      </div>
  
    <div className='container p-5 my-5 border' style={mystyle}>

      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
        <Form.Group >
          <Form.Label htmlFor='name'>Name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Name'
            name='name'
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
          <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group >
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Your Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Minimum of 8 Characters'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='lookingForLove'>Are you looking for love?</Form.Label>
          <Form.Control
            type='lookingForLove'
            placeholder='Yes or No'
            name='lookingForLove'
            onChange={handleInputChange}
            value={userFormData.lookingForLove}
            required
          />
          <Form.Control.Feedback type='invalid'>Looking for love is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='lookingForFriends'>Are you looking for friends?</Form.Label>
          <Form.Control
            type='lookingForFriends'
            placeholder='Yes or No'
            name='lookingForFriends'
            onChange={handleInputChange}
            value={userFormData.lookingForFriends}
            required
          />
          <Form.Control.Feedback type='invalid'>Looking for friends is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='DOB'>Date of Birth</Form.Label>
          <Form.Control
            type='DOB'
            placeholder='mm/dd/yyyy'
            name='DOB'
            onChange={handleInputChange}
            value={userFormData.DOB}
            required
          />
          <Form.Control.Feedback type='invalid'>Date of Birth is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='gender'>What is your gender?</Form.Label>
          <Form.Control
            type='gender'
            placeholder='Male, Female, Non-binary, Prefer not to respond'
            name='gender'
            onChange={handleInputChange}
            value={userFormData.gender}
            required
          />
          <Form.Control.Feedback type='invalid'>Gender is required!</Form.Control.Feedback>
        </Form.Group>

      <Form.Group>
          <Form.Label htmlFor='orientation'>Orientation</Form.Label>
          <Form.Control
            type='orientation'
            placeholder='orientation'
            name='orientation'
            onChange={handleInputChange}
            value={userFormData.orientation}
            required
          />
          <Form.Control.Feedback type='invalid'>Orientation is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='location'>Where do you live?</Form.Label>
          <Form.Control
            type='location'
            placeholder='City, State'
            name='location'
            onChange={handleInputChange}
            value={userFormData.location}
            required
          />
          <Form.Control.Feedback type='invalid'>Location is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='aboutMe'>Tell us About Yourself!</Form.Label>
          <Form.Control
            type='aboutMe'
            placeholder='About Me'
            name='aboutMe'
            onChange={handleInputChange}
            value={userFormData.aboutMe}
            required
          />
          <Form.Control.Feedback type='invalid'>About Me is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='interests'>Tell us about your interests!</Form.Label>
          <Form.Control
            type='interests'
            placeholder='interests'
            name='interests'
            onChange={handleInputChange}
            value={userFormData.interests}
            required
          />
          <Form.Control.Feedback type='invalid'>Interests are required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='selfIdentify'>Do you wish to self identify your disabilities?</Form.Label>
          <Form.Control
            type='selfIdentify'
            placeholder='Yes or No'
            name='selfIdentify'
            onChange={handleInputChange}
            value={userFormData.selfIdentify}
            required
          />
          <Form.Control.Feedback type='invalid'>A response to self identify is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='disability'>Disclose your disability if you wish</Form.Label>
          <Form.Control
            type='disability'
            placeholder='disability'
            name='disability'
            onChange={handleInputChange}
            value={userFormData.disability}
          />
        </Form.Group>

        <Button
          className='Button'
          disabled={!(userFormData.name && userFormData.username && userFormData.email && userFormData.password && userFormData.lookingForLove && userFormData.lookingForFriends && userFormData.DOB && userFormData.gender && userFormData.orientation && userFormData.location && userFormData.aboutMe && userFormData.interests && userFormData.selfIdentify && userFormData.disability)}
          type='submit'
          variant='success'
          Link='profile'>
          Submit
        </Button>
      </Form>
      </div>
     
      <div>
      <Footer />
    </div>
    </div>
    </>
  );
};

export default Signup;