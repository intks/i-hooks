import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js'
})

const repo = 'i-hooks'
const isDev = process.env.NODE_ENV !== 'production'
const isCI = process.env.CI === 'true' || process.env.NEXT_PUBLIC_IS_CI === 'true'


const basePath = (!isDev && isCI) ? `/${repo}` : undefined
const assetPrefix = basePath

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  basePath,
  assetPrefix,

  compiler: {
    removeConsole: true
  }
})
