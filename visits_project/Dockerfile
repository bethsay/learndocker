# Define Base.
FROM node:alpine
WORKDIR /usr/app
COPY ./package.json ./
# Install Dependency
RUN npm install
COPY ./ ./
# Run Startup command
CMD [ "npm", "start" ]