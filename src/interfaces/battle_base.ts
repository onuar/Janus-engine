import Battle from './battle';
import AttackToCardContext from './attacktocard_base';
import AttackToHeroContext from './attacktohero_base';
import HeroBase from './hero_base';

abstract class BattleBase implements Battle {
    protected hero1: HeroBase;
    protected hero2: HeroBase;
    private waitingFor: HeroBase;

    constructor(hero1: HeroBase, hero2: HeroBase) {
        this.hero1 = hero1;
        this.hero2 = hero2;

        this.waitingFor = hero1;
    }

    attackToHero(context: AttackToHeroContext): void {
        this.attackToHeroTemplate(context);
        this.turn();
    }
    attackToCard(context: AttackToCardContext): void {
        this.attackToCardTemplate(context);
        this.turn();
    }

    protected abstract attackToHeroTemplate(context: AttackToHeroContext): void;

    protected abstract attackToCardTemplate(context: AttackToCardContext): void;

    turn(): void {
        this.waitingFor = this.waitingFor == this.hero1 ? this.hero2 : this.hero1;
        console.log("waiting for " + this.waitingFor.user.name);
    }
}

export default BattleBase;