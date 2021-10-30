const preprocess = require('svelte-preprocess');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
  svelteOptions: {
    preprocess: preprocess
  },
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes('svelte-loader')
    );
    svelteLoader.options.preprocess = preprocess();
    return config;
  }
};
