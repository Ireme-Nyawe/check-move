import app from "./app.js";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DBC)
.then(()=>{
    console.log("Good Job, DB Connected.");
}).catch((error)=> {console.log(error)});

