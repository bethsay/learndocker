# Define Base. This is an exisiting docker image
FROM alpine
# Install Dependency. GCC can and should be skipped
RUN apk add --update redis
RUN apk add --update gcc
# Run Startup command
CMD [ "redis-server" ]