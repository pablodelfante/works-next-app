const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    images: {
        domains: ['res.cloudinary.com', 'blog.aulaformativa.com', 'media.giphy.com', 'avatars.githubusercontent.com', 'media.graphassets.com', 'us-east-1-shared-usea1-02.graphassets.com'],
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
