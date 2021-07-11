module.exports = {
    pwa: {
        name: 'My App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    
        // configure the workbox plugin
    
      },

    publicPath: process.env.NODE_ENV === 'production'
      ? '/basic-quiz-app/'
      : '/'
  }