# base image là node:8
FROM node:8

# cài thêm vue-cli ở global, optional
RUN npm install -g vue-cli

# Khi login từ host vào container, mặc định sẽ là vào đây.
WORKDIR /opt/app/