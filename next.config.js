const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "Components"),
      path.join(__dirname, "app"),
    ],
    additionalData: `@import "@/styles/scss/variables.scss"; @import "@/styles/scss/mixins.scss";`,
  },
};

module.exports = nextConfig;
