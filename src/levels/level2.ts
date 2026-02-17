import { elevator, staircase } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor";
import room from "./rooms/room";
import turn from "./turn";

const floor2: Level = Array.from({ length: 120 }, () => new Array(120).fill(null))

const setCorridors = () => {
  corridor(48, [2, 96], 'slash', floor2)
  corridor(12, [50, 49], 'ver', floor2)
  corridor(12, [61, 49], 'backslash', floor2)
  corridor(15, [73, 61], 'slash', floor2)
}

const setTurns = () => {
  turn([undefined, '/', null, '/', '/', '|', null, '|'], [49, 49], floor2)
  turn(['|', null, '|', null, '\\', '–', '\\', null], [61, 49], floor2)
  turn([null, '\\', undefined, '|', '|', null, '/', undefined], [73, 61], floor2)
}

const setRooms = () => {
  room([55, 40], [65, 48], floor2, [61, 48])
}

const setOther = () => {
  floor2[1][97] = { ...staircase, levels: [
    { level: 1, position: [48, 69], right: true},
    { level: 3, position: [], right: false}
  ]}
  floor2[88][46] = { ...elevator, levels: [
    { level: 1, position: [], right: false},
    { level: 3, position: [70, 70], right: true}
  ]}
}

setCorridors()
setTurns()
setRooms()
setOther()

export default floor2