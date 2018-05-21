const { log } = console

export class ModuleLoader {
	static load (pattern) {
		const modules = []

		log(require.context('.', pattern))

		return modules
	}
}