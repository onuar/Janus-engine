import container from './config/ioc_config';
import Battle from './interfaces/battle';
import TYPES from './constants/identifiers';
import BattleField from './entities/battlefield';
import AttackToCardContext from './interfaces/attacktocard_base';
import * as TypeMoq from "typemoq";
import AttackToHeroContext from './interfaces/attacktohero_base';
import HeroBase from './interfaces/hero_base';
import Hero from './entities/hero';
import User from './entities/user';

// let attackCardMock: TypeMoq.IMock<AttackToCardContext> = TypeMoq.Mock.ofType<AttackToCardContext>();
let attackHeroMock: TypeMoq.IMock<AttackToHeroContext> = TypeMoq.Mock.ofType<AttackToHeroContext>();

//with ioc
// var battleField = container.get<Battle>(TYPES.Battle);
// battleField.attackToHero(attackHeroMock.object);

// without ioc
let hero1: TypeMoq.IMock<HeroBase> = TypeMoq.Mock.ofType<HeroBase>();
let hero2: TypeMoq.IMock<HeroBase> = TypeMoq.Mock.ofType<HeroBase>();

var user1: User = { name: "Hero 1" };
var user2: User = { name: "Hero 2" };

hero1.setup(_ => _.user).returns(() => user1);
hero2.setup(_ => _.user).returns(() => user2);

var battleField = new BattleField(hero1.object, hero2.object);
battleField.attackToHero(attackHeroMock.object);