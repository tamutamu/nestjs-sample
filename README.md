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

## 開発ルーティン

### APIエンドポイントの追加

```bash
nest g module [リソース名(複数形)]
nest g controller [リソース名(複数形)]
nest g service [リソース名(複数形)]
```

### DBのドロップ

```bash
$ docker-compose down -v
```

### テーブル定義の変更

TODO
