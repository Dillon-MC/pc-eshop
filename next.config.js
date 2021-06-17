const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    images: {
        domains: ["in-media.apjonlinecdn.com","crinix.com.ng","images-na.ssl-images-amazon.com"]
    },
});