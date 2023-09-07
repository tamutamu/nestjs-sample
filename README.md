## Requirements

## Getting Started

### 開発サーバを起動するまでの手順

```bash
$ git clone [URL]

$ cd [repo name]

# 依存モジュール追加
$ npm i

# 開発用ミドル起動
$ docker-compose up -d

# DBにモデル定義反映
$ npx prisma migrate dev

# 開発モードでサーバ起動
$ npm run start:dev
```

### 動作確認の手順

1. 開発サーバを起動しておく
1. VsCodeで開く
1. ワークスペース推奨拡張をインストール
1. VsCode上で [test.rest](./test.rest) を開く
1. `// ユーザ登録`の下の `Send Request` を押すとサーバにリクエストが飛ぶ
1. データを確認する
   ```bash
   $ npx prisma studio
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

## 開発ルール

### URL設計

- https://zenn.dev/yu1ro/articles/4c73274383b676
