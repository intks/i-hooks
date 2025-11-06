/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  logo: 'i-hooks',
  project: { link: 'https://github.com/' },
  docsRepositoryBase: 'https://github.com/',
  useNextSeoProps() {
    return { titleTemplate: '%s – i-hooks' }
  },
  footer: { text: 'i-hooks Docs' }
}

export default config

