const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
            console.log(hash);
        });
});

// var hashedPassword = hash;

// bcrypt.compare(password, hashedPassword, (err, res) => {
//    console.log("Password Accepted",res); 
// });

// var message = "I am user number 115";
// var hash = SHA256(message).toString();

// // console.log( `Messsage ${message} \n Message Hash: ${hash}`);
// var data = {
//     id: 15
// };

// var token = jwt.sign(data,'abc123');
// console.log('token', token);

// var decoded = jwt.verify(token, 'abc123');
// console.log('decoded', decoded);


// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 4
// // token.hash = SHA256(JSON.stringify(token.data).toString());

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash){
//     console.log('TCL: resultHash', resultHash);
//     console.log("Data was not Chaged");

// } else {
//     console.log("Data Changed, Do not Trust!"); 
// }


