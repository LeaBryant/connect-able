import { gql } from '@apollo/client';

export const NEW_USER = gql`
mutation newUser (
  $name: String!, 
  $email: String!, 
  $password: String!, 
  $username: String!, 
  $lookingForLove: Boolean!, 
  $lookingForFriends: Boolean!, 
  $dob: String!, 
  $gender: String!, 
  $orientation: String!, 
  $location: String!, 
  $aboutMe: String!, 
  $interests: String!, 
  $disability: String!)
  {
    newUser(
      username: $username, 
      lookingForLove: $lookingForLove, 
      lookingForFriends: $lookingForFriends, 
      DOB: $dob, 
      gender: $gender, 
      orientation: $orientation, 
      location: $location, 
      aboutMe: $aboutMe, 
      interests: $interests, 
      disability: $disability
      )
      {
        token
        User 
        {
          _id
          name
          email
          password
          username
          lookingForLove
          lookingForFriends
          DOB
          gender
          orientation
          location
          aboutMe
          interests
          disability
        }
      }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
        User {
        _id
        name
      }
    }
  }
`;

export const ADD_LOVES = gql`
  mutation addLoves($userID: ID!) {
    addLoves(userID: $ID!) {
      _id
      name
      loves
    }
  }
`;

export const ADD_FRIENDS = gql`
  mutation addFriends($userID: ID!) {
    addFriends(userID: $ID!) {
      _id
      name
      friends
    }
  }
`;