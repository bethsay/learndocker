# Define Base.
#FROM alpine            # This didnt work cuz alpine doesnt have any node packages
                        # So we browsed dockerhub for node and selected one that said official
                        # We chose the alpine version of node to have the ligtest possible image
FROM node:alpine
                        # defining WORKDIR will make sure all other commands are not run in root.
                        # if WORKDIR doesnt exist it will be created
                        # if you skip this command npm install will fail
WORKDIR /usr/app
# COPY ./ ./            # You could copy all pwd files to WORKDIR. but...
                        # npm install needs to be run only if there are changes to packages.json 
                        # using one COPY command will make docker do rebuild for all the below commands.
                        # save time with using multiple and specific copy commands 
COPY ./package.json ./
# Install Dependency
RUN npm install
COPY ./ ./
# Run Startup command
CMD [ "npm", "start" ]