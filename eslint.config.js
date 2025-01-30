import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'], // Применяется к JS и JSX файлам
    languageOptions: { globals: globals.browser },
    extends: ['react-app', 'eslint:recommended'],
    rules: {
      'react/prop-types': 'off', // Отключение проверки пропсов
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
