import { floors } from "../utils/config"

const Grid = ({ floor, player } : 
  {
    floor: number,
    player: number[]
  }
) => {
  const tileStyle = {
    padding: 10
  }

  return (
  <div>
    {floors[floor].slice(player[0] - 10, player[0] + 10).map((row, rowi) =>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}} key={rowi}>
          {row.slice(player[1] - 10, player[1] + 10).map((tile, coli) => {
            if(tile === null) 
              return <span style={tileStyle} key={coli}>
                &nbsp;
              </span>

            if(rowi === 10 && coli === 10)
              return <span style={tileStyle} key={coli}>
                *
              </span>

            return tile.char === ' '
              ? <span style={tileStyle} key={coli}>
                &nbsp;
              </span>
              : <span style={{ ...tileStyle, color: (tile.type === 'wall' && tile.color) ? tile.color : 'black' }} key={coli}>
                {tile.char}
              </span>
          })}
        </div>
      )}
    </div>
  )
}

export default Grid