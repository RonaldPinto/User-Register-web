/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          }},
          {
            loader: require.resolve('less-loader'),
            options: {
              importLoaders: 1,
            },
          }
          
        ]
      }
    ]
  }
};
