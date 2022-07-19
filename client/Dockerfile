FROM node:16.16.0
WORKDIR /app
COPY package.json .
RUN npm i bcrypt
RUN npm install -g npm@8.14.0
RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . ./
EXPOSE 3000
CMD ["npm", "start"]
