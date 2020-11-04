import { resolve } from "path"

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-element-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/index.scss',
    'normalize.css/normalize.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vue-global.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    ['@nuxtjs/dotenv', { filename: '.env' }],
    'nuxt-vuex-localstorage',
    'cookie-universal-nuxt',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));
      svgRule.exclude = [resolve(__dirname, "assets/icons/svg")];
      //添加loader规则
      config.module.rules.push({
        test: /\.svg$/,
        include: [resolve(__dirname, "assets/icons/svg")],
        use: [
          { loader: "svg-sprite-loader", options: { symbolId: "icon-[name]" } }
        ]
      });
    }
  },
  router: {
    middleware: 'auth'
  }
}
