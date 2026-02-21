import { floors } from '../utils/config'
import { isWalkable } from '../utils/guards'

const Controller = ({ floor, player, setPlayer } : 
  {
    floor: number,
    player: number[],
    setPlayer: React.Dispatch<React.SetStateAction<number[]>>
  }
) => {
  const tryToMove = ([ x, y ]: number[]) => {
    if(isWalkable(floors[floor][x][y])){
      setPlayer([x, y])
      return true
    }

    return false
  }

  const buttonStyle : React.CSSProperties = {
    padding: 40,
    margin: 5,
    border: "none",
    borderRadius: 8,
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: 128
  }

  return (
    <div style={{ justifySelf: 'center' }}>
      <div>
        <button 
          style={buttonStyle}
          onClick={() => tryToMove([player[0] - 1, player[1] - 1])}
        >
          1
        </button>
        <button
          style={buttonStyle}
          onClick={() => tryToMove([player[0] - 1, player[1]])}
        >
          2
        </button>
        <button
          style={buttonStyle}
          onClick={() => tryToMove([player[0] - 1, player[1] + 1])}
        >
          3
        </button>
      </div>
      <div>
        <button 
          style={buttonStyle}
          onClick={() => tryToMove([player[0], player[1] - 1])}
        >
          4
        </button>
        <span style={buttonStyle}>&nbsp;</span  >
        <button
          style={buttonStyle}
          onClick={() => tryToMove([player[0], player[1] + 1])}
        >
          5
        </button>
      </div>
      <div>
        <button
          style={buttonStyle}
          onClick={() => tryToMove([player[0] + 1, player[1] - 1])}
        >
          6
        </button>
        <button
          style={buttonStyle}
          onClick={() => tryToMove([player[0] + 1, player[1]])}
        >
          7
        </button>
        <button
          style={buttonStyle}
          onClick={() => tryToMove([player[0] + 1, player[1] + 1])}
        >
          8
        </button>
      </div>
    </div>
  )
}

export default Controller