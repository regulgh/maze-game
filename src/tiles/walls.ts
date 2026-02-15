import type { WallTile } from "../types"

export const horWallTile: WallTile = {
  type: 'wall',
  char: '–',
}

export const verWallTile: WallTile = {
  ...horWallTile,
  char: '|'
}

export const slashWallTile: WallTile = {
  ...horWallTile,
  char: '/'
}

export const backSlashWallTile: WallTile = {
  ...horWallTile,
  char: '\\'
}