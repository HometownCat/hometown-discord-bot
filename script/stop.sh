#!/bin/bash

cd /home/ubuntu/discord-bot
pm2 stop src/app.js 2> /dev/null || true
pm2 delete src/app.js 2> /dev/null || true

docker stop bot_container
docker rmi bot_img