import type { WalkTile } from "../types"

export const walkTile: WalkTile = {
  type: 'walkable',
  char: ' ',
}

export const horWalkTile: WalkTile = {
  ...walkTile,
}

export const verWalkTile: WalkTile = {
  ...walkTile,
}

export const slashWalkTile: WalkTile = {
  ...walkTile,
}

export const backSlashWalkTile: WalkTile = {
  ...walkTile,
}