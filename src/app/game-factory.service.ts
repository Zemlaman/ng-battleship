import {Injectable} from '@angular/core';
import {IGame} from './game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameFactoryService {

  generate(): IGame {
    throw new Error('You should implement this');
  }
}
