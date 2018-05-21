import { RoomsView } from './rooms.view'

export class RoomsRoutes {
	getRoutes () {
		return { Rooms: { screen: RoomsView } }
	}
}