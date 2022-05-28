function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName: "nizam",
    age: 8
}
const user2 = {
    firstName: "nayeem",
    age: 9
}

// call, apply,bind about.call(user1,"swimming","nomusic") about.apply(user1,
// ["guitar", "bach"]);

const func = about.bind(user2, "guitar", "bach");
func();