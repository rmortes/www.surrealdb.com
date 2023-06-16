export default {
	name: 'database',

	initialize(instance) {
		// Instantiate the database service
		instance.lookup('service:database');
	},
};
