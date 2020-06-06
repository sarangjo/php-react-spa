const { createProxyMiddleware } = require("http-proxy-middleware");

const middleware = () =>
  createProxyMiddleware({
    target: "http://localhost:4001",
    changeOrigin: true,
  });

module.exports = function (app) {
  app.use("/api", middleware());
  app.use("/custom-php", middleware());
};
