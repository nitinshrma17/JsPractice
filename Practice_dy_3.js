//  1.

let student={
    name:"nitin",
    age:19,
    city:"Rohtak"
}

//  2. 

console.log(student.name);

// 3. 

student.greet = function(){
    console.log("Hello Ram");
}

student.greet()

// 4. 

student = {
    name:"Nitin",
    age:19,
    city:"Rohtak",

    isAdult(age){
        return age>=18
    }
    
}

console.log(student.isAdult(5));

//  5.

console.log(Object.keys(student));

// 6.
console.log(Object.values(student));

// 7.

console.log("email" in student);

console.log(student.hasOwnProperty('email'));  //  Checks only own properties not inherited one

// 8. 

student.course = "MERN"

console.log(student);

// 9.

delete student.age

console.log(student);

// 10.

const clone = {... student}

console.log(clone);

clone.name = "Raj"

// 11.

let obj = {
    name:"Student",
    roll:1158,

    showName(){
        console.log(this.name);
    }

}

obj.showName()

// 12.

let obj2 = {
    name:"Ram",

    upper(){
        this.name = this.name.toUpperCase()
        console.log(this.name);
        
    }
}

obj2.upper()

//  13. 

let obj3 = {
    Money:1000,

    deposit(x){
        this.Money = this.Money+x        
    },

    withdraw(x){
        if((this.Money - x )<0){
            console.log("Not Sufficient Balance");
        }
        else{
            this.Money = this.Money - x
        }
    }
}

obj3.deposit(500)
console.log(obj3.Money);

obj3.withdraw(1400)
console.log(obj3.Money);

// 14.
// Ans - RAm

// 15. 
//  Undefined

// 16. 

function student1(name,age){
    this.name = name
    this.age = age
}

// 17.
let s1 = new student1("Student 1",20)
let s2 = new student1("Student 2",21)
let s3 = new student1("Student 3",22)
console.log(s1);
console.log(s2 );
console.log(s3);

// 18.
student1.greet2 = function(){
    console.log("Hello");
}

student1.greet2()

// 19. 
// Ans - Ram

// 20. 

function car(brand,price){
    this.brand = brand
    this.price = price
}

// 21. 

function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Student("Nitin", 20);

p1.greet();

// 22. 

console.log(Student.___proto___ === Student.prototype);

// 23. 

function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.isAdult = function () {
    return this.age >= 18;
};

const x1 = new Student("Nitin", 20);
const x2 = new Student("Rahul", 15);

console.log(x1.isAdult()); 
console.log(x2.isAdult()); 

// 24. 
// Ans - Hi

// 25. 

Student.prototype.course = "JavaScript";

const y1 = new Student("Nitin", 20);
const y2 = new Student("Rahul", 21);

console.log(y1.course); 
console.log(y2.course); 

// 26. 
//  Ans - false

// 27.
// Ans - true

//  29.
const animal = {
    eat() {
        console.log("Eating");
    }
};

// 30. 
const dog = Object.create(animal);

// 31. 
dog.bark = function () {
    console.log("Barking");
};

dog.bark(); 

// 32.

const animal2 = {
    eat() {
        console.log("Eating");
    }
};

const dog2 = Object.create(animal);

dog2.eat();

//  33 to 36
class Student3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    isAdult() {
        return this.age >= 18;
    }
}

const X1 = new Student3("Nitin", 20);
const X2 = new Student3("Rahul", 17);
const X3 = new Student3("Aman", 22);

X1.greet();
console.log(X1.isAdult()); 

X2.greet();
console.log(X2.isAdult()); 

X3.greet();
console.log(X3.isAdult()); 

// 37 to 40

class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

const d = new Dog();

d.eat();
d.bark();






