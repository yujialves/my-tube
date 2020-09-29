FROM node:latest
WORKDIR /usr/src/app
COPY app .
RUN npm ci
CMD ["npm", "run", "dev"]