module.exports = {
  devServer: {
    port: 8080,
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  
  transpileDependencies: true,
  
};
