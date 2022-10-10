const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//do we need a const for bio?

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        username: {
            type: String,
            require: true,
            unique: true
        },
        lookingForLove: {
            type: Boolean,
            required: true,
            possibleValues: ['yes', 'no']
        },
        lookingForFriends: {
            type: Boolean,
            required: true,
            possibleValues: ['yes', 'no']
        },
        // lookingforcommunity: {
        //     type: Boolean,
        //     required: true,
        //     possibleValues: ['yes', 'no']
        // },
        DOB: {
            type: String,
            required: true,
            match: [/^[0-3]?[0-9]\/[0-3]?[0-9]\/(?:[0-9]{2})?[0-9]{2}$/, 'Please enter a valid Birthday']
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
        aboutMe: {
            type: String,
            maxlength: 1000,
            required: true
        },
        // photo: {
        //     type: String,
        //     required: true
        // },
        interests: {
            type: String,
            maxlength: 500,
            required: true
        },
        // selfIdentify: {
        //     type: Boolean,
        //     required: true,
        //     possibleValues: ['yes', 'no']
        // },
        disability: {
            type: String,
            maxlength: 500,
        },
        loves: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;