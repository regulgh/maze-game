import { elevator, staircase } from "../tiles/other";
import { walkTile } from "../tiles/walk";
import type { Level } from "../types";
import corridor from "./corridor";
import room from "./rooms/room";
import turn from "./turn";

const floor1: Level = Array.from({ length: 130 }, () => new Array(130).fill(null))

const setCorridors = () => {
  corridor(50, [48, 84], 'slash', floor1)
  corridor(18, [97, 18], 'hor', floor1)
  corridor(18, [79, 18], 'ver', floor1)
  corridor(48, [31, 65], 'slash', floor1)

  corridor(11, [45, 53], 'hor', floor1)
  corridor(11, [57, 41], 'hor', floor1)
  corridor(11, [97, 18], 'slash', floor1)
  corridor(15, [97, 35], 'hor', floor1)
  corridor(11, [61, 69], 'backslash', floor1, true)
}

const setRooms = () => {
  room([69, 5], [90, 17], floor1, [87, 17])
}

const setTurns = () => {
  turn(['|', null, '|', '|', null, null, '–', '–'], [97, 18], floor1)
  turn(['–', '–', null, null, null, '–', '–', '–'], [97, 35], floor1)
  turn([undefined, '/', null, '/', '/', '|', null, '|'], [78, 18], floor1)

  turn([undefined, '/', null, '/', null, null, '/', '–'], [45, 51], floor1)
  turn([undefined, '/', null, '/', null, null, '/', '–'], [57, 39], floor1)
}

const setOther = () => {
  floor1[30][66] = { ...elevator, levels: [
    { level: 0, position: [46, 117], right: true},
    { level: 2, position: [], right: false}
  ]}

  floor1[47][85] = { ...staircase, levels: [
    { level: 0, position: [], right: false},
    { level: 2, position: [17, 96], right: true}
  ]}

  floor1[45][52] = { ...walkTile, lose: true}
  floor1[87][17] = { ...walkTile, lose: true}
  floor1[57][40] = { ...walkTile, lose: true}
  floor1[98][17] = { ...walkTile, lose: true}
  floor1[97][37] = { ...walkTile, lose: true}
  floor1[61][69] = { ...walkTile, lose: true}
}

setCorridors()
setTurns()
setRooms()
setOther()

export default floor1