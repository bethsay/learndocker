# Define Base.
FROM node:alpine
WORKDIR /opt/fibonacci_worker
COPY ./package.json ./
# Install Dependency
RUN npm install
COPY ./ ./
# Run Startup command
CMD [ "npm", "run", "start" ]