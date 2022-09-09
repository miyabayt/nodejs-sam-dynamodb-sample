FROM node:18.9.0-alpine

RUN ["apk", "update"]
RUN ["npm", "install", "dynamodb-admin", "-g"]

EXPOSE 50727
CMD ["dynamodb-admin", "-p", "50727"]
