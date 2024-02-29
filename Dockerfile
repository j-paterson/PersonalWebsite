# Use Node's version 10 Docker Image as a base
FROM node:10-alpine AS builder

# Working Directory Creation/Setup (Opt is where application data goes)
WORKDIR /opt/jessepaterson/

# Get dependencies (Move package.json from the host to the current working directory)
COPY package.json ./
RUN npm i

# Copy the rest of the project from the host
COPY . /opt/jessepaterson/

# Build site
RUN npm run build

# NGINX is a web server like apache but 21st century
FROM nginx:alpine
EXPOSE 80
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /opt/jessepaterson/build /var/www/html
