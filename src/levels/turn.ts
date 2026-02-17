import { walkTile } from "../tiles/walk";
import { backSlashWallTile, horWallTile, slashWallTile, verWallTile } from "../tiles/walls";
import type { GameTile } from "../types";
import { isWalkable } from "../utils/guards";

const turn = (
  directions: Array<'\u2013' | '|' | '/' | '\\' | null | undefined>,
  coords: number[],
  floor: Array<Array<GameTile | null>>
) => {
  const x = coords[0], y = coords[1]

  let tile = structuredClone(floor[x][y])

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
        floor[xi][yi] = horWallTile
        break
      case '|':
        floor[xi][yi] = verWallTile
        break
      case '/':
        floor[xi][yi] = slashWallTile
        break
      case '\\':
        floor[xi][yi] = backSlashWallTile
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