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
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  }
})