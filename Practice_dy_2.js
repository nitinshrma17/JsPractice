//   1. 
//  Ans - 20

//   2.
//  Ans - Reference Error

//  3. Create a nested function structure of 4 levels and print variables from all parent scopes.

function a(){
    let p=1;
    function b(){
        let q=2
        function c(){
            let r=3
            function d(){
                let s=4
                console.log(p);
                console.log(q);
                console.log(r);
                console.log(s);  
            }
            d()
        }
        c()
    }
    b()
}
a()

// 4. Write a function that returns another function and demonstrates lexical scope. 

function outer(){
    let name = "Nitin"

    return function inner(){
        console.log(name);
    }
}

let greet = outer()

greet()

// 5.
// Ans - Undefined

// 6. Create a function where a child function can access grandparent variables.

function Grandparent(){
    let name = "GrandParent"
    function parent(){
        let name2 = "Parent"
        function child(){
            console.log(name);
            console.log(name2);
        }
        child()
    }
    parent()
}

Grandparent()

//  7. 
// Ans - Mohan

//   8. Create a 3-level nested function and access all variables inside the innermost function. 

function lvl1(){
    let one = "Level 1"

     function lvl2(){
        let two="Level 2"
        function lvl3(){
            let three = "Level 3"
            console.log(one);
            console.log(two);
            console.log(three);
            
        }
        lvl3()
    }
    lvl2()
}
lvl1()

// 9. Can a parent access a child variable? 
//  Demonstrate using code.

//  Ans - No,  Reference Error

function parent() {
    
    function child() {
        let age = 20;
    }

    child();

    // console.log(age); // Error
}

parent();

//  10. Create a private variable using lexical scope. 

function Counter() {
    let count = 0; // private variable

    return function () {
        count++;
        console.log(count);
    };
}

const counter = Counter();

counter(); // 1
counter(); // 2
counter(); // 3

// 11. Create a counter closure. 
// Output: 
// 1 
// 2 
// 3 

function Counter() {
    let count = 0; 

    return function () {
        count++;
        console.log(count);
    };
}

const counter2 = Counter();

counter2(); // 1
counter2(); // 2
counter2(); // 3


// 12. Create a reverse counter. 
// Output: 
// 10 
// 9 
// 8 

function revCount(){
    let count=10;

    return function(){
        console.log(count);
        count--;
    }
}

let revCounter = revCount()

revCounter()
revCounter()
revCounter()


//  13.  Create a closure-based bank account. 
// Methods: 
// deposit() 
// withdraw() 
// checkBalance()  

