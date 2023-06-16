import { action } from '@ember/object';
import { inject } from '@ember/service';
import Component from '@glimmer/component';

export default class extends Component {
	@inject artist;

	@inject surreal;

	@action click() {
		if (document.body.hasAttribute('sidebar') === true) {
			document.body.removeAttribute('sidebar');
		}
	}
}
