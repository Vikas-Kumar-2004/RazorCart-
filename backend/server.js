import app from "./app.js";
import dotenv from "dotenv"
import Razorpay from "razorpay";

dotenv.config({path:"backend/config/config.env"});

export const instance=new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET,
})


app.listen(8080, "0.0.0.0", () => {
  console.log("Server running on port 8080");
});
