FROM node:16

WORKDIR /wdk-discord-bot
COPY . .
RUN npm install

CMD ["npm","start"]