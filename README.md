# vc-timecard

## 機能一覧
  - ログイン画面

  - 一般ユーザー
    - タイムカード入力
    - 日次申請
    - 設定画面
      - デフォルト設定(部署名、（午前・午後）開始時間、終了時間、標準時間、標準休憩時間、勤務区分、勤務先、通勤手当)
      - 承認者登録

  - 承認者
    - 承認
    - 閲覧
<br />

  - 管理者
    - 部署管理
    - ユーザー管理（権限管理）
    - カスタムカレンダー管理


## 環境構築
yarn create next-app --typescript
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6 @chakra-ui/icons
yarn dev

dummy