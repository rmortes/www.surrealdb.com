import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {
	@inject store;

	model(params) {
		return this.store.search('post', {
			where: ['slug = $slug'],
			param: { slug: params.post_slug },
			limit: 1,
			shoebox: true,
		});
	}
}
