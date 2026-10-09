import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import adminRoutes from "./routes/adminRoutes";
import contestRoutes from "./routes/contestRoutes";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.get('/v1/health', (_, res) => {
    return res.status(200).json({
        status: "ok"
    })
})

app.use('/v1/user', userRoutes);
app.use('/v1/admin', adminRoutes);
app.use('/v1/contest', contestRoutes);


app.listen(PORT, () => {
    console.log(`listening on: ${PORT}`)
})