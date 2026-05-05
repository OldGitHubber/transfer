# Use an official Node runtime
FROM node:alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Start the app
CMD ["node", "app.js"]
