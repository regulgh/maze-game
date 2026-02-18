import { labEquipment } from "../../tiles/other"
import { labEquipmentChars, type Level } from "../../types"
import room from "./room"

const horLabLine = (
  start: number[],
  count: number,
  floor: Level,
  left: boolean = false,
) => {
  for(let y = start[1]; y <= start[1] + count; y = left ? y - 1 : y + 1){
    const tile = { ...labEquipment, char: labEquipmentChars[Math.floor(Math.random()*4)]}

    floor[start[0]][y] = tile
  }
}

const verLabLine = (
  start: number[],
  count: number,
  floor: Level,
  up: boolean = false
) => {
  for(let x = start[0]; x <= start[0] + count; x = up ? x - 1 : x + 1){
    const tile = { ...labEquipment, char: labEquipmentChars[Math.floor(Math.random()*4)]}

    floor[x][start[1]] = tile
  }
    
}

const lab = (
  topLeft: number[],
  bottomRight: number[],
  floor: Level,
  dir: 'hor' | 'ver',
  entrence: number[] | null = null,
  color: string | undefined = undefined,
) => {
  room(topLeft, bottomRight, floor, entrence, color)

  const hor = bottomRight[1] - topLeft[1], ver = bottomRight[0] - topLeft[0]

  if(dir === 'hor'){
    horLabLine([topLeft[0] + 1, topLeft[1] + 1], hor - 2, floor)
    horLabLine([bottomRight[0] - 1, topLeft[1] + 1], hor - 2, floor)
  } else {
    verLabLine([topLeft[0] + 1, topLeft[1] + 1], ver - 2, floor)
    verLabLine([topLeft[0] + 1, bottomRight[1] - 1], ver - 2, floor)
  }
}

export default lab