// primitive
// 7 types string boolean null number undefined symbol bigint

// refreence type (non primitive type)
// arrays object functions

const id=Symbol ('123');
console.log(id);


// =================================================================================================

// stack mmemory (primitive) heape memory (non primitive)
//   ||>> variable copy get      ||>> reference 

let myname="aryan";
let my2ndName=myname;
my2ndName="aman"

let user = {
    email : 'Aryanshriavstav@gmail.com',
    upi : 'user@ybl'
    
};

let user2=user;

user2.email='aryan@gmail.com'
console.log(user.email)
console.log(user2.email)
