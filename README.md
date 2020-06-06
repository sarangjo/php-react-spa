# PHP + React SPA

This is a template to allow for client-side React single-page applications running on top of a PHP API server. A lot of domain hosting services only offer PHP, so this is a good way to develop a React application that works well with the PHP server.

## Development

```
$ yarn start:server
$ yarn start:client
```

1. The PHP server listens at port 4001 for any PHP-specific requests. At the moment, this includes:
   1. `/api`: any API calls
   2. `/custom-php`: a test area for serving custom PHP
2. Any additional custom PHP endpoints need to be manually added to `src/setupProxy.js`
3. The CRA dev server is served at port 3000 for the React development build.

## Production

## Caveats

1. Any links to parts of the tree that are outside the React Router tree need to be `<a>` anchors, since we need to reload the page and not simply set the URL. This shouldn't be a problem because elements outside of the React tree should be separate anyway.

## TODO

- [ ] Customizable branch for deployment
