import { backSlashWalkTile, horWalkTile, slashWalkTile, verWalkTile } from "../tiles/walk";
import { backSlashWallTile, horWallTile, slashWallTile, verWallTile } from "../tiles/walls";
import type { GameTile, WalkTile, WallTile } from "../types";

const corridor = (
  length: number,
  start: number[],
  direction: 'ver' | 'hor' | 'slash' | 'backslash',
  floor: Array<Array<GameTile | null>>,
  reverse: boolean = false
) => {
  let 
    walkTile: WalkTile,
    wallTile: WallTile,
    horMult: number = 1,
    verMult: number = 1,
    slashMult: number = 1

  switch (direction) {
    case 'ver':
      walkTile = verWalkTile
      wallTile = verWallTile
      verMult = 0
      break
    case 'hor':
      walkTile = horWalkTile
      wallTile = horWallTile
      horMult = 0
      break
    case 'slash':
      walkTile = slashWalkTile
      wallTile = slashWallTile
      slashMult = -1
      break
    case 'backslash':
      walkTile = backSlashWalkTile
      wallTile = backSlashWallTile
      break
  }

  if(reverse)
    start = [start[0] - (length - 1) * horMult, start[1] - (length - 1) * verMult * slashMult]
  
  for(let i = 0; i < length; ++i){
    const
      x = start[0] + i * horMult,
      y = start[1] + i * verMult * slashMult
    floor[x][y] = walkTile
    floor[x - 1 * Number(direction === 'hor')][y - 1 * Number(direction !== 'hor')] = wallTile
    floor[x + 1 * Number(direction === 'hor')][y + 1 * Number(direction !== 'hor')] = wallTile
  }
}

export default corridor