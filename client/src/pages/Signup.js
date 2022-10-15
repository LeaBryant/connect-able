import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { NEW_USER } from '../utils/mutations';

import Auth from '../utils/auth';


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

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
        <Form.Group>
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

        <Form.Group>
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
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='lookingForLove'>Are you Looking for Love?</Form.Label>
          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
         <Form.Control.Feedback type='invalid'>Looking for Love is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='lookingForFriends'>Are you Looking for Friends?</Form.Label>
          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
         <Form.Control.Feedback type='invalid'>Looking for Friends is required!</Form.Control.Feedback>
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
        <Form.Label htmlFor='gender'>What is your Gender?</Form.Label>
          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Man"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Woman"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Non-binary/non-conforming"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Transgender"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Prefer not to respond"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
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
          <Form.Label htmlFor='selfIdentify'>Do you want to identify your impairment?</Form.Label>
          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Yes"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="No"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
         <Form.Control.Feedback type='invalid'>You must answer yes or no to identifying your impairment!</Form.Control.Feedback>
        </Form.Group>

        {/* <Form.Group>
          <Form.Label htmlFor='disability'>Tell us about your interests!</Form.Label>
          <Form.Control
            type='disability'
            placeholder='disability'
            name='disability'
            onChange={handleInputChange}
            value={userFormData.interests}
            required
          />
        </Form.Group> */}

        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Signup;