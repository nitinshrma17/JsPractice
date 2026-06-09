// 1. Create a variable using const and store your college name. Print it.

const college = "Geeta University";
console.log(college);


// 2. Create a variable using let and update its value three times. 

let num = 10;
console.log(num);

num = 20;
console.log(num);

num = 30;
console.log(num);

num = 40;
console.log(num);


// 3. Create a block using {} and show that a variable declared with let cannot be accessed 
// outside it. 

{
    let name = "Nitin";
    console.log(name); // works
}

// console.log(name); // Error


// 4. Write a program to swap two numbers using array destructuring.

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);


// 5. Create an arrow function that returns the cube of a number. 

const cube = (n) => n * n * n;
console.log(cube(3));


//  6. Create an arrow function to check whether a number is even or odd.

const check = (n) => {
    if (n % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
};

console.log(check(7));
console.log(check(8));


//  7. Create an arrow function that finds the maximum of three numbers. 
const maxNum = (a, b, c) => {
    return Math.max(a, b, c);
};

console.log(maxNum(10, 25, 15));


//   8. Given an array: 
// JavaScript
// const nums = [10, 20, 30, 40, 50]; 
// Use destructuring to get first, second and remaining values. 

let arr = [10, 20, 30, 40, 50];
console.log(arr);

//  9. Create a function that receives a user's name and age and returns: "Hello Ram, you 
// are 25 years old." using template literals. 

// 9. Function using template literals

function userInfo(name, age) {
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(userInfo("Ram", 25));

//  10. Generate the following URL dynamically: "/api/users/101" using template literals.

let id = 101;

let url = `/api/users/${id}`;

console.log(url);

// 11. Create an object and destructure all properties: 
// JavaScript
// const student = { 
// name: "Ram", 
// age: 25, 
// course: "MERN" 
// };

const student = {
    name1: "Ram",
    age1: 25,
    course1: "MERN"
};

const { name1, age1, course1 } = student;

console.log(name1);
console.log(age1);
console.log(course1);

// 12. Rename course to technology while destructuring. 

const student1 = {
    name: "Ram",
    age: 25,
    course: "MERN"
};

const {name, age, course:technology} = student1
console.log(name);
console.log(age);
console.log(technology);

// 13. Create a function with a default parameter: createUser(name, role="Student") 

function createUser(name, role = "Student") {
    return `${name} is a ${role}`;
}

console.log(createUser("Ram"));
console.log(createUser("Nitin", "Developer"));


//  14. Create a calculator function where the operation defaults to "add".

function calculator(a, b, operation = "add") {

    if (operation === "add") {
        return a + b;
    }
    else if (operation === "subtract") {
        return a - b;
    }
    else if (operation === "multiply") {
        return a * b;
    }
    else if (operation === "divide") {
        return a / b;
    }
}

console.log(calculator(10, 5));
console.log(calculator(10, 5, "subtract"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(10, 5, "divide"));


//   15. Create a function that receives unlimited numbers and returns their sum using the Rest 
// Operator. 

function sum(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));
console.log(sum(1, 2, 3, 4, 5));


//    16. Create a function that receives unlimited numbers and returns the largest number. 

function largest(...numbers) {

    let max = numbers[0];

    for (let num of numbers) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

console.log(largest(10, 50, 20, 80, 30));

//   17. Merge two arrays using the Spread Operator:

const frontend = ["HTML", "CSS"];
const backend = ["Node", "Express"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);


// 18. Copy an array using the Spread Operator and add one extra value.

const arr2 = [10, 20, 30];

const newArr = [...arr2, 40];

console.log(newArr);


// 19. Copy an object and update only the email property

const user = {
    name: "Ram",
    age: 25,
    email: "ram@gmail.com"
};

const updatedUser = {
    ...user,
    email: "ram123@gmail.com"
};

console.log(updatedUser);


// 20. Create a product object and add a discount field using Spread Operator

const product = {
    name: "Laptop",
    price: 50000
};

const newProduct = {
    ...product,
    discount: "10%"
};

console.log(newProduct);

// 21. Use map() and an arrow function to return only names

const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];

const names = users.map(user => user.name);

console.log(names);
// 22. Use filter() to get users whose age is greater than 24.

const result = users.filter((user) => {
    return user.age > 24;
});

console.log(result);

//   23. Use reduce() to calculate the total age of all users. 

const totalAge = users.reduce((sum, user) => {
    return sum + user.age;
}, 0);

console.log(totalAge);

// 24. Create a function createInvoice(customerName, amount) and return a formatted 
//     string using template literals. 

function createInvoice(customerName, amount) {
    return `Customer: ${customerName}, Amount: ₹${amount}`;
}

console.log(createInvoice("Ram", 5000));


// 25. Mini Challenge

const student2 = {
    name2: "Ram",
    marks: [80, 90, 70, 85]
};

// Destructuring
const { name2, marks } = student2;

// Arrow Function
const totalMarks = (...nums) => {
    
    let total = 0;

    for(let num of nums){
        total += num;
    }

    return total;
};

const total = totalMarks(...marks); 

const average = total / marks.length;

console.log(`Student: ${name2}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average}`);