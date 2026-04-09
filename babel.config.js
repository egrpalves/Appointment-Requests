module.exports = {
  presets: [
    ['@babel/preset-react', { runtime: 'automatic' }],
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        modules: 'auto', // This allows Babel to handle ES modules properly
      },
    ],
  ],
};
