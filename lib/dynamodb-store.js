var AWS = require('aws-sdk');

module.exports = (session) => {
    var DynamoDBStore = require('connect-dynamodb')(session);

    var client = {
        apiVersion: '2012-08-10',
        region: process.env.AWS_REGION
    }
    if (process.env.AWS_DYNAMODB_ENDPOINT) {
        client.endpoint = process.env.AWS_DYNAMODB_ENDPOINT;
    }

    var options = {
        table:'sessions',
        AWSRegion: process.env.AWS_REGION
    }
    if (process.env.AWS_REGION === 'local') {
        options.client = new AWS.DynamoDB(client);
    }

    return new DynamoDBStore(options);
};
