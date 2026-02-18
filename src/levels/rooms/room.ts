import { walkTile } from "../../tiles/walk"
import { horWallTile, verWallTile } from "../../tiles/walls"
import type { GameTile, Level } from "../../types"

export const verLine = (
  start: number[],
  count: number,
  tile: GameTile,
  floor: Level,
  up: boolean = false
) => {
  for(let x = start[0]; x <= start[0] + count; x = up ? x - 1 : x + 1)
    floor[x][start[1]] = tile
}

export const horLine = (
  start: number[],
  count: number,
  tile: GameTile,
  floor: Level,
  left: boolean = false,
) => {
  for(let y = start[1]; y <= start[1] + count; y = left ? y - 1 : y + 1)
    floor[start[0]][y] = tile
}

const room = (
  topLeft: number[],
  bottomRight: number[],
  floor: Level,
  entrence: number[] | null = null,
  color: string | undefined = undefined
) => {
  const hor = bottomRight[1] - topLeft[1], ver = bottomRight[0] - topLeft[0]

  horLine([topLeft[0], topLeft[1] + 1], hor - 2, { ...horWallTile, color }, floor)
  horLine([bottomRight[0], topLeft[1] + 1], hor - 2, { ...horWallTile, color }, floor)

  verLine([topLeft[0] + 1, topLeft[1]], ver - 2, { ...verWallTile, color }, floor)
  verLine([topLeft[0] + 1, bottomRight[1]], ver - 2, { ...verWallTile, color }, floor)

  for(let i = topLeft[0] + 1; i < bottomRight[0]; ++i)
    for(let j = topLeft[1] + 1; j < bottomRight[1]; ++j)
      floor[i][j] = walkTile

  if(entrence)
    floor[entrence[0]][entrence[1]] = walkTile
}

export default room