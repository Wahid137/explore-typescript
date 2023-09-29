import { isPlayer } from "../interfaces/isPlayer";

export class Player implements isPlayer {
    public name: string;
    public age: number;
    readonly country: string;
     
     constructor(n: string, a: number, c: string){
         this.name = n;
         this.age = a;
         this.country = c
     }

     getProperty(){
        return this.age
     }

     play(){
         console.log(`${this.name} from ${this.country} is playing`)
     }
 }
 