import { cache } from '@ascua/decorators';
import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default class extends Controller {
	@inject storage;

	@cache get admin() {
		return this.storage.get('admin');
	}

	@cache get posts() {
		return (
			[]
				.concat(this.model)
				.filter(Boolean)
				.filter((v) => (this.admin ? true : v.visible))
				// eslint-disable-next-line no-undef
				.sort((a, b) => dayjs(b.time) - dayjs(a.time))
		);
	}
}
