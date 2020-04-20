# PHP + React

PHP server running at root directory. During development, React development server proxies /api requests to localhost:4001, where PHP server is running. During production, React build files live under /build directory and PHP home page simply includes the single-page application.

- [x] Realistically, however, we need to deploy the built React files since the production PHP server will likely not be able to build the React app on its own.
  - [x] This deployment from a local machine needs to be smooth and easy.
  - [ ] Customizable branch for deployment
