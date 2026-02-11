# 1.はじめに

作成しているのは「案件管理システム」
既存のツールだとNotionなどがあるが、もう少しこだわった管理にしたいと考えたのがきっかけ

---

# 2.開発環境（Docker）

## 初回起動時

```
docker compose up --build
```

## 2回目以降

```
docker compose up
```

---

# 5.前提

- Node.js 20+
- Docker

# 4.概要

技術概要は以下（想定なので変更する可能性がある）

| 項目                          | 内容                                                               |
| ----------------------------- | ------------------------------------------------------------------ |
| **言語**                      | TypeScript                                                         |
| **フロントエンド**            | React                                                              |
| **バックエンド**              | Node.js                                                            |
| **フレームワーク**            | Remix                                                              |
| **ORM**                       | Prisma                                                             |
| **DB（開発環境）**            | Docker Compose の PostgreSQL                                       |
| **DB（本番環境）**            | Supabase 無料プラン（PostgreSQL）                                  |
| **コンテナ環境**              | Docker（開発・本番共通）                                           |
| **Lint / Formatter / テスト** | ~~ESLint / Prettier~~ / [Biome.js](https://biomejs.dev/ja/) / Jest |
| **CSS/UI**                    | Tailwind CSS + Material-UI（MUI）                                  |
| **メール受信練習**            | MailHog（開発環境のみ）                                            |
| **DB GUIツール**              | DBeaver（ローカルで使用）                                          |
| **環境変数管理**              | 開発: `.env` / 本番: Fly.io Secrets                                |
| **Prisma運用**                | 開発: `migrate dev` / 本番: `migrate deploy`Seedは一旦不要         |
| **外部API**                   | 日本郵便API（郵便番号→住所取得、Remix経由）                        |
| **APIトークン運用**           | 毎回発行（トークン切れ回避）                                       |
| **エラー通知**                | ユーザー: Toast / 開発者: フロント・サーバーで詳細ログ出力         |
| **ログ管理**                  | 最低限 console.log / console.error、将来外部サービス導入可能       |
| **デプロイ**                  | Fly.io 手動デプロイ、CI/CDは後から検討                             |
| **ドメイン**                  | `<app>.fly.dev`（Fly.io提供の無料ドメイン）                        |
| **SSL**                       | Let’s Encrypt 自動付与                                             |
