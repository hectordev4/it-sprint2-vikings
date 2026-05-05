import { Soldier } from "./Soldier";

export class Viking extends Soldier{

    name: string;

    constructor(newName:string, newHealth:number, newStrength:number){
        super(newHealth, newStrength)
        this.name = newName;
    }

    receiveDamage(damage: number){
        this.health = this.health - damage;

        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry(){
        return `Odin Owns You All!`
    }
}