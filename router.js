/*
  路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');


router.get('/books',service.getAllBooks); // 查询图书列表
router.post('/books',service.addBook); // 添加图书(提交表单)
router.get('/books/:id',service.toEditBook); // 跳转到编辑图书信息页面
// router.get('/toEditBook',service.toEditBook);
router.put('/books/:id',service.editBook); // 编辑图书提交表单
router.delete('/books/:id',service.deleteBook); // 删除图书信息
router.get('/books/book/:name',service.checkName); // 验证图书名称是否存在

module.exports = router;