import { cache } from '@ascua/decorators';
import Component from '@glimmer/component';

export default class extends Component {
	@cache get model() {
		return [
			{
				name: 'EchoDB',
				link: 'https://github.com/surrealdb/echodb',
				lang: 'Rust / Apache-2.0',
				text: 'An embedded, in-memory, immutable, copy-on-write database engine with serialisable, isolated transactions',
				image: '/static/img/opensource/echodb.png',
			},
			{
				name: 'YokuDB',
				link: 'https://github.com/surrealdb/yokudb',
				lang: 'Rust / Apache-2.0',
				text: 'A versioned, embedded, persistent, memory-mapped, ACID-compliant key-value database engine',
				image: '/static/img/opensource/yokudb.png',
			},
			{
				name: 'IndxDB',
				link: 'https://github.com/surrealdb/indxdb',
				lang: 'Rust / Apache-2.0',
				text: 'A key-value database engine abstraction layer for IndexedDB in the browser using WASM',
				image: '/static/img/opensource/indxdb.png',
			},
			{
				name: 'storekey',
				link: 'https://github.com/surrealdb/storekey',
				lang: 'Rust / Apache-2.0',
				text: 'A binary encoding serialization format for Serde, which ensures lexicographic sort ordering',
				image: '/static/img/opensource/storekey.png',
			},
			{
				name: 'RixxDB',
				link: 'https://github.com/surrealdb/rixxdb',
				lang: 'Golang / Apache-2.0',
				text: 'A versioned, embedded, strongly-consistent, ACID-compliant key-value database engine',
				image: '/static/img/opensource/rixxdb.png',
			},
			{
				name: 'cork',
				link: 'https://github.com/surrealdb/cork',
				lang: 'Golang / Apache-2.0',
				text: 'A self-describing, binary data serialisation format for Golang',
				image: '/static/img/opensource/cork.png',
			},
			{
				name: 'bump',
				link: 'https://github.com/surrealdb/bump',
				lang: 'Golang / Apache-2.0',
				text: 'An efficient and performant data buffering library for Golang',
				image: '/static/img/opensource/bump.png',
			},
			{
				name: 'ptree',
				link: 'https://github.com/surrealdb/ptree',
				lang: 'Golang / Apache-2.0',
				text: 'An immutable, copy-on-write radix tree library with serialisable, isolated transactions',
				image: '/static/img/opensource/ptree.png',
			},
			{
				name: 'vtree',
				link: 'https://github.com/surrealdb/vtree',
				lang: 'Golang / Apache-2.0',
				text: 'An immutable, versioned, copy-on-write radix tree library with serialisable, isolated transactions',
				image: '/static/img/opensource/vtree.png',
			},
			{
				name: 'tlist',
				link: 'https://github.com/surrealdb/tlist',
				lang: 'Golang / Apache-2.0',
				text: 'An in-memory time series linked list for storing and retrieving values by time',
				image: '/static/img/opensource/tlist.png',
			},
			{
				name: 'blist',
				link: 'https://github.com/surrealdb/blist',
				lang: 'Golang / Apache-2.0',
				text: 'An in-memory time series binary tree list for storing and retrieving values by time',
				image: '/static/img/opensource/blist.png',
			},
			{
				name: 'fibre',
				link: 'https://github.com/surrealdb/fibre',
				lang: 'Golang / Apache-2.0',
				text: 'A fast HTTP, RPC, and WebSocket server framework for Golang',
				image: '/static/img/opensource/fibre.png',
			},
		];
	}
}
