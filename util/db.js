var mongoose = require('mongoose');
var dburl= 'mongodb://165.22.220.183:27017/bingo';

mongoose.set('useCreateIndex', true)

mongoose.connect(dburl, { useNewUrlParser: true,useUnifiedTopology: true  });


mongoose.connection.on('connected',function(){
    console.log('Mongo connected to : '+dburl);
});

mongoose.connection.on('disconnected',function(){
    console.log('Mongo Disconnected ');
mongoose.connect(dburl, { useNewUrlParser: true });

});



mongoose.connection.on('error',function(err){
    console.log('Mongo connection Error : '+err);
});


//binding uin schemes and models
require('../models/UserModel');
