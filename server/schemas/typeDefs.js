const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        password: String
        username: String
    }

    type Bio {
        userId: ID
        lookingforlove: String
        lookingforfriends: String
        lookingforcommunity: String
        birthdate: String
        gender: String
        orientation: String
        location: String
        aboutme: String
        photo: String
        interests: String
        selfidentify: String,
        disability: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        newUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;