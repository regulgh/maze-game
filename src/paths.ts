import { colorNames, windowNames, type PathKey } from "./types"

type RoomMap = Map<PathKey['room'], string>
type WindowMap = Map<PathKey['window'], RoomMap>
const paths = new Map<PathKey['color'], WindowMap>()

colorNames.forEach(c => {
  paths.set(c, new Map())

  const color = paths.get(c)

  windowNames.forEach(w => {
    color!.set(w, new Map())
  })

})

const setPath = (
  color: PathKey['color'],
  window: PathKey['window'],
  room: PathKey['room'],
  path: string
) => {
  const windowMap = paths.get(color)
  if(!windowMap)
    throw new Error('invalid color')

  const roomMap = windowMap.get(window)
  if(!roomMap)
    throw new Error('invalid window')

  roomMap.set(room, path)
}

setPath(
  'Зеленый',
  'Иллюминаторов нет',
  'Обычная',
  'От выхода поверни налево, 8 шагов вперед, на лифте на 3 этажа вниз, затем вперед, поворот на 90, вперед и поворот на 45 в комнату'
)

setPath(
  'Серый',
  'Иллюминатор и солнце',
  'Лаборатория',
  'От выхода прямо, поворот на 45, на лифте на 1 этаж вниз, затем вперед, поворот на 90, вперед и поворот на 45 в комнату'
)

setPath(
  'Черный',
  'Иллюминатор, солнца нет',
  'Обычная',
  'От выхода налево, 12 шагов вперед, направо на 45, 48 шагов прямо, по лестнице вниз на 1 этаж, прямо 50 шагов, направо на 45, 18 шагов вперед, направо на 90, 18 шагов вперед, направо на 45, 48 шагов вперед, на лифте на 1 этаж вниз, 52 шага вперед, поворот на 45, 50 шагов вперед, налево на 45'
)

export const getPath = (
  color: PathKey['color'],
  window: PathKey['window'],
  room: PathKey['room'],
) => {
  const windowMap = paths.get(color)
  if(!windowMap)
    throw new Error('invalid color')

  const roomMap = windowMap.get(window)
  if(!roomMap)
    throw new Error('invalid window')

  return roomMap.get(room)
}

export default paths