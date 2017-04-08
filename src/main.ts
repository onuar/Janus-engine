import container from './config/ioc_config';
import Battle from './interfaces/battle';
import TYPES from './constants/identifiers';

var battleField = container.get<Battle>(TYPES.Battle);
battleField.attackToHero1();