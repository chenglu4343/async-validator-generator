import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  rules: {
    'ts/prefer-promise-reject-errors': 'off',
  },
})
