export default {
  plugins: [
    "@tailwindcss/postcss",
    {
      postcssPlugin: "remove-radix-collapsible-property",
      AtRule(atRule) {
        if (
          atRule.name === "property" &&
          atRule.params === "--radix-collapsible-content-height"
        ) {
          atRule.remove();
        }
      },
    },
  ],
};
