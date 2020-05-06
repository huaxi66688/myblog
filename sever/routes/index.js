var express = require('express');
var router = express.Router();





/*注册相关的接口*/
// router.use("/register",require('./register/index'));

/*登录接口*/
router.use("/login",require('./login/index'));
















module.exports = router;
