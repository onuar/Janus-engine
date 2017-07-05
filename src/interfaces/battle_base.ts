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

    start(): void {

    }

    attackToHero(context: AttackToHeroContext): void {
        this.attackToHeroTemplate(context, this.waitingFor);
        this.turn();
    }
    attackToCard(context: AttackToCardContext): void {
        this.attackToCardTemplate(context);
        this.turn();
    }

    turn(): void {
        this.waitingFor = this.waitingFor == this.hero1 ? this.hero2 : this.hero1;
        console.log("waiting for " + this.waitingFor.user.name);
    }

    checkGame(): void {
        if (this.hero1.health <= 0) {
            console.log("hero 2 won");
            this.end();
        } else if (this.hero2.health <= 0) {
            console.log("hero 1 won");
            this.end();
        } else if ((this.hero1.droppedCards.Count() == 0 && this.hero1.holdCards.Count() == 0)
            || (this.hero2.droppedCards.Count() == 0 && this.hero2.holdCards.Count() == 0)) {
            console.log("there is no winner");
            this.end();
        }
    }

    end(): void {
        console.log("game is over.");
    }

    protected abstract attackToHeroTemplate(context: AttackToHeroContext, attacked: HeroBase): void;

    protected abstract attackToCardTemplate(context: AttackToCardContext): void;

}

export default BattleBase;