const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let articletag= mongoose.model("articletag",new Schema({
  tags : [String],
  num : Number
}))



// articletag.create({
//   tags : ["HTML&Css","JavaScript","Node","Vue&React","Other"],
//   num : 100
// });


module.exports = articletag;