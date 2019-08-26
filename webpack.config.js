module.exports = {
  entry: './src/example.ts',
  output: {
    filename: 'example.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname,
    port: 3000,
  },
};
