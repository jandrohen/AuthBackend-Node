const mongoose = require('mongoose');

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('DB Online')
    }catch (e) {
        console.log(e);
        throw new Error('Error a la hora de inicializar BD');
    }
}

module.exports = {
    dbConnection
}
