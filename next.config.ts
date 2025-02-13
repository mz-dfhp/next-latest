import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const nextConfig: NextConfig = {
  // output: 'export', // 启用纯静态导出
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gw.alipayobjects.com',
        port: '',
        pathname: '/**', // 允许所有路径
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**', // 允许所有路径
        search: '',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
