ARG NODE_VERSION=20.8.0

# Use the official Node.js image as the base
FROM node:${NODE_VERSION}-alpine as base

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies
RUN rm -rf node_modules dist
RUN yarn

# Expose the port that the application listens on.
EXPOSE 5001

# Start the Nest.js application
CMD [ "yarn", "start:dev" ]
