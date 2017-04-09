import AttackToCardContext from './attacktocard_base';
import AttackToHeroContext from './attacktohero_base';

interface Battle {
    attackToHero(context: AttackToHeroContext): void;
    
    attackToCard(context: AttackToCardContext): void;
    
    turn(): void;
}

export default Battle; 