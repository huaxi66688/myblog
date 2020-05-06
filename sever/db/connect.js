const mongoose = require('mongoose');
mongoose.connect(
    ('mongodb+srv://expressblogs:xql123@cluster0-1m7dj.mongodb.net/test?retryWrites=true&w=majority'),
    { 
        useNewUrlParser: true,
        useUnifiedTopology:true
    }
)
    .then(()=>{
        console.log( '数据库连接成功' )
    })
    .catch((err)=>{
        console.log( err )
})
