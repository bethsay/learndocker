# Define Base.
FROM node:alpine AS build_stage
WORKDIR /opt/fibonacci_react
COPY ./package.json ./
# Install Dependency
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default-prod.conf /etc/nginx/conf.d/default.conf
COPY --from=build_stage /opt/fibonacci_react/build /usr/share/nginx/html