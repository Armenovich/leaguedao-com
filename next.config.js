const path = require('path')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
const withReactSvg = require('next-react-svg')
module.exports = withPlugins(
    [
        [withImages],
        [{sassOptions: {includePaths: [path.join(__dirname, 'styles')] }}],
    ],
    {
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            });
            return config;
        },
        exportTrailingSlash: true,
    }
)