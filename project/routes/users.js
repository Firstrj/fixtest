const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// เส้นทางสำหรับสร้างผู้ใช้ใหม่
router.post('/', userController.createUser);

// เส้นทางสำหรับดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/', userController.getAllUsers);

module.exports = router;
