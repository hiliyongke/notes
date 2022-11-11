import { defineConfig } from 'vitepress'
import nav from './utils/nav.json'
import sidebar from './utils/sidebar.json'
import { description } from './utils/description'

const config = defineConfig({
  title: 'Lyk`s Notes',
  head: [['link', { rel: 'icon', href: '' }]],
  description,
  ignoreDeadLinks: true,
  base: '/notes/',
  themeConfig: {
    logo: '',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hiliyongke'
      }
    ],
    nav,
    sidebar,
    editLink: {
      pattern: 'https://github.com/hiliyongke/blob/main/docs/:path'
    }
  }
})

export default config
