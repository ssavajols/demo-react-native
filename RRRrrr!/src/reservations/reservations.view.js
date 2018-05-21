import { Text, View } from 'react-native'
import React from 'react'

export class ReservationsView extends React.Component {

  static navigationOptions = ({ navigation }) => ({ title: `Reservations ${ navigation.getParam('roomId') }` })

  render () {
  	return (
  		<View>
  			<Text>Reservations View.</Text>
  		</View>)
  }
}