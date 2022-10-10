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

    },

    Mutation: {
        newUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

    }
};



module.exports = resolvers;