# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

#Change timezone to server
ENV TZ=America/Guayaquil
USER root
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Ports to Export
EXPOSE 4200


# Serve the app
CMD ["ng", "serve", "--host", "0.0.0.0"]
