import { gql } from '@apollo/client';

export const QUERY_ME = gql `
query me {
    me {
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
        loves
        friends
    }
}
`;
export const QUERY_USER = gql `
query user {
    user {
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
        loves
        friends
    }
}
`;