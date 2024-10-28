FROM node:18-alpine

# Set working directory
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy package files
COPY next/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the built application files
COPY next/.next ./.next
COPY next/next.config.mjs ./
COPY next/public ./public

# Expose the desired port
EXPOSE 80

# Start the Node.js server
CMD ["npm", "run", "start"]