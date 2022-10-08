const { Schema, model } = require('mongoose');
//const bcrypt = require('bcrypt');
//do we need a const for bio?

const bioSchema = new Schema(
    {
        lookingforlove: {
            type: String,
            required: true,
            possibleValues: ['yes', 'no'] 
        },
        lookingforfriends: {
            type: String,
            required: true,
            possibleValues: ['yes', 'no'] 
        },
        lookingforcommunity: {
            type: String,
            required: true,
            possibleValues: ['yes', 'no'] 
        },
        birthdate: {
            type: Date,
            required: true,
        },
        gender: {
            type: String,
            required: true,
            possibleValues: ['Woman', 'Man', 'Transgender', 'Non-binary/non-conforming', 'Prefer not to respond'] 
        },
        orientation: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        aboutme: {
            type: String,
            maxlength: 1000,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        interests: {
            type: String,
            maxlength: 500,
            required: true
        },
        selfidentify: {
            type: String,
            required: true,
            possibleValues: ['yes', 'no'] 
        },
        disability: {
            type: String,
            maxlength: 500,
            required: true
        }
    }
)

module.exports = Bio;