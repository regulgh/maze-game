import { elevator, exit } from "../tiles/other";
import { walkTile } from "../tiles/walk";
import type { Level } from "../types";
import corridor from "./corridor"
import turn from "./turn";

const floor0: Level = Array.from({length: 130}, () => new Array(130).fill(null))

const setCorridors = () => {
  corridor(65, [98, 16], 'hor', floor0)
  corridor(52, [97, 66], 'slash', floor0 ,true)

  corridor(11, [97, 32], 'slash', floor0, true)
  corridor(11, [71, 94], 'hor', floor0)
}

const setTurns = () => {
  turn([undefined, '–', '–', '/', null, undefined, '/', '–'], [98, 16], floor0)
  turn(['–', '/', null, null, null, '–', '–', '–'], [98, 65], floor0)

  turn([undefined, '/', null, '/', null, null, '/', '–'], [71, 92], floor0)
}

const setOther = () => {
  floor0[45][118] = { ...elevator, levels: [
    { level: -1, position: [], right: false},
    { level: 1, position: [31, 65], right: true}
  ]}

  floor0[99][15] = exit

  floor0[97][32] = { ...walkTile, lose: true}
  floor0[98][67] = { ...walkTile, lose: true}
  floor0[71][93] = { ...walkTile, lose: true}
}



setCorridors()
setTurns()
setOther()

export default floor0