export enum FieldValue {
  WATER, SHIP_PART, PART_OF_DESTROYED_SHIP, UNKNOWN
}

export interface IField {
  readonly value: FieldValue;

  shoot(): IGame;
}

export interface IGame {
  readonly grid: IField[][];
  readonly didWin: boolean;
}
