import Constants from 'expo-constants'
import { Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width

const pallete = {
  red: '#ee4137',
  blue: '#208fc6',
  white: '#fff',
}

export const colors = {
  primary: pallete.red,
  primaryText: pallete.white,
}

export const dimensions = {
  width: WIDTH,
  statusBarHeight: Constants.statusBarHeight,
  fontSize: 16, // TODO: calcular como sacarlo bien
  // TODO: sacar dinamicamente los margene, size de iconos etc
}
