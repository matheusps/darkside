import { createTokens } from 'styled-tokens'

const draftPosition = {
  values: {
    static: 'static',
    relative: 'relative',
    absolute: 'absolute',
    fixed: 'fixed',
  },
  propName: {
    display: 'display',
  },
}

export type PositionSystem = Partial<{
  position: keyof typeof draftPosition.values
}>

export default createTokens(draftPosition)
