import {
  SET_DISTANCE,
  SET_GAME_STATE,
  SET_LOCATION,
  SET_PART,
} from '../constants/actionTypes'
import { NOT_PLAYING, PLAYING } from '../constants/gameStates'

export const setDistance = (payload) => ({
  type: SET_DISTANCE,
  payload,
})

export const playing = () => ({
  type: SET_GAME_STATE,
  payload: PLAYING,
})

export const notPlaying = () => ({
  type: SET_GAME_STATE,
  payload: NOT_PLAYING,
})

export const setLocation = (payload) => ({
  type: SET_LOCATION,
  payload,
})

// TODO: get part async from server
export const setPart = (payload) => ({
  type: SET_PART,
  payload,
})
