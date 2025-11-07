/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  logo: 'ihoku',
  project: { link: 'https://github.com/intks/ihoku' },
  link: null,

  docsRepositoryBase: 'https://github.com/intks/ihoku/tree/main/apps/docs',

  useNextSeoProps() {
    return { titleTemplate: '%s – ihoku' }
  },
  footer: { text: 'ihoku Docs' }
}

export default config
