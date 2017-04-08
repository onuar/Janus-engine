import User from '../entities/user';
import DeckBase from './deck_base';
import Collection from './collection';
import CardBase from './card_base';

interface HeroBase {
    user: User;
    initHealth: number;
    health: number;
    selectedDeck: DeckBase;
    droppedCards: Collection<CardBase>
    holdCards: Collection<CardBase>
    deadCards: Collection<CardBase>

}

export default HeroBase;