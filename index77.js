
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}



   createUser.prototype.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    createUser.prototype.is18= function(){
        return this.age >= 18;
    },
    createUser.prototype.sing= function(){
        return 'toon na na na la la ';
    }


const user1 = createUser('nizam', 'nayeem', 'nizam@gmail.com', 9, "my address");
const user2 = createUser('nizam', 'zara', 'zara@gmail.com', 19, "my address");
const user3 = createUser('nizam','ishita', 'ishita@gmail.com', 17, "my address");
// console.log(user1);
console.log(user1.about());
