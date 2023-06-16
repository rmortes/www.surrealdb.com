import { cache } from '@ascua/decorators';
import { array, boolean, datetime, string } from '@ascua/surreal/field';
import Model from '@ascua/surreal/model';

export default class Post extends Model {
	// ------------------------------
	// Persistent properties
	// ------------------------------

	@string html;

	@string image;

	@string label;

	@string slug;

	@array('string') tags;

	@string text;

	@datetime time;

	@string title;

	@boolean visible;

	// ------------------------------
	// Computed properties
	// ------------------------------

	@cache get url() {
		return `https://surrealdb.com/blog/${this.slug}`;
	}
}
