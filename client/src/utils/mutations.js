import { gql } from '@apollo/client';

export const NEW_USER = gql`
mutation newUser (
  $name: String!, 
  $email: String!, 
  $password: String!, 
  $username: String!, 
  $lookingForLove: String!, 
  $lookingForFriends: String!, 
  $DOB: String!, 
  $gender: String!, 
  $orientation: String!, 
  $location: String!, 
  $aboutMe: String!, 
  $interests: String!,
  $selfIdentify: String!
  $disability: String!)
  {
    newUser(
      name: $name,
      email: $email,
      password: $password,
      username: $username, 
      lookingForLove: $lookingForLove, 
      lookingForFriends: $lookingForFriends, 
      DOB: $DOB, 
      gender: $gender, 
      orientation: $orientation, 
      location: $location, 
      aboutMe: $aboutMe, 
      interests: $interests,
      selfIdentify: $selfIdentify,
      disability: $disability
      )
      {
        token
        user 
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
          selfIdentify
          disability
        }
      }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
        user {
        _id
        email
      }
    }
  }
`;

// export const ADD_LOVES = gql`
//   mutation addLoves($userID: ID!) {
//     addLoves(userID: $ID!) {
//       _id
//       name
//       loves
//     }
//   }
// `;

// export const ADD_FRIENDS = gql`
//   mutation addFriends($userID: ID!) {
//     addFriends(userID: $ID!) {
//       _id
//       name
//       friends
//     }
//   }
// `;