// eslint-disable-next-line
function handler(event) {
	var request = event.request;
	var host = request.headers.host.value;

	if (host !== 'surrealdb.com') {
		return {
			statusCode: 301,
			statusDescription: 'Moved Permanently',
			headers: {
				location: {
					value: `https://surrealdb.com${request.uri}`,
				},
			},
		};
	}

	return request;
}
