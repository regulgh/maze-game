import floor0 from "../levels/level0"
import floor1 from "../levels/level1"
import floor2 from "../levels/level2"
import floor3 from "../levels/level3"
import floor4 from "../levels/level4"
import floor5 from "../levels/level5"

export const floors = [floor0, floor1, floor2, floor3, floor4, floor5]

export const startingPositions: {
  position: number[],
  floor: number
}[] = [
  { position: [55, 74], floor: 3 },
  { position: [62, 79], floor: 5 },
  { position: [76, 48], floor: 2 },
]

export default {}