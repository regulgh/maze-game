import { elevator, exit } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor";
import turn from "./turn";

const floor0: Level = Array.from({length: 120}, () => new Array(120).fill(null))

const setCorridors = () => {
  corridor(50, [98, 1], 'hor', floor0)
  corridor(52, [97, 51], 'slash', floor0 ,true)
}

const setTurns = () => {
  turn([undefined, '–', '–', '/', null, undefined, '/', '–'], [98, 1], floor0)
  turn(['–', '/', null, null, '/', '–', '–', undefined], [98, 50], floor0)
}

const setOther = () => {
  floor0[45][103] = { ...elevator, dir: [6], levels: [
    { level: -1, position: [], right: false},
    { level: 1, position: [31, 50], right: true}
  ]}

  floor0[99][0] = exit
}



setCorridors()
setTurns()
setOther()

export default floor0