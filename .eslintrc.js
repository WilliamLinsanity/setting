module.exports = {
	root         : true,
	env          : {
		node: true,
	},
	extends      : [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	rules        : {
		'no-console'                        : 'off',
		'no-param-reassign'                 : 0,
		'no-debugger'                       : process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'semi'                              : ['error', 'never', { 'beforeStatementContinuationChars': 'always' }],
		'radix'                             : ['error', 'as-needed'],
		'camelcase'                         : ['error', { 'properties': 'never' }],
		'max-len'                           : 'off',
		'semi-spacing'                      : ['error', {
			'before': false,
			'after' : true
		}],
		'prefer-const'                      : 'off',
		'no-tabs'                           : ['error', { 'allowIndentationTabs': true }],
		'no-mixed-spaces-and-tabs'          : ['error', 'smart-tabs'],
		'no-multi-spaces'                   : ['error', {
			'exceptions': {
				'BinaryExpression'  : true,
				'VariableDeclarator': true,
				'ImportDeclaration' : true
			}
		}],
		'no-unused-expressions'             : ['error', {
			'allowShortCircuit': true,
			'allowTernary'     : true
		}],
		'no-unused-vars'                    : ['error', { 'args': 'after-used' }],
		'indent'                            : ['error', 'tab', {
			'SwitchCase'        : 1,
			'VariableDeclarator': {
				'var'  : 2,
				'let'  : 2,
				'const': 3
			}
		}],
		'key-spacing'                       : ['error', {
			'multiLine': {
				'beforeColon': false,
				'afterColon' : true
			},
			'align'    : {
				'beforeColon': false,
				'afterColon' : true,
				'on'         : 'colon'
			}
		}],
		'object-curly-newline'              : ['error', {
			'ObjectExpression': { 'consistent': true },
			'ObjectPattern'   : { 'consistent': true }
		}],
		'import/extensions'                 : ['error', 'always', {
			'js' : 'never',
			'vue': 'never'
		}],
		'vue/mustache-interpolation-spacing': ['error', 'always'],
		'vue/html-indent'                   : ['error', 'tab', { 'closeBracket': 0 }],
		'vue/html-self-closing'             : ['error', {
			'html': {
				'void'  : 'always',
				'normal': 'never',
			},
		}],
		'vue/max-attributes-per-line'       : ['error', { 'singleline': 3 }],
		'vue/no-multi-spaces'               : ['error', { 'ignoreProperties': false }],
		'import/no-cycle'                   : 'off',
		'no-shadow'                         : 'off'
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
}
