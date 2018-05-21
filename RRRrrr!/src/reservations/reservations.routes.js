import { ReservationsView } from './reservations.view'

export class ReservationsRoutes {
	getRoutes () {
		return { Reservations: { screen: ReservationsView } }
	}
}