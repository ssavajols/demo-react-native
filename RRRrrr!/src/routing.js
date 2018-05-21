import { createStackNavigator } from 'react-navigation'
// import { ModuleLoader } from './classes/moduleLoader'
import { ReservationsRoutes } from './reservations/reservations.routes'
import { RoomsRoutes } from './rooms/rooms.routes'

// console.log(ModuleLoader.load(/\.routes\.js/))

export const Routing = createStackNavigator({
	...(new RoomsRoutes()).getRoutes(),
	...(new ReservationsRoutes()).getRoutes(),
})