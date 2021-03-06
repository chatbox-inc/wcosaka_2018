module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wcosaka',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
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
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/scss/app.scss"
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    analyze: {
      analyzerMode: 'static'
    },
    extend (config, { isDev, isClient }) {
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/'){
          rule.options.limit = 100000
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
