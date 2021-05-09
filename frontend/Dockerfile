# Step 1

FROM node:15.12.0-alpine3.10 as build-step

WORKDIR /app

COPY . /app

RUN yarn

RUN yarn run build
 

# Stage 2

FROM nginx:1.19.8-alpine
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/build /usr/share/nginx/html