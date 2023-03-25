FROM node:14

WORKDIR /app

# install app dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn add global react-scripts@4.0.3
RUN yarn 

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]