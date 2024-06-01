
// const str = "mongodb+srv://examCenter:Exam@123@exam-center.reefz9u.mongodb.net/examDb?retryWrites=true&w=majority"
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config({path:'./config/.env'});
 const {APP_PORT,MONGODB_URI} = process.env;
mongoose.set('strictQuery',true);
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://examCenter:" +
    encodeURIComponent("Exam@123") +
    "@exam-center.reefz9u.mongodb.net/onexamDb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
}
module.exports={connectDB}