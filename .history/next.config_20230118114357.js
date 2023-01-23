const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self'; 
`
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
	  appDir: true,
	},
	images: {
		domains: ['cdn.sanity.io'],
		loader: 'custom',
		remotePatterns: [
			{
			  protocol: 'https',
			  hostname: 'cdn.sanity.io',
			},
		  ],
	},
	
  env: {

  }   
  };
  
module.exports = nextConfig;
