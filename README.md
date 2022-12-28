# webpack-typescript-setup
React application configured with webpack module bundler 5.0 and tailored for typescript projects. This project provides a template for everyone who wants to start a React Application production-ready.

This project uses Webpack with different configurations either for development or production.

For run this project locally run:

    npm start

To build optimized bundle for production run:

    npm run build

After running this command webpack will minify your code and put it all together in a single file (bundle).

Also provides a dockerfile to build an image a run it as a Docker container.

    docker build -t ./Dockerfile react-app

The server which host the app is NGINX.

