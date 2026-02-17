import { elevator } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor"
import room from "./rooms/room";
import turn from "./turn";

const floor5: Level = Array.from({ length: 120 }, () => new Array(120).fill(null))

const setCorridors = () => {
  corridor(8, [70, 70], 'slash', floor5, true)
}

const setTurns = () => {
  turn([undefined, '–', '–', '/', null, null, '/', undefined], [62, 78], floor5)
}

const setRooms = () => {
  room([60, 79], [65, 85], floor5, [62, 79])
}

const setOther = () => {
  floor5[71][69] = { ...elevator, levels: [
    { level: 3, position: [70, 70], right: true},
    { level: 5, position: [70, 70], right: true}
  ]}
}

setCorridors()
setTurns()
setRooms()
setOther()

export default floor5