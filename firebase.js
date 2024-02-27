// 初始化firebase
// FIREBASE NODE.JS初始化文件
// https://firebase.google.com/docs/admin/setup

// 初始化FIREBASE

// 引用firebase-admin模組
const admin = require("firebase-admin");
// 引用金鑰
const serviceAccount = {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
  };
// 驗證金鑰
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// 輸出 admin 供其他檔案使用
module.exports = admin;