/*global marked*/

import { cache } from '@ascua/decorators';
import Controller, { inject } from '@ember/controller';

const slug = function (text) {
	return String(text)
		.replace(/[\s.]/gi, '-')
		.replace(/[^a-zA-Z0-9_-]+/g, '')
		.replace(/--/, '-')
		.toLowerCase();
};

export default class extends Controller {
	@inject blog;

	@cache get headings() {
		return marked
			.lexer(this.html)
			.filter((section) => {
				return section.type === 'heading' && section.depth === 2;
			})
			.map((heading) => {
				return {
					text: heading.text,
					id: slug(heading.text),
					link: '#' + slug(heading.text),
				};
			});
	}

	@cache get index() {
		return this.blog.posts.findIndex((post) => post.id === this.model.id);
	}

	@cache get prev() {
		return this.blog.posts[this.index + 1] || null;
	}

	@cache get next() {
		return this.blog.posts[this.index - 1] || null;
	}

	@cache get html() {
		return this.model.html || '';
	}
}
