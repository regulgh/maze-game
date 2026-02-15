import type { WalkableTile } from "../types"

export const walkTile: WalkableTile = {
  type: 'walkable',
  char: ' ',
}

export const horWalkTile: WalkableTile = {
  ...walkTile,
  dir: [4, 5],
}

export const verWalkTile: WalkableTile = {
  ...walkTile,
  dir: [2, 7],
}

export const slashWalkTile: WalkableTile = {
  ...walkTile,
  dir: [3, 6],
}

export const backSlashWalkTile: WalkableTile = {
  ...walkTile,
  dir: [1, 8],
}