import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	env: {
		API_URL: process.env.NEXT_PUBLIC_API_URL,
		HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
		HOSTNAME_TYRECLUB: process.env.NEXT_PUBLIC_HOSTNAME_TYRECLUB,
		ACCESS_ORIGIN: process.env.NEXT_PUBLIC_ACCESS_ORIGIN,
	},
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
