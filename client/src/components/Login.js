import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

const Login = () => {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error, data }] = useMutation(LOGIN_USER);

  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);
  //   try {
  //     const { data } = await login({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   // clear form values
  //   setFormState({
  //     email: '',
  //     password: '',
  //   });
  // };
  
  return (
    <form>
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">Email address</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>
      <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
      <div class="text-center">
        <p>Not a member? <a href="/Signup">Register</a></p>
      </div>
    </form>
  );
};

export default Login;
