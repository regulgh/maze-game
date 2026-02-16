import type { GameTile, WalkableTile } from "../types";

export const isWalkable = (tile: GameTile): tile is WalkableTile => {
  if(tile.type === 'wall') return false;
  return true
}