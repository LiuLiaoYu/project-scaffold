// eslint.config.js
// * using https://github.com/antfu/eslint-config
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
}, {
  rules: {
    'no-console': 'off',
  },
})
