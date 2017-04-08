import Battle from '../interfaces/battle';
import { injectable } from 'inversify';

@injectable()
class BattleField implements Battle {
    attackToHero1(): void {
        console.log("hero 1 is attacked");
    }
    attackToHero2(): void {
        console.log("hero 2 is attacked");
    }

    constructor() {

    }
}

export default BattleField;