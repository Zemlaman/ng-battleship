import {Injectable} from '@angular/core';
import {IField, IGame} from './game.interface';
import {Game} from './Game';

@Injectable({
  providedIn: 'root'
})
export class GameFactoryService {

  generate(): IGame {
    const grid = this.createField();
    const didWin = false;
    return new Game(didWin, grid);
  }

  createField(): IField[][]{
    const field: IField[][] = [];

    let fieldValue;

    for(let i = 0; i < 4; i++){
      field[i] = [];
      for(let x = 0; x < 4; x++){
        field[x] = [];
        fieldValue = Math.round(Math.random() * (3));
        if (fieldValue === 0) {
          field[i][x].value = 0;
        } else if (fieldValue === 1) {
          field[i][x].value =1;
        }
      }
    }
  }
  return field;
}
