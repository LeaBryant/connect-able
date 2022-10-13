import { gql } from '@apollo/client';

export const NEW_USER = gql`
  mutation newUser($username: String!, $email: String!, $password: String!) {
    newUser(name: $name, email: $email, password: $password) {
      token
        User {
        _id
        name
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