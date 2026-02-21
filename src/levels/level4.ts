import { elevator } from "../tiles/other";
import { walkTile } from "../tiles/walk";
import type { Level } from "../types";
import corridor from "./corridor"

const floor4: Level = Array.from({ length: 130 }, () => new Array(130).fill(null))

const setCorridors = () => {
  corridor(11, [70, 70], 'slash', floor4, true)
}

const setOther = () => {
  floor4[71][69] = { ...elevator, levels: [
    { level: 3, position: [70, 70], right: true},
    { level: 5, position: [70, 70], right: true}
  ]}

  floor4[69][71] = { ...walkTile, lose: true}
}

setCorridors()
setOther()

export default floor4