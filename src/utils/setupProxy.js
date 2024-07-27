import proxy from "http-proxy-middleware";

// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: "http://localhost:3000",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
    })
  );
};
