import { helper } from '@ember/component/helper';

export function image([id, type]) {
	switch (type) {
		case 'main':
			return `https://cdn.brandsafe.io/w(1720)q(90)sharpen(1,0.4,0.8)/${id}.jpg`;
		case 'post':
			return `https://cdn.brandsafe.io/w(1600)q(90)sharpen(1,0.4,0.8)/${id}.jpg`;
		case 'large':
			return `https://cdn.brandsafe.io/w(1250)q(90)sharpen(1,0.4,0.8)/${id}.jpg`;
		case 'small':
			return `https://cdn.brandsafe.io/w(820)q(90)sharpen(1,0.4,0.8)/${id}.jpg`;
		default:
			return `https://cdn.brandsafe.io/w(1600)q(90)sharpen(1,0.4,0.8)/${id}.jpg`;
	}
}

export default helper(image);
