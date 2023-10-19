const path = require("path");
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "Components"),
      path.join(__dirname, "app"),
    ],
    additionalData: `@import "@/styles/scss/abstract/variables.scss"; @import "@/styles/scss/abstract/mixins.scss";@import "@/styles/scss/base/animations.scss";`,
  },
};

module.exports = nextConfig;
