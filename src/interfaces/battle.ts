import AttackToCardContext from './attacktocard_base';
import AttackToHeroContext from './attacktohero_base';

interface Battle {
    start(): void;

    attackToHero(context: AttackToHeroContext): void;

    attackToCard(context: AttackToCardContext): void;

    turn(): void;

    checkGame(): void;

    end(): void;
}

export default Battle; 