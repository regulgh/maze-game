import { elevator, staircase } from "../tiles/other";
import { horWalkTile, slashWalkTile, verWalkTile, walkTile } from "../tiles/walk";
import { horWallTile, slashWallTile, verWallTile } from "../tiles/walls";
import type { GameTile } from "../types";

const floor1: Array<Array<GameTile | null>> = Array.from({length: 100}, () => new Array(100).fill(null))

for(let i = 1; i <= 18; ++i){
  floor1[99][i] = horWallTile
  floor1[97][i] = horWallTile
  floor1[98][i] = horWalkTile
}

for(let i = 19; i <= 69; ++i){
  floor1[99 + 19 - i][i] = slashWallTile
  floor1[97 + 19 - i][i] = slashWallTile
  floor1[98 + 19 - i][i] = slashWalkTile
}

for(let i = 80; i <= 97; ++i){
  floor1[i][0] = verWallTile
  floor1[i][1] = verWalkTile
  floor1[i][2] = verWallTile
}

for(let i = 3; i <= 48; ++i){
  floor1[82 - i][i] = slashWallTile
  floor1[80 - i][i] = slashWallTile
  floor1[81 - i][i] = slashWalkTile
}

floor1[79][1] = slashWallTile
floor1[78][2] = slashWallTile
floor1[79][2] = slashWalkTile
floor1[80][1] = { ...walkTile, dir: [3, 7] }
floor1[33][49] = slashWallTile
floor1[32][49] = { ...elevator, dir: [6], levels: [
  { level: 0, position: [51, 98], right: true},
  { level: 2, position: [], right: false}
]}

floor1[98][0] = verWallTile
floor1[98][1] = { ...walkTile, dir: [2, 5] }

floor1[98][19] = { ... walkTile, dir: [3, 4]}
floor1[48][70] = slashWallTile
floor1[47][70] = { ...staircase, dir: [6], levels: [
  { level: 0, position: [51, 98], right: false},
  { level: 2, position: [], right: false}
]}

export default floor1