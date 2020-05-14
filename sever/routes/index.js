var express = require('express');
var router = express.Router();





/*注册相关的接口*/
// router.use("/register",require('./register/index'));

/*登录接口*/
router.use("/login",require('./login/index'));
//文章相关的接口
router.use("/article",require('./article/index'));
// router.use("/articleilist",require('./article/index'));
// router.use("/articlelist",require('./articleinfo/index'));

module.exports = router;
