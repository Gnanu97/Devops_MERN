FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the build
RUN npm install -g serve

EXPOSE 3002

# Serve the build folder
CMD ["serve", "-s", "build", "-l", "3002"] 