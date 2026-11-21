import nextVitals from 'eslint-config-next/core-web-vitals'

export default [
  ...nextVitals,
  {
    files: ['src/components/CookieBanner.tsx'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]
