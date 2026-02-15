import { elevator, exit } from "../tiles/other";
import { horWalkTile, slashWalkTile, walkTile } from "../tiles/walk";
import { horWallTile, slashWallTile } from "../tiles/walls";
import type { GameTile } from "../types";







const floor0: Array<Array<GameTile | null>> = Array.from({length: 100}, () => new Array(100).fill(null))

floor0[99][0] = exit

for(let i = 1; i <= 50; ++i){
  floor0[99][i] = horWallTile
  floor0[97][i] = horWallTile
  floor0[98][i] = horWalkTile
}

for(let i = 51; i <= 98; ++i){
  floor0[99 + 51 - i][i] = slashWallTile
  floor0[97 + 51 - i][i] = slashWallTile
  floor0[98 + 51 - i][i] = slashWalkTile
}

floor0[99][1] = slashWallTile
floor0[98][0] = slashWallTile
floor0[98][1] = { ...walkTile, dir: [5, 6] }

floor0[98][51] = { ... walkTile, dir: [3, 4]}
floor0[51][99] = slashWallTile
floor0[50][99] = elevator

export default [floor0]