/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/rank',
				destination: '/rank/total',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
