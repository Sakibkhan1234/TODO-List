var mongoose=require('mongoose')

var Schemadata=new mongoose.Schema({
    name:String
})

module.exports= mongoose.model('kite',Schemadata)