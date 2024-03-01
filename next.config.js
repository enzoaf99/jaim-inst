/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    assetPrefix: 'https://jaim.online/', // Esta es la URL base donde se sirven tus archivos estáticos
    crossOrigin: "anonymous"
}

module.exports = nextConfig