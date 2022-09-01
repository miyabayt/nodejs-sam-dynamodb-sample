var AWS = require('aws-sdk');
var options = {
    region: process.env.AWS_REGION,
    s3ForcePathStyle: process.env.AWS_REGION === "local"
}
if (process.env.AWS_S3_ENDPOINT) {
    options.endpoint = new AWS.Endpoint(process.env.AWS_S3_ENDPOINT);
}

var s3 = new AWS.S3(options);

module.exports = s3;
