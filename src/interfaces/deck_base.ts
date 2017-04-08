import CardBase from './card_base';
import Collection from './collection';

class DeckBase {
    UserId: number;
    Cards: Collection<CardBase>;
}

export default DeckBase;