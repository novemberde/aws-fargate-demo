# aws-fargate-demo
AWS fargate demo for re:Invent recap 2018 in Korea.

## [web-app](/web-app)

How to

```sh
$ npm install
$ docker build -t web-app .
$ docker tag web-app:latest <YOUR_REPOSITORY_URL_ON_ECR>/web-app:latest
$ docker push web-app:latest <YOUR_REPOSITORY_URL_ON_ECR>/web-app:latest
```

Start localhost web-app 

```sh
$ npm start
```

## [crawler](/crawler)

How to

Create slack.config.json file on [./crawler/] and set json like below.

```json
{
    "URL": "WEB_HOOK_SLACK_URL"
}
```

```sh
$ npm install
$ docker build -t crawler .
$ docker tag crawler:latest <YOUR_REPOSITORY_URL_ON_ECR>/crawler:latest
$ docker push crawler:latest <YOUR_REPOSITORY_URL_ON_ECR>/crawler:latest
```

[MIT License](/LICENSE)