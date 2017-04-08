import HeroBase from '../interfaces/hero_base';
import User from './user';
import DeckBase from '../interfaces/deck_base';
import Collection from '../interfaces/collection';
import CardBase from '../interfaces/card_base';

class Hero implements HeroBase {
    initHealth: number;
    selectedDeck: DeckBase;
    droppedCards: Collection<CardBase>;
    holdCards: Collection<CardBase>;
    deadCards: Collection<CardBase>;

    health: number;
    user: User;

    constructor(user: User, health: number) {
        this.health = health;
        this.user = user;
    }
}

export default Hero;