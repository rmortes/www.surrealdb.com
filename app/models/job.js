import { boolean, string } from '@ascua/surreal/field';
import Model from '@ascua/surreal/model';

export default class Job extends Model {
	// ------------------------------
	// Persistent properties
	// ------------------------------

	@string location;

	@string title;

	@string type;

	@string url;

	@boolean visible;
}
