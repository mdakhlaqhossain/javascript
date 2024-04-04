console.log('Hello World');

//Datatype: var, let, const

// Primitive value (used stack memory): String, Number, Boolean, null, undefined, Symbol, BigInt
const a=10;
let email='test@test.com'

// Non primitive (refrence) value (used heap memory): Array, Objects, Functions
const river=["Padma","Meghna","Jomuna"]


let user1={
    name:'Akash',
    email: 'a@a.com'
};

let user2=user1;
user2.name='Batash';
console.log(user1.name);//new value because of same heap
console.log(user2.name);//new value because of same heap


let balance= new Number(12)
console.log(balance);

