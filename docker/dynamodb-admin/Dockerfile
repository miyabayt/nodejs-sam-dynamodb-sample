FROM node:10.24.1-alpine

RUN ["apk", "update"]
RUN ["npm", "install", "dynamodb-admin", "-g"]

EXPOSE 50727
CMD ["dynamodb-admin", "-p", "50727"]
