## Readme

### 快速開始
```
$ npm install
$ nodemon
```

### 如果過去未曾安裝過nodemon

```
$ npm i -g nodemon
```

MacOS需要輸入

```
$ sudo npm i -g nodemon --unsafe-perm
```

### 加入 key.json，方便與 Firebase 資料庫互動

由於該專案缺少 key.json 檔案，所以載下後直接跑是跑不動的。請到 Firebase 建立一個專案，並進入 Project Setting (專案設定) > Service accounts (服務帳戶)，在 NOde.js 環境下 Generate new private key，並將金鑰重新命名為 key.json 存放在主目錄中。

金鑰格式大致如下：
```
{
  "type": "...",
  "project_id": "...",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "...",
  "client_id": "...",
  "auth_uri": "...",
  "token_uri": "...",
  "auth_provider_x509_cert_url": "...",
  "client_x509_cert_url": "..."
}
```