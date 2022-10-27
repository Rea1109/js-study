// Computed property
let a = 'age';

const obj1 = {
    name: 'Mike',
    [a]: 30,
};
console.log(obj1);

const obj2 = {
    [1 + 4]: 5,
    ['string' + 'plus']: 'hello',
};
console.log(obj2);

// Object method
const user = {
    name: 'Tom',
    age: 23,
};

// Object.assign() : 객체 복제
const user2 = user;
console.log(user === user2);

const user3 = Object.assign({}, user);
console.log(user === user3);

const user4 = { ...user };
console.log(user === user4);

// Object.keys() , Object.values() , Object.entries()
let result = Object.keys(user);
console.log(result);

result = Object.values(user);
console.log(result);

result = Object.entries(user);
console.log(result);

// Object.fromEntries()
let arr = [
    ['mon', '월'],
    ['tue', '화'],
];

result = Object.fromEntries(arr);
console.log(result);
