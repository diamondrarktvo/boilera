// metro.config.js
const {
   wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");
const { getDefaultConfig } = require("expo/metro-config");

// Récupère la config Expo par défaut
const config = getDefaultConfig(__dirname);

// Enrobe la config pour améliorer la précision des call-stacks Reanimated
module.exports = wrapWithReanimatedMetroConfig(config);
