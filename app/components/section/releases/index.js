import { cache } from '@ascua/decorators';
import Component from '@glimmer/component';

export default class extends Component {
	@cache get model() {
		return [
			{
				time: new Date('2023-04-01T00:00:00'),
				name: 'Release v1.0.0-beta.9',
				info: 'section/releases/v1-0-0-beta-9-upgrade',
				path: 'section/releases/v1-0-0-beta-9',
				link: 'v1.0.0-beta.9',
				hash: 'v1-0-0-beta-9',
				data: [
					{
						name: 'Features',
						text: [
							'Add WebSocket binary protocol',
							'Don’t treat <code>NONE</code> and <code>NULL</code> as the same',
							'Allow <code>SELECT</code> statements to <code>START AT 0</code>',
							'Add <code>not()</code> function for negating a value',
							'Add support for mathematical constants',
							'Add functionality for open telemetry tracing',
							'Add support for SQL parameters in HTTP REST endpoints',
							'Log release version identifier when starting the server',
							'Add <code>is::url()</code> function for checking if a string is a URL',
							'Implement inclusive and unbounded record rangese',
							'Support negative offsets in SQL string::slice() function',
							'Add <code>time::timezone()</code> function for getting the local timezone offset',
							'Add <code>is::datetime()</code> function for checking if a value is a datetime',
							'Add ability to set global parameters using <code>DEFINE PARAM</code> statements',
							'Prevent invalid aggregate functions being used in <code>GROUP BY</code> clauses',
							'Check expressions for <code>SPLIT ON</code>, <code>GROUP BY</code>, and <code>ORDER BY</code> clauses',
							'Enable fetching fields and values from within complex Record IDs',
							'Allow parameters in <code>LIMIT</code> and <code>START</code> clauses in <code>SELECT</code> statements',
							'Add <code>parse::url::scheme()</code> function for parsing a url protocol',
							'Add <code>time::format()</code> function for formatting of datetimes',
							'Add support for <code>FETCH</code> cluases in SQL <code>RETURN</code> statements',
							'Add <code>rand::uuid::v4()</code> and <code>rand::uuid::v7()</code> functions for creating different UUID types',
							'Add Null Coalescing Operator and Ternary Conditional Operator',
							'Enable current input to be retrieved in <code>ON DUPLICATE KEY UPDATE</code> clauses with <code>$input</code> parameter',
							'Add <code>math::pow()</code> function and <code>**</code> operator',
							'Ensure command-line exits with non-zero code on errors',
							'Add <code>IN</code> and <code>NOT IN</code> operators as aliases to <code>INSIDE</code> and <code>NOT INSIDE</code>',
							'Add command-line argument flag to disable SurrealDB banner at server startup',
							'Enable calling SurrealQL functions from within JavaScript scripting runtime',
							'Add support for <code>FLEXIBLE</code> fields on <code>SCHEMAFULL</code> tables',
							'Add additional array functions for array checking, and manipulation: \n - <code>array::all()</code>, <code>array::any()</code>, <code>array::pop()</code> \n - <code>array::add()</code>, <code>array::append()</code>, <code>array::insert()</code>, <code>array::prepend()</code>, <code>array::push()</code> \n - <code>array::remove()</code>, <code>array::reverse()</code>,  <code>array::group()</code>, <code>array::complement()</code>',
						],
					},
					{
						name: 'Bug fixes',
						text: [
							{
								category: 'bug',
								text: 'Enable searching within Record IDs using the CONTAINS operator',
							},
							{
								category: 'bug',
								text: 'Ensure date strings are not treated as datetimes',
							},
							{
								category: 'bug',
								text: 'Limit computation depth in functions, futures, and subqueries',
							},
							{
								category: 'bug',
								text: 'Ensure SQL queries are parsed completely or fail',
							},
							{
								category: 'bug',
								text: 'Ensure all valid unicode characters are parsed without failing',
							},
							{
								category: 'bug',
								text: 'Ensure nested non-defined objects are not stored in <code>SCHEMAFULL</code> tables',
							},
							{
								category: 'bug',
								text: 'Ensure equals comparator function never reeaches unreachable code',
							},
							{
								category: 'bug',
								text: 'Ensure cancelled context does not prevent FETCH of records',
							},
							{
								category: 'bug',
								text: 'Ensure GROUP BY fields with functions are output correctly',
							},
							{
								category: 'bug',
								text: 'Ensure system parameters are not able to be overridden',
							},
							{
								category: 'bug',
								text: 'Ensure record is only deleted after permissions have been checked',
							},
							{
								category: 'bug',
								text: 'Ensure double quote characters are always escaped properly',
							},
							{
								category: 'bug',
								text: 'Ensure RocksDB range scans are inclusive at the start',
							},
							{
								category: 'bug',
								text: 'Ensure uncaught JavaScript exceptions are caught in JavaScript runtime',
							},
							{
								category: 'bug',
								text: 'Do not run permissions on <code>DEFINE EVENT</code> and <code>DEFINE TABLE</code> queries',
							},
							{
								category: 'bug',
								text: 'Ensure invalid datetimes to not panic',
							},
						],
					},
					{
						name: 'Performance improvements',
						text: [
							{
								category: 'performance',
								text: 'Limit computation depth in functions, futures, and subqueries',
							},
							{
								category: 'performance',
								text: 'Ensure PERMISSIONS clauses are not run for ROOT / NS / DB users',
							},
						],
					},
				],
			},
			{
				time: new Date('2022-09-30T23:00:00'),
				name: 'Release v1.0.0-beta.8',
				path: 'section/releases/v1-0-0-beta-8',
				link: 'v1.0.0-beta.8',
				hash: 'v1-0-0-beta-8',
				data: [
					{
						name: 'Features',
						text: [
							'Improve HTTP request error messages',
							'Add support for dynamic expressions in Record IDs',
							'Add support for <code>PERMISSIONS</code> clauses to be separated by commas or spaces',
							'Allow deep-merging in <code>UPDATE ... MERGE</code> statements',
							'Add debug and trace logging for authentication attempts',
							'Make validation and parsing functions more robust with certain edge cases',
							'Ignore empty or blank lines when using the SurrealDB SQL REPL',
							'Use a dedicated executor thread for CPU-intensive functions',
							'Ensure server listens to, and gracefully exits, on SIGINT/SIGTERM signals',
							'Add <code>duration</code> functions for calculating durations as specific units',
							'Add support for calculating the duration between two datetime values',
							'Improve error message when automatically creating a table without authorization',
							'Add support for uppercase and lowercase object keys in JWT authentication tokens',
							'Allow namespaced claim aliases in JWT token using full domain-specific key names',
							'Add support for retrieving JWT authentication token contents using <code>$token</code> parameter',
							'Add support for different content return types on <code>/signup</code> and <code>/signin</code> HTTP routes',
							'Add <code>session::token()</code> function for retrieving the contents of the JWT authentication token',
							'Ensure <code>NONE</code> and <code>NULL</code> values are not automatically cast to another type when updating records',
							'Add <code>/health</code> HTTP endpoint for checking the database and data storage engine status',
							'Add <code>crypto::bcrypt::generate()</code> and <code>crypto::bcrypt::compare()</code> functions',
							'Improve error messages for unique indexes, when inserting records which already exist in the index',
							'Add <code>meta::tb()</code> and <code>meta::id()</code> functions for retrieving separate parts of a SurrealDB Record ID',
							'Add support for using 3rd party authentication JWTs with <code>DEFINE TOKEN ... ON SCOPE ...</code>',
						],
					},
					{
						name: 'Bug fixes',
						text: [
							{
								category: 'bug',
								text: 'Add support for escaped characters and unicode characters in strings',
							},
							{
								category: 'bug',
								text: 'Ensure datetimes work correctly in Eastern timezones',
							},
							{
								category: 'bug',
								text: 'Ensure <code>is::uuid()</code> parses valid UUIDs correctly',
							},
							{
								category: 'bug',
								text: 'Ensure <code>LET</code> statements throw errors correctly on failure',
							},
							{
								category: 'bug',
								text: 'Ensure Record IDs are parsed correctly when defined as a string',
							},
							{
								category: 'bug',
								text: 'Fix bug where escaped characters were not supported in regex values',
							},
							{
								category: 'bug',
								text: 'Ensure datetimes with milliseconds or nanoseconds are parsed correctly',
							},
							{
								category: 'bug',
								text: 'Ensure datetimes with partial timezones are correctly calculated',
							},
							{
								category: 'bug',
								text: 'Ensure <code>time::month()</code> returns the month of the specified datetime',
							},
							{
								category: 'bug',
								text: 'Ensure <code>FETCH</code> clauses fetch the respective data correctly',
							},
							{
								category: 'bug',
								text: 'Handle connection errors properly when WebSocket clients disconnect improperly',
							},
							{
								category: 'bug',
								text: 'Ensure HTTP session is not verified multiple times when requesting an invalid HTTP route',
							},
							{
								category: 'bug',
								text: 'Use <code>Accept</code> header instead of <code>Content-Type</code> header for client content negotiation',
							},
							{
								category: 'bug',
								text: 'Fix key scan range iteration in RocksDB, which caused SurrealDB to randomly crash',
							},
							{
								category: 'bug',
								text: 'Ensure authenticated session data is stored after successful scope signup / signin',
							},
							{
								category: 'bug',
								text: 'Fix bug where <code>http</code> functions would panic when an invalid URI was specified',
							},
							{
								category: 'bug',
								text: 'Ensure correct transaction type (optimistic / pessimistic) was initiated when using TiKV distributed storage engine',
							},
							{
								category: 'bug',
								text: 'Ensure <code>math::mean()</code>, <code>math::median()</code>, and <code>math::sqrt()</code> work correctly with empty or zero values',
							},
							{
								category: 'bug',
								text: 'Fix bug where <code>MultiPoint</code>, <code>MultiLine</code>, and <code>MultiPolygon</code> geometry values were not formatted correctly',
							},
							{
								category: 'bug',
								text: 'Fix bug where defined fields with empty values would be set on the root object, losing the object structure',
							},
						],
					},
					{
						name: 'Performance improvements',
						text: [
							{
								category: 'performance',
								text: 'Miscellaneous performance optimizations and code cleanup',
							},
							{
								category: 'performance',
								text: 'Limit maximum allowed runtime and memory in JavaScript functions',
							},
							{
								category: 'performance',
								text: 'Ensure <code>crypto</code> and <code>rand</code> functions do not allow unbounded resource usage',
							},
							{
								category: 'performance',
								text: 'Ensure read-only transactions are used when write functionality is not needed when using TiKV distributed storage engine',
							},
						],
					},
				],
			},
			{
				time: new Date('2022-08-29'),
				name: 'Release v1.0.0-beta.7',
				path: 'section/releases/v1-0-0-beta-7',
				link: 'v1.0.0-beta.7',
				hash: 'v1-0-0-beta-7',
				text: [
					'Add a Windows <code>amd64</code> release build',
					'Add support for Objects and Arrays as Record IDs',
					'Add support for querying records using Record ID ranges',
					'Add SQL <code>session</code> functions for retrieving session variables',
					'Make <code>--ns</code> and <code>--db</code> arguments optional in command-line REPL',
					'Return an error when the specified datastore is not able to be initiated',
					'Enable root authentication for client libraries using WebSocket protocol',
					'Ensure <code>math::sum()</code> returns a number instead of a <code>NONE</code> value, when called on a non-array value',
					'Add ACID compliant, persistent, on-disk storage implementation, with multiple concurrent writers using RocksDB',
				],
			},
			{
				time: new Date('2022-08-13'),
				name: 'Release v1.0.0-beta.6',
				path: 'section/releases/v1-0-0-beta-6',
				link: 'v1.0.0-beta.6',
				hash: 'v1-0-0-beta-6',
				text: [
					'Add command-line SurrealQL REPL for quick querying of a database',
					'Log username at server startup when root authentication is enabled',
					'Enable SurrealDB server to be configured using environment variables',
					'Implement config definition key and value caching within a transaction',
					'Add <code>array::sort</code> functions for sorting of arrays and array fields',
					'Ensure an error is returned when selecting from a non-existent table in strict mode',
					'Allow polymorphic remote record constraints in <code>DEFINE FIELD</code> statements',
					'Fix bug with SQL export, where <code>DEFINE INDEX</code> statements were not exported',
					'Fix bug where multi-yield path expressions with multiple alias outputs were returning nested arrays',
					'Fix bug where aliased field was not output when fetching a multi-yield expressions with a final alias yield',
				],
			},
			{
				time: new Date('2022-08-01'),
				name: 'Release v1.0.0-beta.5',
				path: 'section/releases/v1-0-0-beta-5',
				link: 'v1.0.0-beta.5',
				hash: 'v1-0-0-beta-5',
				text: [
					'Temporarily disable HTTP response compression',
					'Improve <code>surreal import</code> and <code>surreal export</code> cli commands',
					'Fix bug where <code>GROUP BY</code> fields with an alias <code>AS</code> name were not output correctly',
					'Fix SQL syntax parsing bug when specifying <code>DEFINE INDEX</code> statements with <code>UNIQUE</code> constraints',
				],
			},
			{
				time: new Date('2022-07-28'),
				name: 'Release v1.0.0-beta.4',
				path: 'section/releases/v1-0-0-beta-4',
				link: 'v1.0.0-beta.4',
				hash: 'v1-0-0-beta-4',
				text: [
					'Add new strict mode to SurrealDB server',
					'Ensure default table permissions are set to <code>NONE</code> not <code>FULL</code>',
					'Fix bug when defining <code>NS</code> and <code>DB</code> without first selecting a <code>NS</code> or <code>DB</code>',
					'Fix bug with <code>VALUE</code> and <code>ASSERT</code> clauses in <code>DEFINE FIELD</code> statements when fields are not present in query',
				],
			},
			{
				time: new Date('2022-07-24'),
				name: 'Release v1.0.0-beta.3',
				path: 'section/releases/v1-0-0-beta-3',
				link: 'v1.0.0-beta.3',
				hash: 'v1-0-0-beta-3',
				text: [
					'Enable years as a unit in durations (<code>1y</code>)',
					'Log root authentication configuration status on server startup',
					'Ensure CORS headers are set on all HTTP responses even when request fails with an error',
					'Improve syntax for defining futures: <code>fn::future -></code> changed to <code>&lt;future&gt;</code>',
					'Improve syntax for defining embedded functions: <code>fn::script -> () =></code> changed to <code>function()</code>',
					'Ensure root authentication is completely disabled when <code>-p</code> or <code>--pass</code> cli arguments are not specified',
				],
			},
			{
				time: new Date('2022-07-20'),
				name: 'Release v1.0.0-beta.2',
				path: 'section/releases/v1-0-0-beta-2',
				link: 'v1.0.0-beta.2',
				hash: 'v1-0-0-beta-2',
				text: [
					'Improve command-line logging output',
					'Enable new <code>--log</code> argument for specifying server log level',
					'Hide default randomly-generated server password',
					'Ensure correct version is displayed when running <code>surreal version</code> command',
				],
			},
			{
				time: new Date('2022-07-18'),
				name: 'Release v1.0.0-beta.1',
				path: 'section/releases/v1-0-0-beta-1',
				link: 'v1.0.0-beta.1',
				hash: 'v1-0-0-beta-1',
				text: [
					'Entire SurrealDB codebase re-written in Rust',
					'Single-node, in-memory storage for development use',
					'Highly-available, highly-scalable distributed storage for production use',
					'Improved SurrealQL query language with faster parsing, and embedded inspection of types',
					'Performance improvements with data parsing, and serialization and deserialization of records',
					'Added support for casting and converting between different data types',
					'Added a new data type for storing values which should only be computed in the future when selected for output',
					'Embedded JavaScript functions for writing complex functions and triggers, with runtime context isolation',
					'Addition of nested GeoJSON data types, including <code>Point</code>, <code>Line</code>, <code>Polygon</code>, <code>MultiPoint</code>, <code>MultiLine</code>, <code>MultiPolygon</code>, and <code>Collection</code> values',
				],
			},
			{
				time: new Date('2021-12-14'),
				name: 'Release v0.3.0',
				path: 'section/releases/v0-3-0',
				link: 'v0.3.0',
				hash: 'v0-3-0',
				text: [
					'Enable query and session parameters to be defined on a JSON-RPC connection',
					'Ensure subqueries can access encoding parent query and grand-parent queries',
					'Add diff-match-patch functionality when updating document records',
					'Separate authentication levels for Namespace and Database specific access',
					'Authentication scope definition and setup, with user-defined authentication logic for each scope',
				],
			},
			{
				time: new Date('2021-01-21'),
				name: 'Release v0.2.0',
				path: 'section/releases/v0-2-0',
				link: 'v0.2.0',
				hash: 'v0-2-0',
				text: [
					'Parameters can be used to store values or result sets',
					'Nested subquery functionality, with scoped parameters',
					'Nested field query notation allowing nested arrays and objects to be queried',
					'Mathematical operators for complex mathematical calculations in queries',
					'Advanced functions for working with arrays, strings, time, validation, parsing, and counting',
				],
			},
			{
				time: new Date('2019-12-08'),
				name: 'Release v0.1.0',
				path: 'section/releases/v0-1-0',
				link: 'v0.1.0',
				hash: 'v0-1-0',
				text: [
					'Multi-tenancy data separation, with namespaces and databases',
					'Schemafull or schemaless tables with limitless  document fields',
					'Multi-table, multi-row, serialisable ACID transactions',
					'Table fields, table change events, table indexes, and data constraints',
					'Advanced data model including empty values, strings, numbers, objects, arrays, durations, and datetimes',
				],
			},
		];
	}
}
