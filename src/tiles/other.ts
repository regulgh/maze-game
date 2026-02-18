import type { Elevator, Exit, LabEquipment, Staircase, Sun, Window } from "../types";

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

export const window: Window = {
  type: 'window',
  char: '🪟',
}

export const labEquipment: LabEquipment = {
  type: 'window',
  char: '💉',
}

export const sun: Sun = {
  type: 'sun',
  char: '☀️',
}