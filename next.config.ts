import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'opt.tyreclub.com.ua',
				pathname: '/public/img/user/**',
			},
			{
				protocol: 'https',
				hostname: 'admin.imperiashyn.com.ua',
				pathname: '**',
			},
		],
	},

	experimental: {
		optimizePackageImports: ['@heroui/react'],
	},
};

export default withNextIntl(nextConfig);
