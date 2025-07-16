const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'blog.aulaformativa.com',
            },
            {
                protocol: 'https',
                hostname: 'media.giphy.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: '**.graphassets.com',
            },
        ],
    },
    // https://dev.to/byteslash/how-to-create-a-pwa-with-next-js-4dbm
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
        sw: 'sw.js',
        scope: '/',
        // issuse github
        runtimeCaching,
        buildExcludes: [/middleware-manifest.json$/],
    },
})
