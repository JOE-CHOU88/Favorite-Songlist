const express = require('express');
const router = express.Router();
const db = require("../db")
const categoryList = require("../model/category-list");

// 首頁路由
router.get('/', async function (req, res, next) {
  // Cloud Firestore 規格
  // doc.id => 取得文件的id(字串)
  // doc.data() => 取得文件的原始資料(物件)
  const productList = [];
  // 取得產品列表 ES7
  // 取得productList collection裡所有的document
  const productCollection = await db.collection("productList").get();
  // console.log("產品集合", productCollection);
  // 把collection內的document逐一取出
  productCollection.forEach(doc => {
    // console.log("文件ID", doc.id);
    // console.log("原始資料", doc.data());
    const product = doc.data();
    // 物件.屬性 = 值;
    product.id = doc.id;
    console.log("[產品分類]", product.category);
    // console.log("[商品分類對照表]", categoryList);
    const category = categoryList.find(a => a.id == product.category);
    console.log("[對應的分類]", category);
    product.category = category.title;
    // console.log("product", product);
    // 將product物件新增到productList內
    productList.push(product);
  });
  // .then()
  // .catch()
  // 將產品列表傳遞到模板
  res.locals.productList = productList;
  // 將views/index.ejs模板產生的HTML回應給瀏覽器
  res.render('index');
});

router.get("/about", (req, res, next) => {
  res.render("about-page");
})
module.exports = router;
