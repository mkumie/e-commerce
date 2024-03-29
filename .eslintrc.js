module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'eslint:recommended'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
    'simple-import-sort/imports': 'error',
  },
}
