const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//do we need a const for bio?

const userSchema = new Schema(
    {
        lookingfor: {
            name: {type: String},
            date: {type: Date},
            description: {type: String, possibleValues: ['Dating','Friendship']} 
        }
    }
)