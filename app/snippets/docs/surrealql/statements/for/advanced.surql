-- Set can_drink to true for every person over 18 years old.
FOR $person IN (SELECT VALUE id FROM person WHERE age >= 18) {
	UPDATE $person SET can_drink = true;
};
