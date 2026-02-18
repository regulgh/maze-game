import { walkTile } from "../tiles/walk";
import { backSlashWallTile, horWallTile, slashWallTile, verWallTile } from "../tiles/walls";
import type { GameTile } from "../types";
import { isWalkable } from "../utils/guards";

const turn = (
  directions: Array<'\u2013' | '|' | '/' | '\\' | null | undefined>,
  coords: number[],
  floor: Array<Array<GameTile | null>>,
  color: string | undefined = undefined
) => {
  const x = coords[0], y = coords[1]

  let tile = structuredClone(floor[x][y])

  const
    backSlashWall = { ...backSlashWallTile, color },
    slashWall = { ...slashWallTile, color },
    verWall = { ...verWallTile, color },
    horWall = { ...horWallTile, color }

  if(!isWalkable(tile)) 
    tile = walkTile

  if(directions.length !== 8)
    throw new Error(`Provide 8 directions for turn [${x}, ${y}]`)

  directions.forEach((d, i) => {
    ++i
    let xi = x
    let yi = y
    
    if(i === 1 || i === 4 || i === 6) --yi
    if(i === 3 || i === 5 || i === 8) ++yi
    if(i === 1 || i === 2 || i === 3) --xi
    if(i === 6 || i === 7 || i === 8) ++xi

    switch (d) {
      case '–':
        floor[xi][yi] = horWall
        break
      case '|':
        floor[xi][yi] = verWall
        break
      case '/':
        floor[xi][yi] = slashWall
        break
      case '\\':
        floor[xi][yi] = backSlashWall
        break
      case null:
        floor[xi][yi] = { ...walkTile }
        break
      case undefined:
        floor[xi][yi] = null
    }
  })

  floor[x][y] = tile
}

export default turn