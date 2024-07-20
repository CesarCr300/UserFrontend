FROM node:21.6.1

#By default, the PORT is 3000
ARG PORT=3000

RUN echo $PORT

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE $PORT

CMD [ "yarn", "start:dev", "--host", "0.0.0.0" ]