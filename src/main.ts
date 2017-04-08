import container from './config/ioc_config';
import Battle from './interfaces/battle';
import TYPES from './constants/identifiers';
import BattleField from './entities/battlefield';
import AttackToCard from './interfaces/attacktocard_base';
import * as TypeMoq from "typemoq";

let attackCardContextMock: TypeMoq.IMock<AttackToCard> = TypeMoq.Mock.ofType<AttackToCard>();

var battleField = container.get<Battle>(TYPES.Battle);
battleField.attack(attackCardContextMock.object);

let battleField2: BattleField = new BattleField();
// battleField2.attack