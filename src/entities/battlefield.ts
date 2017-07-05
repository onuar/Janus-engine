import Battle from '../interfaces/battle';
// import { injectable } from 'inversify';
import AttackToCardContext from '../interfaces/attacktocard_base';
import AttackToHeroContext from '../interfaces/attacktohero_base';
import BattleBase from '../interfaces/battle_base';
import Hero from './hero';
import HeroBase from '../interfaces/hero_base';

// @injectable()
class BattleField extends BattleBase {
    constructor(hero1: HeroBase, hero2: HeroBase) {
        super(hero1, hero2);
    }

    protected attackToHeroTemplate(context: AttackToHeroContext, attacked: HeroBase): void {
        console.log("hero is attacked");
    }
    protected attackToCardTemplate(context: AttackToCardContext): void {
        console.log("card is attacked");
    }
}

export default BattleField;