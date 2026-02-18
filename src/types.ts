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

export interface Window{
  type: 'window'
  char: '🪟'
}

export interface Sun{
  type: 'sun'
  char: '☀️'
}

export const labEquipmentChars =  [
  '🥼',
  '🔬',
  '📟',
  '💉'
] as const

export interface LabEquipment{
  type: 'window'
  char: typeof labEquipmentChars[number]
}

export interface WalkTile{
  type: 'walkable'
  char: ' '
  lose?: boolean
}

export interface WallTile{
  type: 'wall'
  char: '\u2013' | '|' | '/' | '\\'
  color?: string
}

export type WalkableTile = 
  Exit 
  | Elevator
  | Staircase
  | WalkTile

export type GameTile = WalkableTile | WallTile | Window | LabEquipment | Sun

export type Level = Array<Array<GameTile | null>>
