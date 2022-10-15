const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String
        email: String
        password: String
        username: String
        lookingForLove: Boolean
        lookingForFriends: Boolean
        DOB: String
        gender: String
        orientation: String
        location: String
        aboutMe: String
        interests: String
        selfIdentify: Boolean
        disability: String
        loves: [User]
        friends: [User]
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
        newUser(
            username: String!, 
            email: String!, 
            name: String!,
            password: String!, 
            lookingForLove: Boolean!, 
            lookingForFriends: Boolean!,
            DOB: String!,
            gender: String!,
            orientation: String!,
            location: String!,
            aboutMe: String!,
            interests: String!,
            selfIdentify: Boolean!,
            disability: String!
        ): Auth
    }
`;

module.exports = typeDefs;