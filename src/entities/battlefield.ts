import Battle from '../interfaces/battle';
import { injectable } from 'inversify';
import AttackToCard from '../interfaces/attacktocard_base';
import AttackToHero from '../interfaces/attacktohero_base';

@injectable()
class BattleField implements Battle {
    constructor() {

    }

    attack(context: AttackToCard): void {
        console.log("card is attacked");
    }
    attackToHero(context: AttackToHero): void {
        console.log("hero is attacked");
    }
}

export default BattleField;