import type { GameTile, WalkableTile } from "../types";

export const isWalkable = (tile: GameTile | null): tile is WalkableTile => {
  if(
    tile && (
      tile.type === 'walkable'
      || tile.type === 'exit'
      || tile.type === 'elevator'
      || tile.type === 'staircase'
    )
  ) 
    return true

  return false
}