// Basic Functions

function hello(){
    console.log("Hello Everyone");
}
hello()


function welcome(){
    console.log("Welcome to JavaScript");
}
welcome()

function navi(){
    console.log("Ramcharan");
}
navi()

function message(){
    console.log("Hii");
    console.log("I'm learning a javascript function concept")
    console.log(123);
}
message()

function numbers(){
    for (let i=1; i<=5 ; i++){
        console.log(i);
    }
}
numbers()

function check(){
    if(5 == 5)
    {
        console.log(" if Condition is satisfy");
    }
}
check()

function details(){
    console.log("name :Ramcharan");
    console.log("qualification : B.Tech.");
    console.log("role : developer");
}
details()

function company(){
    console.log("Stackly");
}
company()

function welcomeUser(){
    console.log("Welcomed Users");
}
welcomeUser()
welcomeUser()
welcomeUser()

function fun1(){
    console.log("I'm function 1");
}
function fun2(){
    console.log("I'm function 2");
}
fun1()
fun2()

// Parameters & Arguments

function no(a){
    console.log(a);
}
no(10);

function num(a,b){
    console.log("a : ",a);
    console.log("b : ",b);
}
num(10,20)

function add(a,b){
    console.log("Add : ", a+b);
}
add(25,67)

function sub(a,b){
    console.log("Sub : ",a-b);
}
sub(20,10)

function multiply(a,b){
    console.log("Multiply : ", a*b);
}
multiply(5,5)

function divide(a,b){
    console.log("Divide : ",a/b);
}
divide(100,2)

function student(name, age){
    console.log("Name :", name);
    console.log("Age :", age);
}
student("Nivar", 22);

function employee(name, role, salary){
    console.log("Name :", name);
    console.log("Role :", role);
    console.log("Salary :", salary);
}
employee("Nivarthini", "Developer", 300000)

function fourparameter(a,b,c,d){
    console.log("Four Paramerts:",a+b+c+d);
}
fourparameter(10,40,50,90)

function sixparameters(blood, sky, lemon,tree, rose,gold){
    console.log("Blood color:",blood);
    console.log("Sky color:",sky);
    console.log("Lemon color:",lemon);
    console.log("Tree color:",tree);
    console.log("Rose color:",rose);
    console.log("Gold color:",gold);
}
sixparameters("red", "blue", "yellow", "green", "pink"," gold")

// Default Parameter

function student(name, department="Devops", cgpa){
    console.log("Name :", name);
    console.log("Department :", department);
    console.log("CGPA :", cgpa);
}
student("Reena",undefined , 9.0);

function user(name, age=18){
    console.log("Name :", name);
    console.log("Age :", age);
}
user("Arjun")

function employee(name, role="Developer"){
    console.log("Name :", name);
    console.log("Role :", role);
}
employee("Ravi")

function form(name, department, cgpa, disability ="No"){
    console.log("Name :", name);
    console.log("Department :", department);
    console.log("CGPA :",cgpa);
    console.log("Disability :",disability);
}
form("Krish", "Developer",8.9, "Yes")
form("Deepithi", "AL/ML", 9.0)

function normalparameter(day, month, year ="12 Months"){
    console.log("Day :", day);
    console.log("Month :", month);
    console.log("Year :",year);
}
normalparameter("7 days", "4 weeks")

// Return

function add1(a,b){
    return a+b
}
add1(10,90)
let adds = add1(10,90)
    console.log("Adds :" ,adds);

function sub(a, b){
    return a-b
}
sub(40,90)
let subtract = sub(40,90)
console.log("Subtraction :", subtract);

function multi(a, b){
    return a*b
}
multi(4,10)
let multiplies = multi(4, 10)
console.log("Multiplication:", multiplies);

function div1(a, b){
    return a/b
}
div1(70,2)
let division = div1(70,2)
console.log("Division :", division)

function salary(){
    return 40000;
}
let salaries = salary()
console.log("Salary:", salaries);

function employee(salary){
    return(salary)
}
employee(10000)
let sal = employee(10000)
console.log("Employee Slary :", sal);

function user(name){
    return(name)
}
user("Surya")
let username = user("Surya")
console.log("Person's name :",username);

function result(a){
    if(a>=35){
        return "pass";
    }
    else{
        return "fail";
    }
}
let res = result(40)
console.log("Result:",res);

function product(price, discount){
    return discount
}
let discount = product(123, " 40 %")
console.log("Discount value:", discount);

function operationadd1(a,b){
    return(a+b)
}
let operator = operationadd1(10,40)
function operationadd2(value){
    console.log("Arithmetic operation:", value)
}
operationadd2(operator)


// Outer Scope

var a= 10
function inside (){
    console.log("Outer Scope Variable:",a);
}
inside()

let obj = {
    name : "Ram",
    designation : "Developer"
}
function object(){
    console.log(obj.name);
    console.log(obj.designation);
}
object()

var salary = 10000
function addbonous(bonous){
    console.log("Add Bonous and Salary:",salary + bonous);
}
addbonous(50000)

let employeedetail={
    name : "Sai Teja",
    age : 29,
    role : "Developer"
}
function details(emp ={}){
    console.log(emp.name);
    console.log(emp.age);
    console.log(emp.role);
}
details(employeedetail);

let rose = "roses"
function one(){
    console.log(rose)
}

function two(){
    console.log(rose)
}
one()
two()

// Named, Anonymous & Arrow Function

function named(movie){
    console.log("Movie name:", movie);
}
named("Billa")

let anonymous = function(song){
    console.log("Song name:" ,song)
}
anonymous("MAss Masala")

let arrow = (hero)=>{
    console.log("Hero name :" ,hero);

}
arrow("vijay")

let arrow2 =(a1, a2)=>{
    console.log("Result :", a1+a2);

}
arrow2(40,80)

function combine (a,b){
    console.log(a+b);
}
combine(10,20)
let anonymous1 = function(a,b){
    console.log(a+b);
}
anonymous1(10,20)
let arrow3 = (a,b)=>{
    console.log(a+b);

}
arrow3(10,20);

// IIFE

(function(mess){
    console.log(mess);
})
("Hello JavaScript");

(function(name)
{
    console.log("Hello " + name);
})
("Arjun");

(function(product, discount){
    alert(`special offer ${product} on discount of ${discount} %`)
})
("Laptop", 20);

// Callback & Higher-Order Functions

function add1(callback,a,b){
    console.log("add",a+b);
    callback(a,b);
}
function callback(a ,b){
    console.log(a,b)
}
add1(callback,40,80);

function subs (a,b){
    console.log("sub",a-b)

};
function added  (callback,a,b){
    console.log("add",a+b);
    callback(a,b);
}
added(subs,10,40)