const { description } = require('../package')
const glob = require('glob');

const mat_dirs = glob.sync('materialy/*').filter(s => !s.endsWith('.md'))

const mat = mat_dirs.map( d => (
  {
    title: d.replace('materialy/',''),   // required
    sidebarDepth: 3,
    children: glob.sync(`${d}/*.md`).map(s => '/'+s)
  }
))

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Materiały edukacyjne',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "description",

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
        text: 'Grupa Pt 16:30',
        link: '/grupy/pt-16-30/',
      },
      {
        text: 'Grupa Pt 18:15',
        link: '/grupy/pt-18-15/'
      },
      {
        text: 'Wszystkie materiały',
        link: '/materialy/'
      }
    ],
    sidebar:{
      '/grupy/pt-18-15/':[
        '/grupy/pt-18-15/',
        {
          title: 'Canvasy',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/grupy/pt-18-15/canvas/wytlumaczenie-podstawy',
            '/grupy/pt-18-15/canvas/sciagawka-podstawy',
            '/grupy/pt-18-15/canvas/projekt-gra-klikacz',
          ]
        },
        {
          title: 'Listy (Tablice Array)',   // required
          collapsable: false, // optional, defaults to true
          sidebarDepth: 3,    // optional, defaults to 1
          children: [
            '/grupy/pt-18-15/array/przypomnienie',
            '/grupy/pt-18-15/array/sciagawka',
            '/grupy/pt-18-15/array/przedruk-dokumentacji',
          ]
        }
      ],
      '/materialy/':[
        '/materialy/',
        ...mat
      ],
      '/':[]
    }
},
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
