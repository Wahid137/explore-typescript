import { isPlayer } from './../.history/src/interfaces/isPlayer_20230930024708';
/* let playerName = "Rahim";

console.log(playerName)

playerName = 34 X*/

// -----------------------------------------

/* function multiply(a: number,b:number){
    return a*b;
}
console.log(multiply(2, 2)); */

// -----------------------------------------

/* let mixed = ["apple", 3, true, {}]

mixed.push("naeem")

mixed.push({
    name: "rakib",
    age: 34
})
console.log(mixed) */

// -----------------------------------------

/* let person = {
    name: "mashrafi",
    age: 38,
    isCaptain: true,
}

person.name = "tamim"
person.country = "bangladesh" //X */

// -----------------------------------------

//Explicitly
/*
For variable
---------------
let a: string;

let b: number;

a = "shanto"
b = 23
*/

/* For Array
---------------
//let players: string[] = ["Messi", "rondaldo"]
/* let players: string[] = []
players.push("Messi")
players.push(32) */

/* let players: (string | number)[] = ["sakib", 32]
let c: {
    name: string,
    age: number,
    adult: boolean
}
c = [] */

// Dynamic Type
// -----------------------------------------

/* let a: any;
a = 5;
a = "naem" */

/* let a: any[] = []
a.push("bangladesh")
a.push(34)

//object
let b: {
    name: any,
    age: any
}
b={
    name: 32,
    age: "na"
}

console.log(b) */

// -----------------------------------------

//How to use Functions

/* let myFunc: Function;

myFunc = () =>{
    console.log("Hello")
}

myFunc = 5; */

/* const myFunc = (a: string, b: string, c?: string = "tuhin") =>{  //? optional //default string = "tuhin"
    console.log(c);
    console.log(`Hello ${a} ${b}`)
}
myFunc("A", "B", "C") 

//difference void and undefined
void returns empty and undefined himself a value value



*/
/* const myFunc = (a: number, b: number, c:string="true"): number =>{
    console.log(c)
    return a*b;
}

console.log(myFunc(4, 5, "false"))
 */

// -----------------------------------------

//Type Aliases

/* const userDetails = (id: string | number, user: {name: string, age: number}) =>{
    console.log(`User is ${id}, name is ${user.name}`)
} */

/* type stringOrNum = string | number;
type userType = {name: string, age: number}

const userDetails = (id: stringOrNum, user: userType) =>{
    console.log(`User is ${id}, name is ${user.name}`)
} */

// -----------------------------------------

//Function signature

/* let add: (x: number, y:number)=> number;

add = (a: number, b: number) =>{
    return a*b
} */

/* let calculation: (x: number, y: number, z: string) => number

calculation = (a: number, b: number, c: string) =>{
    if(c==="add"){
        return a+b;
    }
    else{
        return a-b
    }
}

console.log(calculation(5, 6, "add")) */

/* let userDetails: (id: string | number , userInfo: {
    name: string,
    age: number
}) => void

userDetails = (id: string | number , user: {
    name: string,
    age: number
}) =>{

} */

//Classes in typescripts

/* class Player {
    name: string;
    age: number;
    country: string;
    
    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c
    }
    play(){
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

const mashrafi = new Player("Mash", 44, "Ban")
const sakib = new Player("sakib", 44, "Ban")

const players: Player[] = [];

players.push(mashrafi)
players.push(sakib)
console.log(players) */

// -----------------------------------------


//Access Modifier

/* class Player {
   private name: string;
   readonly age: number;
   public country: string;
    
    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c
    }
    play(){
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

const mashrafi = new Player("Mash", 44, "Ban")
const sakib = new Player("sakib", 44, "Ban")

console.log(sakib.name)
console.log(sakib.age)
console.log(sakib.country) */

// -----------------------------------------

/* //Module System

import { Player } from "./classes/Player.js"

const mashrafi = new Player("Mash", 44, "Ban")
const sakib = new Player("sakib", 44, "Ban")

console.log(sakib.age)
console.log(sakib.country) */


// -----------------------------------------

//Interfaces 

//for Objects

/* interface RectangularOptions{
    width: number
    length: number
}

function drawRectangle(options: RectangularOptions){
    let width = options.width;
    let length = options.length
}

let threeDOptions = {
    width: 39,
    length: 2,
    height: 10
}

drawRectangle(threeDOptions) */

//interfaces for classes
import { Player } from "./classes/Player.js";
import { isPlayer } from "./interfaces/isPlayer.js";

const mashrafi = new Player("Mash", 44, "Ban")
let sakib: isPlayer
sakib = new Player("sakib", 44, "Ban")


const players: Player[] = [];

players.push(mashrafi)
players.push(sakib)
console.log(players) */




