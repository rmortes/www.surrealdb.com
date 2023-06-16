import { cache } from '@ascua/decorators';
import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default class extends Controller {
	@inject storage;

	@cache get admin() {
		return this.storage.get('admin');
	}

	@cache get jobs() {
		return []
			.concat(this.model)
			.filter(Boolean)
			.filter((v) => (this.admin ? true : v.visible))
			.sort((a, b) => {
				if (a.title < b.title) return -1;
				if (a.title > b.title) return 1;
				return 0;
			});
	}
}
