import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { persistor, store } from './src/redux/store'

import { colors, dimensions } from './src/styles/theme'

import Game from './src/components/Game'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: dimensions.statusBarHeight,
    backgroundColor: colors.primary,
  },
})

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={colors.primary} />
        <View style={styles.container}>
          <Game />
        </View>
      </PersistGate>
    </Provider>
  )
}
