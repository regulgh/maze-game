export interface Exit{
  type: 'exit'
  char: 'E'
}

export interface LevelChange {
  level: number
  position: number[]
  right: boolean
}

export interface Elevator{
  type: 'elevator'
  char: '🛗'
  levels?: LevelChange[]
}

export interface Staircase{
  type: 'staircase'
  char: '🪜'
  levels?: LevelChange[]
}

export interface WalkTile{
  type: 'walkable'
  char: ' '
}

export interface WallTile{
  type: 'wall'
  char: '\u2013' | '|' | '/' | '\\'
}

export type WalkableTile = 
  Exit 
  | Elevator
  | Staircase
  | WalkTile

export type GameTile = WalkableTile | WallTile

export type Level = Array<Array<GameTile | null>>
