import {FieldValue, IField, IGame} from './game.interface';
import {Game} from './Game';

export class Field implements  IField {

  value: FieldValue;
  grid: Field[][];
  realValue: FieldValue;

  shoot(): IGame {
    const  newGrid: Field[][] = [];
    for(let i = 0; i < this.grid.length; i++){
      for(let x = 0; x < this.grid.length; x++){
        const  field: Field = this.grid[i][x];
        newGrid[i][x] = new Field(field.value, newGrid, field.realValue);
        if(this === field){
          newGrid[i][x] = new Field(field.realValue, newGrid, field.realValue);
        }
      }
    }
    return new Game(newGrid, this.didWin(newGrid));
  }

  didWin(field: Field[][]): boolean {
    let win = true;
    const discovered = true;
    for (let i = 0; i < this.grid.length; i++) {
      for (let x = 0; x < this.grid.length; x++) {
        if (field[i][x].value === FieldValue.SHIP_PART){
          win = false;
        }
      }
    }
  }

  constructor(value: FieldValue, field: Field[][], realValue: FieldValue) {
    this.value = value;
    this.grid = field;
    this.realValue = realValue;
  }
}
