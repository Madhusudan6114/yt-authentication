import app from "./src/app.js"
import connectDB from "./src/config/db.js"
 
//sever ko chalana
//db ko connect karna

connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
