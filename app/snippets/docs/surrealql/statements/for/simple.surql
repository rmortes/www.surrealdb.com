-- Create a person for everyone in the array
FOR $name IN ['Tobie', 'Jaime'] {
	CREATE type::thing('person', $name) CONTENT {
		name: $name
	};
};
