import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class extends Component {
	@action click(event) {
		let visible = document.body.hasAttribute('sidebar');

		switch (true) {
			case visible === false:
				document.body.setAttribute('sidebar', this.args.type);
				break;
			case visible === true:
				document.body.removeAttribute('sidebar');
				break;
		}

		event.stopPropagation();

		return false;
	}
}
