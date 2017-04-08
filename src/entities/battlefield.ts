import Battle from '../interfaces/battle';
import { injectable } from 'inversify';
import AttackToCardContext from '../interfaces/attacktocard_base';
import AttackToHeroContext from '../interfaces/attacktohero_base';

@injectable()
class BattleField implements Battle {
    constructor() {

    }

    attack(context: AttackToCardContext): void {
        console.log("card is attacked");
    }
    attackToHero(context: AttackToHeroContext): void {
        console.log("hero is attacked");
    }
}

export default BattleField;