# nodejs-sam-dynamodb-sample

## Dockerコンテナの起動

```bash
$ docker compose up -d
```

以下が起動します。
- localstack
  - ローカルで動作するでAWS互換スタック (https://github.com/localstack/localstack)
- DynamoDB Admin
  - DynamoDBを操作するGUI（http://localhost:8001）

### localstack
以下のエンドポイントを指定することで利用できます。<br>
http://localhost:4566

AWS CLIの例
```bash
$ aws s3api create-bucket --bucket test --endpoint http://localhost:4566
$ aws s3api list-buckets --endpoint http://localhost:4566
$ aws s3 ls s3://test --endpoint http://localhost:4566
```

### dynamodb-admin
http://localhost:8001

テーブル作成の例
```bash
--endpoint-url http://localhost:4566
$ aws dynamodb create-table --table-name 'sessions' \
--attribute-definitions '[{"AttributeName": "id", "AttributeType": "S"}]' \
--key-schema '[{"AttributeName": "id", "KeyType": "HASH"}]' \
--billing-mode 'PAY_PER_REQUEST' \
--endpoint-url http://localhost:4566
$ aws dynamodb update-time-to-live --table-name 'sessions' \
--time-to-live-specification 'Enabled=true, AttributeName=expires' \
--endpoint-url http://localhost:4566
```

## アプリケーションの起動

初回のみ npm install を実行してください。
```bash
$ npm install
$ npm install -g cross-env
$ npm install -g node-dev
$ npm install -g mocha
$ npm run dev
```

## ライブラリの使い方

### aws-dynamodb.js

実装例
```Javascript
var documentClient = require('../lib/aws-dynamodb'); // 相対パスは、呼び出し元の位置に合わせてください

var params = {
  TableName: "Movies",
  Item: {
    "title": 'test'
  }
};

try {
  var data = await documentClient.put(params).promise();
  console.log('put inquiry success. [id=${id}]', JSON.stringify(data, null, 2));
} catch (e) {
  console.error("Error", e);
}
```

### aws-s3.js

実装例
```Javascript
var s3 = require('../lib/aws-s3'); // 相対パスは、呼び出し元の位置に合わせてください

var params = {
  Bucket: 'test',
  Key: 'test',
  Body: 'test'
};

try {
  await s3.putObject(params).promise();
} catch (e) {
  console.error("Error", e);
}
```

## テストの実行

```bash
$ # ローカルで実行する
$ npm run test:local
$
$ # BrowserStackで実行する
$ npm run test:bs
```
