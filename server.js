const dotenv = require("dotenv");
dotenv.config();


const app = require("./src/app");
const connectDB = require("./src/Database/Database");
const authRoutes = require("./src/Database/Database")
const ticketRoutes = require("./src/routes/ticket.routes");
app.use("/auth", authRoutes);
app.use("/api/tickets", ticketRoutes);
connectDB();
app.listen(3000,()=>{
    console.log("server is running om port3000");
})