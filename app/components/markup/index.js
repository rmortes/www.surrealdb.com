import { cache } from '@ascua/decorators';
import Component from '@glimmer/component';

const slug = function (text) {
	return String(text)
		.replace(/[\s.]/gi, '-')
		.replace(/[^a-zA-Z0-9_-]+/g, '')
		.replace(/--/, '-')
		.toLowerCase();
};

export default class extends Component {
	@cache get markdown() {
		// eslint-disable-next-line no-undef
		return marked.lexer(this.args.html || '').map((section) => {
			if (section.type === 'heading') {
				return Object.assign({}, section, {
					link: slug(section.text),
				});
			} else {
				return section;
			}
		});
	}
}
