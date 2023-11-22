import express from "express";

const app = express();
const port = 3300
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})
app.get("/", (req,res)=>{
    return res.send("Hello World!");
})
export default app;