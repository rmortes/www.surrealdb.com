type Person = {
	id: string;
	name: string;
	settings: {
		active: boolean;
		marketing: boolean;
	};
};

// Create a record with a random ID
const [person] = await db.create<Person>('person');

// Create a record with a specific ID
const [record] = await db.create<Person>('person:tobie', {
	name: 'Tobie',
	settings: {
		active: true,
		marketing: true,
	},
});
