module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wcosaka',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'apple-touch-icon-precomposed', href: '/apple-touch-icon.png'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    "element-ui/lib/theme-chalk/input.css",
    "element-ui/lib/theme-chalk/icon.css",
    "element-ui/lib/theme-chalk/notification.css",
    "~/assets/scss/app.scss"
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [{ removeDoctype: true }, { removeComments: true }]
          }
        }
      })
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins:[
    "~/plugins/index.js"
  ],
  modules:[
    '@nuxtjs/pwa',
  ]
}
