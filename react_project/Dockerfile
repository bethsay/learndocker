# Define Base.
FROM node:alpine AS build_stage
                                    # When you have multiple FROM in dockerfile, you have a MultiStage build
                                    # By default, docker will assign each stage with sequence number.
                                    # Use AS to label your stages. AS <name> must be defined with FROM <image>
                                    # If "AS build_stage" is not defined, docker would see it "AS 0".
WORKDIR /opt/react_project
COPY ./package.json ./
# Install Dependency
RUN npm install
COPY ./ ./
RUN npm run build
                                    # We previously had used CMD here as we were defining the command to run during container startup
                                    # If you CMD instead of RUN, prod_stage build will fail with error file not found.
FROM nginx AS prod_stage
                                    # We could skip naming this stage as we dont wont refernce it later.
COPY --from=build_stage /opt/react_project/build /usr/share/nginx/html
                                    # dockerhub documentation of nginx tells us where to place files to be hosted 
                                    # --from is refering to image created by build_stage.
                                    # --from could also refer to any imagetag. both local and dockerhub

#FROM build_stage                   # You can also start an new stage with the image of an existing stage