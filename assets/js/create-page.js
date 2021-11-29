const $select = $("#productCategory");
// 取得商品分類清單
// PATH: "/api/category-list"
axios.get("/api/category-list")
    .then(res => {
        // console.log("成功取得分類清單", res);
        const categoryList = res.data.categoryList;
        // console.log("分類清單", categoryList);
        categoryList.forEach(category => {
            console.log(category);
            const opt = `<option value="${category.id}">${category.title}</option>`
            $select.append(opt);
        });
    })
    .catch(err => {
        console.log("錯誤", err);
    });
$('#createProductForm').submit(function (event) {
    event.preventDefault();
    const product = {
        name: $('#productName').val(),
        performer: $('#productPerformer').val(),
        link: $('#productLink').val(),
        image: $('#productImage').val(),
        category: $('#productCategory').val(),
        createdAt: new Date().getTime()
    };
    console.log('[新增歌曲]', product);
    // 創建商品API
    // PATH: "/api/product/create",
    // MATHOD: "POST",
    // DATA: product 新產品資料(物件)
    axios.post("/api/product/create", product)
        .then(res => {
            console.log('成功建立歌曲', res);
            alert(res.data.msg);
            // 強制引導使用者到首頁
            window.location = "/";
        })
        .catch(err => {
            console.log('發生錯誤', err);
        });

});