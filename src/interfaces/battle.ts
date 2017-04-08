import AttackToCardContext from './attacktocard_base';
import AttackToHeroContext from './attacktohero_base';

interface Battle {
    attack(context: AttackToCardContext): void;
    attackToHero(context:AttackToHeroContext): void;
}

export default Battle; 