const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const UPDATE_DUCK_TEXT = 'UPDATE_DUCK_TEXT'
const UPDATE_DUCK_COLOUR = 'UPDATE_DUCK_COLOUR'

export function openModal () {
  return {
    type: OPEN_MODAL,
  }
}

export function closeModal () {
  return {
    type: CLOSE_MODAL,
  }
}

export function updateDuckText (newDuckText) {
  return {
    type: UPDATE_DUCK_TEXT,
    newDuckText,
  }
}

export function updateDuckColour (newDuckColour) {
  return {
    type: UPDATE_DUCK_COLOUR,
    newDuckColour,
  }
}

const initialState = {
  duckText: '',
  duckColour: '',
  isOpen: false,
}

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL :
      return {
        ...state,
        isOpen: true,
      }
    case CLOSE_MODAL :
      return {
        duckText: '',
        duckColour: null,
        isOpen: false,
      }
    case UPDATE_DUCK_TEXT :
      return {
        ...state,
        duckText: action.newDuckText,
      }
    case UPDATE_DUCK_COLOUR :
      return {
        ...state,
        duckColour: action.newDuckColour,
      }
    default :
      return state
  }
}