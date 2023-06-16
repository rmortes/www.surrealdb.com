import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {
	@inject router;

	compute() {
		return `https://github.com/surrealdb/www.surrealdb.com/blob/main/app/templates${this.router.currentURL}.hbs`;
	}
}
