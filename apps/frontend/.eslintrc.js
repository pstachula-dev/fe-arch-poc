module.exports = {
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    '../../.eslintrc.js',
  ],
  rules: {
    'react/no-array-index-key': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': [
      1,
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
        'plugin:jest/recommended',
      ],
    },
  ],
};
