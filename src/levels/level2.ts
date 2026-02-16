import { staircase } from "../tiles/other";
import type { Level } from "../types";
import corridor from "./corridor";

const floor2: Level = Array.from({ length: 120 }, () => new Array(120).fill(null))

corridor(48, [2, 96], 'slash', floor2)
corridor(12, [50, 49], 'ver', floor2)

floor2[1][97] = { ...staircase, dir: [6], levels: [
  { level: 1, position: [48, 69], right: true},
  { level: 3, position: [], right: false}
]}

export default floor2