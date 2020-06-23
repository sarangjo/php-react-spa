# PHP + React SPA

- [PHP + React SPA](#php--react-spa)
  - [Quickstart](#quickstart)
    - [Development](#development)
    - [Deploy to `gh-pages` branch](#deploy-to-gh-pages-branch)
  - [Architecture](#architecture)
    - [Development](#development-1)
    - [Build/Production](#buildproduction)
  - [Caveats](#caveats)
  - [TODO](#todo)

This is a template to allow for client-side React single-page applications running on top of a PHP API server. A lot of domain hosting services only offer PHP, so this is a good way to develop a React application that works well with the PHP server.

## Quickstart

### Setup

Install PHP, nodejs, yarn on your computer.

### Development

In one terminal, run:

```
$ yarn start:server
```

In another terminal, run:

```
$ yarn start:client
```

### Deploy to `gh-pages` branch

```
$ yarn deploy
```

## Architecture

### Development

1. The PHP server listens at port 4001 for any PHP-specific requests. At the moment, this includes:
   1. `/api`: any API calls
   2. `/custom-php`: a test area for serving custom PHP
2. Any additional custom PHP endpoints need to be manually added to `src/setupProxy.js`
3. The CRA dev server is served at port 3000 for the React development build.

### Build/Production

When built, the React SPA files are located under the `build/` directory. Before deploying, we move all files under the `server/` directory into `build/`, and deploy the `build/` directory.

## Caveats

1. Any links to parts of the tree that are outside the React Router tree need to be `<a>` anchors, since we need to reload the page and not simply set the URL. This shouldn't be a problem because elements outside of the React tree should be separate anyway.

## TODO

- [ ] Customizable branch for deployment
