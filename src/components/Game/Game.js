import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Notifications } from 'expo'
import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import * as Permissions from 'expo-permissions'
import { connect } from 'react-redux'

import { NOT_PLAYING, PLAYING } from '../../constants/gameStates'

import styles from './Game.styles'

// TODO: constant for the tasks name
TaskManager.defineTask('BACKGROUND_UPDATE', async (location) => {
  console.log(location)
  // TODO: dispatch actions to update the store.
})

class Game extends Component {
  static propTypes = {
    gameState: PropTypes.string,
    part: PropTypes.object,
  }

  static defaultProps = {
    gameState: NOT_PLAYING,
    part: null,
  }

  // TODO: need to check for gameState change somewhere

  componentWillMount() {
    // const { gameState, part } = this.props
    // console.log(gameState, part)
    // if (part && gameState === PLAYING) {
    //   console.log('playing')
    //   this.startTracking()
    // }

    Location.startLocationUpdatesAsync('BACKGROUND_UPDATE', {
      accuracy: Location.Accuracy.Highest,
    })
  }

  componentDidUpdate = (prevProps) => {
    const { gameState: prevGameState } = prevProps
    const { gameState, part } = this.props

    if (gameState !== prevGameState) {
      console.log('Game State Changed')
      if (gameState === PLAYING && part) {
        console.log('playing')
        this.startTracking()
      } else {
        this.stopTracking()
      }
    }
  }

  locationPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      console.log('no location permissions')
    }
  }

  // this function will run on every location change (even in background)
  startTracking = () => {
    console.log('location tracking')
    console.log('%c ## check if not started already', 'color:red')
    this.locationPermission()
    console.log('%c ## check if it should stop', 'color: red')
    console.log('%c ## add || update notification', 'color: red')
    const localNotification = {
      title: 'Courier Game',
      body: 'Address of part',
      android: {
        sticky: true,
      },
    }

    Notifications.presentLocalNotificationAsync(localNotification)
    console.log('%c ## update location state', 'color: red')
    console.log('%c ## calculate and update distance state', 'color:red')
    console.log(
      '%c ## if distance < threshold get piece and send collected message to server and change gameState',
      'color:red'
    )
  }

  stopTracking = () => {
    console.log('stop tracking')
    console.log('%c ## remove notification', 'color: red')
  }

  render() {
    return <View style={styles.container}></View>
  }
}

const mapStateToProps = ({ gameState, part }) => ({ gameState, part })

export default connect(mapStateToProps)(Game)
