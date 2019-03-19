FROM node:alpine

WORKDIR /usr/src/app

COPY package.json package*.json ./
RUN npm install --only=production

COPY . .
ENV PORT 8080

CMD ["npm", "start"]
