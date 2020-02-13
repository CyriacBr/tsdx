import { Template } from './template';

const basicTemplate: Template = {
  name: 'basic',
  dependencies: [
    '@types/jest',
    'husky',
    'cyriacbr-tsdx',
    'tslib',
    'typescript',
  ],
  packageJson: {
    // name: safeName,
    version: '0.1.0',
    license: 'MIT',
    // author: author,
    main: 'dist/index.js',
    // module: `dist/${safeName}.esm.js`,
    typings: `dist/index.d.ts`,
    files: ['dist'],
    engines: {
      node: '>=10',
    },
    scripts: {
      start: 'cyriacbr-tsdx watch',
      build: 'cyriacbr-tsdx build',
      test: 'cyriacbr-tsdx test',
      lint: 'cyriacbr-tsdx lint',
      prepare: 'cyriacbr-tsdx build',
    },
    peerDependencies: {},
    husky: {
      hooks: {
        'pre-commit': 'cyriacbr-tsdx lint',
      },
    },
    prettier: {
      printWidth: 80,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
    },
  },
};

export default basicTemplate;
