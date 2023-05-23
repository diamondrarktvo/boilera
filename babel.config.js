module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
         [
            'module-resolver',
            {
               cwd: 'babelrc',
               root: ['./src'],
               extensions: [
                  '.ios.ts',
                  '.android.ts',
                  '.ts',
                  '.ios.tsx',
                  '.android.tsx',
                  '.tsx',
                  '.jsx',
                  '.js',
                  '.json',
               ],
               alias: {
                  _components: './src/components',
                  _services: './src/services',
                  _images: './src/assets/images',
                  _screens: './src/screens',
                  _styles: './src/styles',
                  _store: './src/store',
                  _utils: './src/utils',
                  _navigations: './src/navigations',
                  _i18n: './src/i18n',
                  _hooks: './src/hooks',
               },
            },
         ],
         ['react-native-reanimated/plugin'],
      ],
  };
};
