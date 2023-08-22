-- In this example, we throw a custom error when a user provides invalid signin details
DEFINE SCOPE user SESSION 1w
	SIGNIN {
		LET $user = (SELECT * FROM user WHERE username = $username AND crypto::argon2::compare(password, $password));
		IF !$user {
			THROW "You either provided invalid credentials or the user you are trying to sign in with might not exist yet.";
		};

		RETURN $user;
	};
