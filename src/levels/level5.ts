import { elevator } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor"
import room from "./rooms/room";
import turn from "./turn";

const floor5: Level = Array.from({ length: 130 }, () => new Array(130).fill(null))

const setCorridors = () => {
  corridor(8, [70, 70], 'slash', floor5, true, 'lightgreen')
}

const setTurns = () => {
  turn([undefined, '–', '–', '/', null, null, '/', undefined], [62, 78], floor5, 'lightgreen')
}

const setRooms = () => {
  room([60, 79], [65, 85], floor5, [62, 79], 'lightgreen')
}

const setOther = () => {
  floor5[71][69] = { ...elevator, levels: [
    { level: 4, position: [70, 70], right: true},
    { level: 6, position: [], right: false}
  ]}
}

setCorridors()
setTurns()
setRooms()
setOther()

export default floor5