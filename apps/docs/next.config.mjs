import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config',
})

const repo = 'ihoku'
const isDev = process.env.NODE_ENV !== 'production'
const isCI = process.env.CI === 'true' || process.env.NEXT_PUBLIC_IS_CI === 'true'

const isDeploy = !isDev && isCI

const buildConfig = {
  output: isDeploy ? 'export' : undefined,
  basePath: isDeploy ? `/${repo}` : undefined,
  assetPrefix: isDeploy ? `/${repo}/` : undefined,
}

export default withNextra({
  reactStrictMode: true,
  trailingSlash: true,
  images: { unoptimized: true },

  ...buildConfig
})
