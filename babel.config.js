const moduleResolverPlugin = [
  require.resolve('babel-plugin-module-resolver'),
  {
    extensions: ['.ios.js', '.android.js', '.js', '.json'],
    root: ['./src'],
    alias: {
      components: './src/components',
      containers: './src/containers',
      store: './src/store',
      actions: './src/store/actions',
      reducers: './src/store/reducers',
      selectors: './src/store/selectors',
      types: './src/types',
    },
  },
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [moduleResolverPlugin],
};
