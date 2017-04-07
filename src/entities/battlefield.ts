import Battle from '../interfaces/battle';
import { injectable } from 'inversify';

@injectable()
class BattleField implements Battle {
    constructor() {

    }

    public attack() {
        console.log("attacked");
    }
}

export default BattleField;