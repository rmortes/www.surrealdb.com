import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {
	@inject router;

	@inject store;

	model() {
		return this.store.select('post');
	}

	@action error() {
		return this.router.transitionTo('blog');
	}
}
