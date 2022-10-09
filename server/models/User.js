const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
//do we need a const for bio?

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