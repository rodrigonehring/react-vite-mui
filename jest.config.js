module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '\\.[jt]sx?$': [
      'esbuild-jest',
      {
        loaders: {
          '.test.js': 'jsx',
          '.js': 'jsx',
        },
      },
    ],
  },
}
