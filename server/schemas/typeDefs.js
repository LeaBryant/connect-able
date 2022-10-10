const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String
        email: String
        password: String
        username: String
        lookingForLove: String
        lookingForFriends: String
        DOB: String
        gender: String
        orientation: String
        location: String
        aboutMe: String
        interests: String
        disability: String
        loves: [User]
        friends: [Users]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        newUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;