function createBankAccount(initialBalance) {
    let balance = initialBalance; // private variable

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited ₹${amount}`);
        },

        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient Balance");
            } else {
                balance -= amount;
                console.log(`Withdrawn ₹${amount}`);
            }
        },

        checkBalance() {
            console.log(`Current Balance: ₹${balance}`);
        }
    };
}

const account = createBankAccount(1000);

account.checkBalance(); // ₹1000

account.deposit(500);
account.checkBalance(); // ₹1500

account.withdraw(2000); // Insufficient Balance


// 14. Create a closure that remembers the username forever.

function createUser(username) {
    
    return function () {
        console.log(`Username: ${username}`);
    };
}

const user = createUser("Nitin");

user();
user();

// 15. Create a closure-based login attempt tracker. 
// After 3 failed attempts: 
// Account Locked

function createLoginTracker(correctPassword) {
    let attempts = 0;

    return function (password) {
        if (attempts >= 3) {
            console.log("Account Locked");
            return;
        }

        if (password === correctPassword) {
            console.log("Login Successful");
            attempts = 0; // optional: reset attempts
        } else {
            attempts++;
            console.log(`Wrong Password. Attempts Left: ${3 - attempts}`);

            if (attempts >= 3) {
                console.log("Account Locked");
            }
        }
    };
}

const login = createLoginTracker("1234");

login("1111");
login("2222");
login("3333");
login("1234");

// 16. Build a closure that stores a secret password. 
//    Only getter should be available. 

function createPassword(password) {
    
    return {
        getPassword() {
            return password;
        }
    };
}

const user2 = createPassword("Nitin@123");

console.log(user2.getPassword());

//  17. Build a shopping cart using closure. 
// Methods: 
// addItem() 
// removeItem() 
// showItems() 

function createCart() {

    let items = [];

    return {

        addItem(item) {
            items.push(item);
            console.log(item + " added to cart");
        },

        removeItem(item) {
            items = items.filter(i => i !== item);
            console.log(item + " removed from cart");
        },

        showItems() {
            console.log("Cart Items:", items);
        }

    };
}

const cart = createCart();

cart.addItem("Laptop");
cart.addItem("Mouse");
cart.addItem("Keyboard");

cart.showItems();

cart.removeItem("Mouse");

cart.showItems();

//  18. Create a closure-based voting machine. 
// Each user can vote only once.

function createVotingMachine() {

    let votedUsers = [];

    return function(user) {

        if (votedUsers.includes(user)) {
            console.log(user + " has already voted");
        } else {
            votedUsers.push(user);
            console.log(user + " voted successfully");
        }

    };
}

const vote = createVotingMachine();

vote("Nitin");
vote("Ram");
vote("Nitin");

// 19. Build a closure that counts how many times a function is executed.

function createCounter() {

    let count = 0;

    return function() {
        count++;
        console.log("Function executed", count, "times");
    };

}

const counter3 = createCounter();

counter3();
counter3();
counter3();

///  20. Build a closure-based expense tracker. 
// Methods:  
// addExpense( ) 
// getTotal()  

function createExpenseTracker() {

    let total = 0;

    return {

        addExpense(amount) {
            total += amount;
            console.log("Expense Added:", amount);
        },

        getTotal() {
            console.log("Total Expense:", total);
        }

    };
}

const expense = createExpenseTracker();

expense.addExpense(500);
expense.addExpense(300);

expense.getTotal();

// 21. Create an IIFE that prints: 
// Welcome to JavaScript

(function () {
    console.log("Welcome to JavaScript");
})();


// 22. Pass arguments to an IIFE and calculate area of rectangle. 
(function (length, width) {
    let area = length * width;
    console.log("Area of Rectangle:", area);
})(10, 5);


// 23. Create an arrow function IIFE.
(() => {
    console.log("Arrow Function IIFE");
})();


// 24. Use IIFE to create private variables.
const privateExample = (function () {
    let secret = "My Password";

    return {
        getSecret() {
            console.log(secret);
        }
    };
})();

privateExample.getSecret();


// 25. Create a module pattern using IIFE. 
// Methods: 
// increment() 
// decrement() 
// reset() 
const counter4 = (function () {

    let count = 0;

    return {

        increment() {
            count++;
            console.log("Count:", count);
        },

        decrement() {
            count--;
            console.log("Count:", count);
        },

        reset() {
            count = 0;
            console.log("Count Reset:", count);
        }

    };

})();

counter4.increment();
counter4.increment();
counter4.decrement();
counter4.reset();

// 26.  Create a function: 
// calculate(a,b,operation) 
// Perform: 
// add 
// subtract 
// multiply 
// divide

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));


// 27.  Create your own custom HOF named: 
// repeat() 
// Example 
// repeat(5, sayHello) 

function repeat(times, fn) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

function sayHello() {
    console.log("Hello");
}

repeat(5, sayHello);


// 28.  Create a logger HOF. 
// Output: 
// [INFO] User Logged In

function logger(fn) {
    return function () {
        console.log("[INFO] User Logged In");
        fn();
    };
}

function login2() {
    console.log("Login Successful");
}

const logInUser = logger(login2);
logInUser();


// 29.  Create a function execution timer using HOF. 
// Output: 
// Execution Time: XX ms 

function timer(fn) {
    return function () {
        let start = Date.now();

        fn();

        let end = Date.now();

        console.log("Execution Time:", end - start, "ms");
    };
}

function task() {
    for (let i = 0; i < 1000000; i++) {}
}

const timedTask = timer(task);
timedTask();


// 30.  Create a function wrapper that counts how many times another function was called.

function callCounter(fn) {
    let count = 0;

    return function () {
        count++;
        console.log("Function called", count, "times");
        fn();
    };
}

function greet2() {
    console.log("Hello Nitin");
}

const countedGreet = callCounter(greet2);

countedGreet();
countedGreet();
countedGreet();

// 31.  Given 
// using map.

const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];

const names = users.map(user => user.name);

console.log(names);


// 32.  Convert 
// [1,2,3,4,5] 
// into 
// [1,4,9,16,25] 
// using map.

const nums = [1, 2, 3, 4, 5];

const squares = nums.map(num => num * num);

console.log(squares);


// 33.  Create an array of product names from: 
// [ 
// {name:"Laptop"}, 
// {name:"Mouse"}, 
// {name:"Keyboard"} 
// ]

const products = [
    { name: "Laptop" },
    { name: "Mouse" },
    { name: "Keyboard" }
];

const productNames = products.map(product => product.name);

console.log(productNames);


// 34. Filter all even numbers.

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);


// 35.  Filter users whose age is greater than 25.

const users2 = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];

const adults = users2.filter(user => user.age > 25);

console.log(adults);

// 36.  Filter expensive products. 
// Condition: 
// price > 1000

const products2 = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

const expensiveProducts = products2.filter(product => product.price > 1000);

console.log(expensiveProducts);


// 37.  Find total sum. 
// Input: 
// [10,20,30,40]

const nums2 = [10, 20, 30, 40];

const total = nums2.reduce((acc, curr) => acc + curr, 0);

console.log(total);


// 38.  Find maximum value using reduce. 
// Input: 
// [5,12,3,45,2]

const numbers2 = [5, 12, 3, 45, 2];

const max = numbers2.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
});

console.log(max);


// 39.  Count total characters. 

const words = ["JavaScript", "React", "Node"];

const totalChars = words.reduce((acc, curr) => {
    return acc + curr.length;
}, 0);

console.log(totalChars);

//  40. 


const orders = [
    {
        id: 1,
        amount: 5000,
        status: "completed"
    },
    {
        id: 2,
        amount: 2000,
        status: "pending"
    },
    {
        id: 3,
        amount: 7000,
        status: "completed"
    },
    {
        id: 4,
        amount: 1000,
        status: "completed"
    }
];


// i. Completed Orders
const completedOrders = orders.filter(
    order => order.status === "completed"
);

console.log("Completed Orders:", completedOrders);


// ii. Total Revenue
const totalRevenue = completedOrders.reduce(
    (acc, order) => acc + order.amount,
    0
);

console.log("Total Revenue:", totalRevenue);


// iii. Average Revenue
const averageRevenue =
    totalRevenue / completedOrders.length;

console.log("Average Revenue:", averageRevenue);


// iv. Highest Order Amount
const highestOrder = completedOrders.reduce(
    (max, order) =>
        order.amount > max ? order.amount : max,
    0
);

console.log("Highest Order Amount:", highestOrder);


// v. Array of Order IDs
const orderIds = orders.map(
    order => order.id
);

console.log("Order IDs:", orderIds);



