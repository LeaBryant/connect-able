const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id }).select("-__v -password")

                return user
            }
            throw new AuthenticationError('Need to be logged in');
        },
        users: async () => {
                return User.find();
            },
        },
    Mutation: {
        newUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, args) => {
            const user = await User.find(args.email);
            if (!user){
                throw new AuthenticationError('Wrong Credentials');
            }
            const checkPassword = await user.isCorrectPassword(password);
            if (!checkPassword) {
                throw new AuthenticationError('Wrong Credentials!');
              }
              const token = signToken(user);
              return { token, user };
        }
    }
}

module.exports = resolvers;