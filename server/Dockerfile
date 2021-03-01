FROM node:15.10.0-alpine3.13

WORKDIR /home/app/src

COPY package.json yarn.lock  ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]
