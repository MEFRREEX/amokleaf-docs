import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AmokLeaf Docs</span>,
  footer: {
    text: '© 2025 AmokLeaf Documentation',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – AmokLeaf Docs'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="AmokLeaf Documentation" />
      <meta property="og:description" content="Official documentation for AmokLeaf" />
    </>
  ),
}

export default config 