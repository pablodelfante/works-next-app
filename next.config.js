const withPWA = require('next-pwa');
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  images: {
    domains: [
      'res.cloudinary.com',
      'blog.aulaformativa.com',
      'media.giphy.com',
      'avatars.githubusercontent.com'
    ],
  },
  // https://dev.to/byteslash/how-to-create-a-pwa-with-next-js-4dbm
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    sw: 'sw.js',
    scope: '/',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
  }
})


// opciones pasadas por un issuse
// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// module.exports = withPWA({
// 	reactStrictMode: true,
// 	pwa: {
// 		dest: "public",
// 		register: true,
// 		skipWaiting: true,
// 		runtimeCaching,
// 		buildExcludes: [/middleware-manifest.json$/]
// 	}
// });

// "next": "^12.0.4",
// "next-pwa": "^5.4.0"