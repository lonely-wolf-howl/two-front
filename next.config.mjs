import path from 'path';

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    const componentsPath = path.resolve(process.cwd(), 'components');
    const hooksPath = path.resolve(process.cwd(), 'hooks');
    const utilsPath = path.resolve(process.cwd(), 'utils');

    config.resolve.alias['@components'] = componentsPath;
    config.resolve.alias['@hooks'] = hooksPath;
    config.resolve.alias['@utils'] = utilsPath;

    return config;
  },
};

export default nextConfig;
