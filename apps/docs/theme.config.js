/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const config = {
  logo: 'i-hooks',
  project: { link: 'https://github.com/intks/i-hooks' },
  link: null,

  docsRepositoryBase: 'https://github.com/intks/i-hooks/tree/main/apps/docs',

  useNextSeoProps() {
    return { titleTemplate: '%s – i-hooks' }
  },
  footer: { text: 'i-hooks Docs' }
}

export default config
