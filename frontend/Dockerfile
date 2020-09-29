FROM node:latest
WORKDIR /usr/src/app

# Install app dependencies
COPY app/package*.json ./
RUN npm ci

COPY ./app .

CMD ["npm", "run", "dev"]