import path from 'path';

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const componentsPath = path.resolve(process.cwd(), 'components');
    const hooksPath = path.resolve(process.cwd(), 'hooks');

    config.resolve.alias['@components'] = componentsPath;
    config.resolve.alias['@hooks'] = hooksPath;

    return config;
  },
};

export default nextConfig;
