import React from 'react'
import { Text, View } from 'react-native'

export class RoomsView extends React.Component {

  static navigationOptions = { title: 'Rooms' }

  handleClick = () => {
  	this.props.navigation.navigate('Reservations', { roomId: 1 })
  }

  render () {
  	return (
  		<View>
  			<Text onPress={ this.handleClick }>Rooms View.</Text>
  		</View>)
  }
}