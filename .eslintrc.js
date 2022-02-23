/** @type {import("@types/eslint").Linter.Config */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    requireConfigFile: false,
    experimentalObjectRestSpread: true,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    /*
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    */
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.json']
      },
      node: {
        project: ['./tsconfig.json']
      }
    }
  },
  env: {
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],

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

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'error',
    '@typescript-eslint/no-empty-interface': [
      'warn',
      {
        allowSingleExtends: false,
      },
    ],
    'prettier/prettier': 'error',
  },
};
