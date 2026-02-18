import { elevator, staircase, window } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor";
import room from "./rooms/room";
import turn from "./turn";

const floor2: Level = Array.from({ length: 130 }, () => new Array(130).fill(null))

const setCorridors = () => {
  corridor(48, [17, 96], 'slash', floor2)
  corridor(12, [65, 49], 'ver', floor2)
  corridor(12, [76, 49], 'backslash', floor2)
  corridor(15, [88, 61], 'slash', floor2)
}

const setTurns = () => {
  turn([undefined, '/', null, '/', '/', '|', null, '|'], [64, 49], floor2)
  turn(['|', null, '|', null, '\\', '–', '\\', null], [76, 49], floor2)
  turn([null, '\\', undefined, '|', '|', null, '/', undefined], [88, 61], floor2)
}

const setRooms = () => {
  room([70, 40], [80, 48], floor2, [76, 48], 'black')
}

const setOther = () => {
  floor2[16][97] = { ...staircase, levels: [
    { level: 1, position: [48, 84], right: true},
    { level: 3, position: [], right: false}
  ]}
  floor2[103][46] = { ...elevator, levels: [
    { level: 1, position: [], right: false},
    { level: 3, position: [70, 70], right: true}
  ]}

  floor2[76][40] = window
}

setCorridors()
setTurns()
setRooms()
setOther()

export default floor2