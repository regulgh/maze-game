import { elevator, staircase } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor";
import turn from "./turn";

const floor1: Level = Array.from({ length: 120 }, () => new Array(120).fill(null))

const setCorridors = () => {
  corridor(50, [48, 69], 'slash', floor1)
  corridor(18, [97, 3], 'hor', floor1)
  corridor(18, [79, 3], 'ver', floor1)
  corridor(48, [31, 50], 'slash', floor1)
}

const setTurns = () => {
  turn(['|', null, '|', '|', null, undefined, '–', '–'], [97, 3], floor1)
  turn(['–', '–', null, null, '/', '–', '–', undefined], [97, 20], floor1)
  turn([undefined, '/', null, '/', '/', '|', null, '|'], [78, 3], floor1)
}

const setOther = () => {
  floor1[30][51] = { ...elevator, dir: [6], levels: [
    { level: 0, position: [46, 102], right: true},
    { level: 2, position: [], right: false}
  ]}

  floor1[47][70] = { ...staircase, dir: [6], levels: [
    { level: 0, position: [], right: false},
    { level: 2, position: [2, 96], right: true}
  ]}
}

setCorridors()
setTurns()
setOther()

export default floor1