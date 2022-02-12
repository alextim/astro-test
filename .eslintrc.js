module.exports = {
  root: true,
  globals: {
    graphql: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    requireConfigFile: false,
    experimentalObjectRestSpread: true,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
    es2021: true,
  },

  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'prettier',
  ],
  plugins: ['@emotion', 'import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],

  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-double'],
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-plusplus': 'off',
    'no-restricted-exports': 'off',

    'react/no-array-index-key': 'warn',
    'react/no-danger': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-fragments': 0,
    /* No React import */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // 'no-anonymous-exports-page-templates': 'warn',
    // 'limited-exports-page-templates': 'warn',
    '@emotion/syntax-preference': [2, 'object'],
    '@emotion/jsx-import': 0,

    'prettier/prettier': 'error',
  },
};
