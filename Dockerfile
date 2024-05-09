FROM node:18.20.2 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@10.7.0
RUN npm install -g @angular/cli    # Install Angular CLI

# Create a new Angular project or use an existing one
RUN ng new frontend --skip-install
WORKDIR /app

# Copy the application code into the Docker container
COPY . .

# Build the Angular application
RUN ng build

FROM nginx
COPY --from=builder /app/dist/* /usr/share/nginx/html
EXPOSE 80
