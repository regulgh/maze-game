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
  'От выхода иди прямо, поворот на 45, на лифте на 1 этаж вниз, затем вперед, поворот на 90, вперед и поворот на 45 в комнату'
)

setPath(
  'Черный',
  'Иллюминатор, солнца нет',
  'Обычная',
  'TODO'
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