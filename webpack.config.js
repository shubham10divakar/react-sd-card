const path = require('path');

module.exports = {
  mode: 'production', // Set to 'development' for development builds
  entry: './src/Card.js', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'index.js', // Output file name
    libraryTarget: 'umd', // Universal Module Definition export
    library: 'react-sd-card', // Name of your library exposed as a global variable
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'ecmascript', // Set to 'typescript' for TypeScript support
                  jsx: true, // Enable JSX parsing
                  decorators: true, // Enable decorators if needed
                  dynamicImport: true, // Enable dynamic import syntax
                },
                transform: {
                  react: {
                    runtime: 'automatic', // Use automatic JSX runtime
                  },
                },
              },
            },
          },
        ],
      },
      {
        test: /\.css$/, // Add this rule to handle CSS files
        use: ['style-loader', 'css-loader'],
      },
      // Add other loaders as needed for images, fonts, etc.
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'react', // Exclude react from bundle (if using peer dependencies)
    'react-dom': 'react-dom', // Exclude react-dom from bundle (if using peer dependencies)
  },
};
