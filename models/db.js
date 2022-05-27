//mongo db kullanmak için. npm install mongoose --save
var mongoose = require('mongoose')

async function connect() {
  try {
     const uri = 'mongodb://127.0.0.1:27017/Project';
     const options = {
        autoIndex: false, // const mongoose = require('mongoose');

        maxPoolSize: 10, // Soket bağlantı sınırı
        serverSelectionTimeoutMS: 50000, // İşlem süre sınırı
        socketTimeoutMS: 45000, // Soketi kapat
       
      };
     //mongoose.set("useCreateIndex", true);
     await mongoose.connect(uri, options);
     console.log("MongoDB Connected...");
     return;
  } catch (err) {
     console.log("MongoDB Error" + " " + err);
     
  } 
}

module.exports = connect;