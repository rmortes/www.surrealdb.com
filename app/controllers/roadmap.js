import { cache } from '@ascua/decorators';
import Controller from '@ember/controller';

export default class extends Controller {
	@cache get model() {
		return [
			{
				goal: 'Q4 2023',
				name: 'SurrealDB Private Cloud',
				text: 'The second SurrealDB Cloud launch will be a highly-available, highly-scalable, single-tenant, private cloud deployment option. SurrealDB Public Cloud will be available in a number of Amazon Web Services regions globally. Pricing will be based on cluster size, and cluster run time.',
			},
			{
				goal: 'Q3 2023',
				name: 'SurrealDB Public Cloud',
				text: 'The first SurrealDB Cloud launch will be a highly-available, highly-scalable, multi-tenant, serverless cloud, with a pay-as-you-go fee structure. SurrealDB Public Cloud will be available in a number of regions globally. Pricing will be based on storage, concurrent connections, and query run time.',
			},
			{
				goal: 'Q3 2023',
				name: 'SurrealDB 1.0.0',
				tags: ['SurrealDB user-interface dashboard'],
			},
			{
				time: new Date('2023-06-30'),
				name: 'SurrealDB 1.0.0-beta.10',
				tags: [
					'Table indexes and unique constraints',
					'Full text indexing and filtering',
					'Live queries and record changes',
					'Deployment to WebAssembly',
				],
			},
			{
				time: new Date('2023-03-31'),
				name: 'SurrealDB 1.0.0-beta.9',
				tags: [
					'Custom global parameters',
					'Custom procedures and functions',
					'Rust client and embedded library API',
					'Deployment to WebAssembly',
				],
			},
			{
				time: new Date('2022-09-30'),
				name: 'SurrealDB 1.0.0-beta.8',
				tags: [
					'Support for deep-merge record updates',
					'Dynamic expressions in complex Record IDs',
					'Embedded Record IDs in CREATE and RELATE statements',
				],
			},
			{
				time: new Date('2022-08-29'),
				name: 'SurrealDB 1.0.0-beta.7',
				tags: [
					'Support for Windows operating system',
					'Complex Record IDs with arrays and objects',
					'Record ID range queries for time-series',
					'Single-node on-disk storage with support for multiple concurrent writers and readers',
				],
			},
			{
				time: new Date('2022-08-13'),
				name: 'SurrealDB 1.0.0-beta.6',
				tags: ['Command-line REPL', 'Environment variable support'],
			},
			{
				time: new Date('2022-07-28'),
				name: 'SurrealDB 1.0.0-beta.4',
				tags: ['Add server strict mode'],
			},
			{
				time: new Date('2022-07-11'),
				name: 'SurrealDB 1.0.0-beta.1',
				tags: [
					'In-memory storage',
					'Distributed highly-available storage',
					'SurrealQL advanced query language',
					'Schemafull or schemaless',
					'Embedded fields with arrays and objects',
					'Multi-table, multi-row ACID transactions',
					'Table field definitions and constraints',
					'Fully-defined type system with datetimes, decimals, durations, and geometry types',
					'Graph and nested field expressions',
					'Embedded JavaScript functions',
					'Pre-defined aggregate computed views',
					'Permissions, authentication and user scopes',
					'Support for 3rd party authentication',
					'REST API and WebSocket API',
					'Data import and export',
					'Command-line tool',
					'Support for amd64, arm64 on Linux and Darwin',
				],
			},
		];
	}
}
