const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "dananb",
    projectName: "view-todos",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    externals: [
      "react",
      "react-dom",
      "rxjs",
      "single-spa",
      "@dananb/eventmanager",
    ],
  });
};
