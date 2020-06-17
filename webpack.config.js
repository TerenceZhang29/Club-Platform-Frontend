var config = {
      entry: './main.js',

      output: {
        path: __dirname,
        filename: 'index.js'
      },

      devServer: {
        inline: true,
        port: 7777
      },

      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/react', '@babel/es2015']
            }
          }
        ]
      }
    }

    module.exports = config;