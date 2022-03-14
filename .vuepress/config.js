const { description } = require('../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    // displayAllHeaders: true,
    search: false,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Canvas',
        link: '/canvas/01 - wstęp',
      },
      {
        text: 'Array',
        link: '/array/01 - podstawy'
      }
    ],
    sidebar:[  
      {
        title: 'Canvas',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        children: [
          '/canvas/01 - wstęp',
          '/canvas/02 - podstawy rysowania',
          '/canvas/03 - rysowanie parametryczne',
          '/canvas/91 - zaawansowane zmienne kontekstu'
        ]
      },
      {
        title: 'Array listy tablice',   // required
        collapsable: false, // optional, defaults to true
        sidebarDepth: 3,    // optional, defaults to 1
        children: [
          '/array/01 - podstawy'
        ]
      },
    ]
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
