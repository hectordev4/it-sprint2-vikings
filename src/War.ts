import { Saxon } from "./Saxon";
import { Viking } from "./Viking";

export class War {
    vikingArmy: Viking[];
    saxonArmy: Saxon[];

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking:Viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon:Saxon){
        this.saxonArmy.push(saxon);
    }

    randomSaxon = () => {
        const randomIndex:number = Math.floor(Math.random() * this.saxonArmy.length);
        return this.saxonArmy[randomIndex];
    }

    randomViking = () => {
        const randomIndex = Math.floor(Math.random() * this.vikingArmy.length);
        return this.vikingArmy[randomIndex];
    }

    vikingAttack(){
        if (this.saxonArmy.length === 0) return "No Saxons left!";
        if (this.vikingArmy.length === 0) return "No Vikings left!";

        const victim = this.randomSaxon();
        const attacker = this.randomViking();

        const message = victim.receiveDamage(attacker.strength);

        if (victim.health <= 0) {
            this.saxonArmy.splice(this.saxonArmy.indexOf(victim), 1);
        }

        return message;
    }

    saxonAttack(){
        if (this.vikingArmy.length === 0) return "No Vikings left!";
        if (this.saxonArmy.length === 0) return "No Saxons left!";

        const victim = this.randomViking();
        const attacker = this.randomSaxon();

        const message = victim.receiveDamage(attacker.strength);

        if (victim.health <= 0) {
            this.vikingArmy.splice(this.vikingArmy.indexOf(victim), 1);
        }

        return message;
    }

    showStatus(){
        if (this.saxonArmy.length === 0) return 'Vikings have won the war of the century!'
        if (this.vikingArmy.concat.length === 0) return 'Saxons have fought for their lives and survive another day...'
        if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) return 'Vikings and Saxons are still in the thick of battle.'
    }
}