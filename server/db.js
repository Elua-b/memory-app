const mongoose=require('mongoose')

module.exports=()=>{
    const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
    };
    try{
        mongoose.connect(process.env.MONGO_DB,connectionParams);
        console.log("connected  to database sucessfully");
    }catch(error){
        console.log(error);
        console.log("DB not connected");
    }
}