export interface GameTile {
  type: string
  char: string
  dir?: number[]
}

export interface Exit extends  GameTile{
  type: 'exit'
  char: 'E'
}

export interface Elevator extends GameTile{
  type: 'elevator'
  char: '#'
}

export interface WalkableTile extends GameTile {
  type: 'walkable'
  char: ' '
}

export interface WallTile extends Omit<GameTile, 'dir'> {
  type: 'wall'
  char: '\u2013' | '|' | '/' | '\\'
}