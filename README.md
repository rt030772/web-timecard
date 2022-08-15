# vc-timecard

## 機能一覧
  - ログイン画面

  - 一般ユーザー
    - タイムカード入力
    - 日次申請
    - 設定画面
      - デフォルト設定(部署名、（午前・午後）開始時間、終了時間、標準時間、標準休憩時間、勤務区分、勤務先、通勤手当)
      - 承認者登録
    - 過去の一覧画面

  - 承認者
    - 承認
    - 閲覧
<br />

  - 管理者
    - 部署管理
    - ユーザー管理（権限管理）
    - カスタムカレンダー管理
    - 一覧画面
    - CSVエクスポート


## 環境構築
  - git pull git@github.com:rt030772/web-timecard.git
  - cd web-timecard/frontend && yarn install && yarn dev



## 使用技術 
  - Frontend
    - Next.js
    - TypeScript
    - ChakraUI

  - Backend
    - Java
    - Spring Boot
    - MySQL
