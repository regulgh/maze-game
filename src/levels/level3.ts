import { elevator } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor";
import room from "./rooms/room";

const floor3: Level = Array.from({ length: 120 }, () => new Array(120).fill(null))

const setCorridors = () => {
  corridor(5, [70, 70], 'slash', floor3, true)
  corridor(10, [65, 74], 'ver', floor3, true)
}

const setTurns = () => {
}

const setRooms = () => {
  room([45, 65], [55, 80], floor3, [55, 74])
}

const setOther = () => {
  floor3[71][69] = { ...elevator, levels: [
    { level: 2, position: [87, 47], right: true},
    { level: 4, position: [70, 70], right: true}
  ]}
}

setCorridors()
setTurns()
setRooms()
setOther()

export default floor3