FROM node:18.6.0
RUN npm install -g nodemon
WORKDIR /app
COPY package.json .
RUN npm install
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . ./
EXPOSE 5000
CMD ["npm", "run", "start"]
