# Use official Node.js LTS (Long Term Support) image as base
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire application
COPY . .

# Build the application
RUN npm run build

# Production environment
FROM node:20

# Set working directory
WORKDIR /app

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy build files from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public


# Command to run the application
CMD ["npm", "start"]
