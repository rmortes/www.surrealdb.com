import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class extends Route {
	@inject router;

	@action error() {
		return this.router.transitionTo('index');
	}
}
