import { elevator, sun, window } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor";
import lab from "./rooms/lab"

const floor3: Level = Array.from({ length: 130 }, () => new Array(130).fill(null))

const setCorridors = () => {
  corridor(5, [70, 70], 'slash', floor3, true, 'lightgrey')
  corridor(10, [65, 74], 'ver', floor3, true, 'lightgrey')
}

const setTurns = () => {
}

const setRooms = () => {
  lab([45, 65], [55, 80], floor3, 'ver', [55, 74], 'lightgrey')
}

const setOther = () => {
  floor3[71][69] = { ...elevator, levels: [
    { level: 2, position: [87, 47], right: true},
    { level: 4, position: [70, 70], right: true}
  ]}

  floor3[45][74] = window
  floor3[44][74] = sun
}

setCorridors()
setTurns()
setRooms()
setOther()

export default floor3