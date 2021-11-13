const withPWA = require('next-pwa');

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
  }
})