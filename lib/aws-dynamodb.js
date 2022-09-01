var AWS = require('aws-sdk');
var options = {
    apiVersion: '2012-08-10',
    region: process.env.AWS_REGION
}
if (process.env.AWS_DYNAMODB_ENDPOINT) {
    options.endpoint = process.env.AWS_DYNAMODB_ENDPOINT;
}
var documentClient = new AWS.DynamoDB.DocumentClient(options);

module.exports = documentClient;
