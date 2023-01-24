
const nextConfig = {
	reactStrictMode: true,
	experimental: {
	  appDir: true,
	},
	images: {
		domains: ['cdn.sanity.io'],
		loader: 'custom',
	},
	
  };
  
module.exports = nextConfig;
