import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import Thunk from 'redux-thunk'

import reducer from './reducers'

const persistConfig = {
  key: 'game',
  storage: AsyncStorage,
}

// const logger = createLogger()

// const middleWare = [Thunk, logger]
const middleWare = [Thunk]

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(...middleWare)
)

export const persistor = persistStore(store)

// export default { store, persistor }
