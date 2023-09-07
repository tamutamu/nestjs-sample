## Installation

```bash
$ npm i

# 開発用ミドル起動
$ docker-compose up -d

# DBにモデル定義反映
$ npx prisma migrate dev

# モデル定義からClientコード生成
$ npx prisma generate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## APIエンドポイントの追加
TODO

## テーブル定義の変更
TODO