import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default {
  entry: {
    'monaco-editor': './src/editor.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset',
      }
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['json', 'typescript', 'javascript'], // Add supported languages here
    }),
  ],
};