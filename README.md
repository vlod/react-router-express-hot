ReactRouterExpressHot
=====================
A stub project that solves a whole bunch of technical problems I've had.

- Getting a production js/css files generated to public directory with md5 hashes (for cache busting).
- Hot-reloading working with expressjs serving index.html
- React-router working with hot-reloading

Dependencies
------------
- bootstrap
- sass
- webpack-hot-middleware
- expressjs
- react-router
- webpack-md5-hash

Installation
------------
npm i

Running
------------

For dev - run node in development mode (uses webpack-hot-middleware):

    # rm -rf public/resources;  # only if you've previous run in production mode
    npm run start

For prod - generate the javascript files into public/js with md5 hashes:

    rm -f public/resources/*; npm run build; NODE_ENV=production npm run start


Authors
-------

* **Vlod Kalicun** ([Twitter](https://twitter.com/vlod) / [GitHub](https://github.com/vlod))

License
-------

Licensed under the MIT License

If you're so inclined, shoot me an email at: vlod [@] vlod.com on how you're using it or if you have any feedback.

I'm always curious if you're doing anything cool! :)

If this saved you some time, feel free to send a Bitcoin tip to: 1L5XVLRUDK3oRR3gAa5eGrrSjUme2RSoVM