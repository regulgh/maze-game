import type { Elevator, Exit, Staircase } from "../types";

export const exit: Exit = {
  type: 'exit',
  char: 'E',
}

export const elevator: Elevator = {
  type: 'elevator',
  char: '🛗',
}

export const staircase: Staircase = {
  type: 'staircase',
  char: '🪜',
}