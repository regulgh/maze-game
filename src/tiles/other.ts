import type { Elevator, Exit } from "../types";

export const exit: Exit = {
  type: 'exit',
  char: 'E',
  dir: [3],
}

export const elevator: Elevator = {
  type: 'elevator',
  char: '#',
  dir: [6],
}