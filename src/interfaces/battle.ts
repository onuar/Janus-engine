import AttackToCard from './attacktocard_base';
import AttackToHero from './attacktohero_base';

interface Battle {
    attack(context: AttackToCard): void;
    attackToHero(context:AttackToHero): void;
}

export default Battle; 