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
	images: {
		domains: ['d2v29gpqtyxxyk.cloudfront.net'], // 여기에 외부 도메인 추가
	},
};

module.exports = nextConfig;
