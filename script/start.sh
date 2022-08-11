#!/bin/bash

cd /home/ubuntu/discord-bot
pwd
ls -al

# export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# npm install
# pm2 start src/app.js

docker build -t bot_img .
docker run --rm --name bot_container bot_img