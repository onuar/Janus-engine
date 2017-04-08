import container from './config/ioc_config';
import Battle from './interfaces/battle';
import TYPES from './constants/identifiers';
import BattleField from './entities/battlefield';
import AttackToCardContext from './interfaces/attacktocard_base';
import * as TypeMoq from "typemoq";
import AttackToHeroContext from './interfaces/attacktohero_base';

let attackCardMock: TypeMoq.IMock<AttackToCardContext> = TypeMoq.Mock.ofType<AttackToCardContext>();
let attackHeroMock: TypeMoq.IMock<AttackToHeroContext> = TypeMoq.Mock.ofType<AttackToHeroContext>();

var battleField = container.get<Battle>(TYPES.Battle);
battleField.attack(attackCardMock.object);
battleField.attackToHero(attackHeroMock.object);