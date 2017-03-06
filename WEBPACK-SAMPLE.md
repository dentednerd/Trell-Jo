## Sample Webpack Configuration

Use this configuration for reference if you need to - do not simply copy and paste it, but work through line by line and make sure you understand what is happening.

Make sure to reference Webpack's excellent [Configuration Documentation](https://webpack.js.org/configuration/) for clarification and to explore further options.


```javascript
var path = require('path');

module.exports = {
  // the initial file at the head of your project tree which loads in all other files and dependencies
  entry: './src/index.js',
  
  output: {
    // the name of the bundle file you want to create
    filename: 'bundle.js',

    // the absolute path for the output file
    path: path.resolve(__dirname, 'public', 'js'),

    // the URL to the output directory relative to the index.html file. This specifies where any static files like CSS files are loaded from.
    publicPath: '/'
  },

  // enable line number preservation in console messages
  devtool: 'eval-source-map',

  // options for configuring modules
  module: {

    // define an array of rules for different modules
    rules: [
        {   
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'url-loader'
      }
    ]
  },

  // serve project with a development server
  devServer: {

    // the absolute path where any static content such as the index.html page should be loaded from
    contentBase: path.join(__dirname, 'public'),
    
    // the place where the bundle (produced in memory) should be served from 
    publicPath: '/js/',

    // the port you want your project to run on
    port: 9090
  }
};
```