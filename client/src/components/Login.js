import React from 'react';

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
    <div class="ui placeholder segment">
  <div class="ui two column very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input type="text" placeholder="Username"></input>
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input type="password"></input>
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="ui blue submit button">Login</div>
      </div>
    </div>
    <div class="middle aligned column">
      <div class="ui big button">
        <i class="signup icon"></i>
        Sign Up
      </div>
    </div>
  </div>
  <div class="ui vertical divider">
    Or
  </div>
</div>
  );
};

export default Login;
