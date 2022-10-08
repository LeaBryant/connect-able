const { Schema, model } = require('mongoose');
//const bcrypt = require('bcrypt');
//do we need a const for bio?

const bioSchema = new Schema(
    {
        lookingforlove: {
            name: {type: String},
            required: true
        },
        lookingforfriends: {
            name: {type: String},
            required: true
        },
        lookingforcommunity: {
            name: {type: String},
            required: true
        }
    }
)