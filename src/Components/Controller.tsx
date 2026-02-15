import floors from '../utils/config'

const Controller = ({ floor, player, setPlayer } : 
  { floor: number, player: number[], setPlayer: React.Dispatch<React.SetStateAction<number[]>> }
) => {
  const canMove = (dir: number): boolean => {
    if(!floors[floor][player[0]][player[1]] || !floors[floor][player[0]][player[1]]!.dir){
      throw new Error('something went wrong')
    }

    return floors[floor][player[0]][player[1]]!.dir!.some(d => d === dir)
  }

  const buttonStyle : React.CSSProperties = {
    padding: 15,
    border: "none",
    borderRadius: 8,
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: 64
  }

  return (
    <div style={{ justifySelf: 'center' }}>
      <div>
        <button 
          style={buttonStyle}
          onClick={() => canMove(1) && setPlayer([player[0] - 1, player[1] - 1])}
        >
          1
        </button>
        <button
          style={buttonStyle}
          onClick={() => canMove(2) && setPlayer([player[0] - 1, player[1]])}
        >
          2
        </button>
        <button
          style={buttonStyle}
          onClick={() => canMove(3) && setPlayer([player[0] - 1, player[1] + 1])}
        >
          3
        </button>
      </div>
      <div>
        <button 
          style={buttonStyle}
          onClick={() => canMove(4) && setPlayer([player[0], player[1] - 1])}
        >
          4
        </button>
        <span style={buttonStyle}>&nbsp;</span  >
        <button
          style={buttonStyle}
          onClick={() => canMove(5) && setPlayer([player[0], player[1] + 1])}
        >
          5
        </button>
      </div>
      <div>
        <button
          style={buttonStyle}
          onClick={() => canMove(6) && setPlayer([player[0] + 1, player[1] - 1])}
        >
          6
        </button>
        <button
          style={buttonStyle}
          onClick={() => canMove(7) && setPlayer([player[0] + 1, player[1]])}
        >
          7
        </button>
        <button
          style={buttonStyle}
          onClick={() => canMove(8) && setPlayer([player[0] + 1, player[1] + 1])}
        >
          8
        </button>
      </div>
    </div>
  )
}

export default Controller