module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    '../../common-configs/ts-eslint.json',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test-utils/**/*.{tsx,ts}', '**/*.test.{tsx,ts}'],
      },
    ],
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "no-restricted-syntax": "off",
    "no-param-reassign": [1, { "props": true, "ignorePropertyModificationsFor": ["state"] }],
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*", "!@mui/material/test-utils/*"]
      }
    ]
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: [
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
        "plugin:jest/recommended",
      ],
    },
  ],
  ignorePatterns: ['**/.next'],
};
