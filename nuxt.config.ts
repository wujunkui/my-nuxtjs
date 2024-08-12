export default defineNuxtConfig({
  app: {
    head: {
      title: '个人网站',
      meta: [
        { name: 'description', content: '个人网站' },
        { name: 'keywords', content: '个人网站' },
      ]
    },
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    "nuxtjs-naive-ui"
  ],
  content: {
    // 配置内容模块，支持Markdown
  },

  // robots: {
  //   // 配置 robots.txt
  //   UserAgent: '*',
  //   Disallow: '',
  // },
  compatibilityDate: '2024-08-12',
})