import type { WalkTile } from "../types"

export const walkTile: WalkTile = {
  type: 'walkable',
  char: ' ',
}

export const horWalkTile: WalkTile = {
  ...walkTile,
  dir: [4, 5],
}

export const verWalkTile: WalkTile = {
  ...walkTile,
  dir: [2, 7],
}

export const slashWalkTile: WalkTile = {
  ...walkTile,
  dir: [3, 6],
}

export const backSlashWalkTile: WalkTile = {
  ...walkTile,
  dir: [1, 8],
}