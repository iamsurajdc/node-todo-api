var mongoose = require("mongoose")

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength:1,
        unique: true,
        validate: {
            validaor: (value) => {
                
            },
            message: '{VALUE} is not a valid email'
        }     
    }
    
});

module.exports = {
    User
}
// var user = new User({
//     email: "suraj@abc.com     "
// });

// user.save().then((doc) => {
//     console.log("User Saved", doc);
// }, (e)=> {
//     console.log("Unable to save user", e);
// });