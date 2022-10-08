const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//const bio?

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        password:{
            type: String,
            required: true,
            minlength: 8
        },
        username:{
            type: String,
            require: true,
            unique: true
        },
        contacts:[
            {
                type: Schema.Types.ObjectID,
                ref: 'User'         
            },
        ],
    },
    {
       toJSON:{
             virtuals: true
        }, 
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