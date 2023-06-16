import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {
	@inject fastboot;

	redirect() {
		if (this.fastboot.isFastBoot) {
			this.fastboot.response.headers.set(
				'location',
				'https://github.com/surrealdb/surrealdb'
			);
			this.fastboot.response.statusCode = 302;
		} else {
			window.location.replace('https://github.com/surrealdb/surrealdb');
		}
	}
}
