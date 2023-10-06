import { defineConfig } from '@jcamp/vitepress-blog-theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Noir Docs",
  description: "Noir Documents",
  themeConfig: {
    blog: {
      title: 'My AI Written Blog',
      description: 'All these articles were written by AI!',
      defaultAuthor: 'AI Writer',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
      },
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Learn', link: '/learn/what-is-noir' },
      { text: 'Build', link: '/build/introduction/create-account' },
      {
        text: 'Blog',
        items: [
          {
            text: 'Blog Home',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          }
        ],
      },
    ],

    sidebar: {
      "/learn/": [
        {
          text: 'What is Noir?',
          link: '/learn/what-is-noir'
        },
        {
          text: 'Accounts',
          items: [
            { text: 'WebAuthn Account', link: '/learn/accounts/webauthn-account' },
            { text: 'Universal Address', link: '/learn/accounts/universal-address' },
            { text: 'Integrated Account', link: '/learn/accounts/integrated-account' },
            { text: 'Account Name', link: '/learn/accounts/account-name' },
            { text: 'Proxy Account [WIP]', link: '/learn/accounts/proxy-account' },
          ],
          collapsed: true
        },
        {
          text: 'Compatibility',
          items: [
            { text: 'Polkadot', link: '/learn/compatibility/polkadot' },
            { text: 'EVM', link: '/learn/compatibility/evm' },
            { text: 'Cosmos', link: '/learn/compatibility/cosmos' },
          ],
          collapsed: true
        },
        {
          text: 'Network',
          items: [
            { text: 'Testnet', link: '/learn/network/testnet' },
          ],
          collapsed: true
        },
        {
          text: 'Consensus',
          items: [
            { text: 'Proof of Authority', link: '/learn/consensus/proof-of-authority' },
            { text: 'Proof of Work [WIP]', link: '/learn/consensus/proof-of-work' },
          ],
          collapsed: true
        }
      ],
      "/build/": [
        {
          text: 'Introduction',
          items: [
            { text: 'Create Account', link: '/build/introduction/create-account' },
            { text: 'Faucet', link: '/build/introduction/faucet' },
          ],
          collapsed: true
        },
        {
          text: 'Build Environment',
          items: [
            { text: 'Network RPC', link: '/build/build-environment/network-rpc' },
            { text: 'Add Custom Features', link: '/build/build-environment/add-custom-features' },
            { text: 'Running Local Network', link: '/build/build-environment/running-local-network' },
          ],
          collapsed: true
        },
        {
          text: 'Keyhub',
          items: [
            { text: 'Wallet', link: '/build/keyhub/wallet' },
          ],
          collapsed: true
        },
        {
          text: 'EVM Compatibility',
          items: [
            { text: 'Metamask', link: '/build/evm-compatibility/metamask' },
            { text: 'Ethers.js', link: '/build/evm-compatibility/ethers-js' },
          ],
          collapsed: true
        },
        {
          text: 'Cosmos Compatibility',
          items: [
            { text: 'Keplr', link: '/build/cosmos-compatibility/keplr' },
            { text: 'CosmJS', link: '/build/cosmos-compatibility/cosmjs' },
          ],
          collapsed: true
        },
        {
          text: 'Run a Node',
          link: '/build/run-a-node'
        },
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/jcamp-code/vitepress-blog-theme',
      },
    ],
  },
})
