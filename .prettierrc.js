module.exports = {
   singleQuote: false,
   trailingComma: "all",
   tabWidth: 3,
   semi: true,
   plugins: ["@trivago/prettier-plugin-sort-imports"],
   importOrder: ["^react$", "^react-native$", "^@/(.*)$", "^[./]$"],
   importOrderSortSpecifiers: true,
};
