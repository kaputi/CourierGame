import {
  SET_PART,
  SET_DISTANCE,
  SET_LOCATION,
  SET_GAME_STATE,
} from '../constants/actionTypes'
import { NOT_PLAYING } from '../constants/gameStates'

const initialState = {
  location: { latitude: 53.3442005, longitude: -6.2634907 }, // Temple bar
  distance: null,
  part: null,
  gameState: NOT_PLAYING,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PART:
      return { ...state, part: payload }
    case SET_DISTANCE:
      return { ...state, distance: payload }
    case SET_LOCATION:
      return { ...state, locattion: payload }
    case SET_GAME_STATE:
      return { ...state, gameState: payload }
    default:
      return state
  }
}
