import { Container } from 'inversify';
import "reflect-metadata";
import TYPES from '../constants/identifiers';

import Battle from '../interfaces/battle';
import BattleField from '../entities/battlefield';

var container = new Container();

container.bind<Battle>(TYPES.Battle).to(BattleField);

export default container;