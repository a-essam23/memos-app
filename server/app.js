const next = require("next");
const fs = require("fs");
const http = require("http");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const server = next({ dev });
const handle = server.getRequestHandler();

server
    .prepare()
    .then(() => {
        const app = express();
        const morgan = require("morgan");
        const dailyRouter = require("./routers/dailyRouter");
        const dailyController = require("./controllers/dailyController");
        const globalErrorHandler = require("./controllers/errorController");
        const cors = require("cors");
        app.use(express.json({ limit: "10kb" }));
        if (process.env.NODE_ENV === "development") {
            app.use(morgan("dev"));
        }

        // console.log(process.env);
        app.use(cors());
        app.use("/api/v1/daily", dailyRouter);

        app.get("*", (req, res) => {
            return handle(req, res);
        });

        app.use(globalErrorHandler);
        const mongoose = require("mongoose");

        process.on("uncaughtException", (err) => {
            console.log("Uncaught expection!");
            console.log(err);
            process.exit(1);
        });

        mongoose
            .connect("mongodb://localhost:27017/TESTING", {
                // .connect(DB, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("DB connection successful!");
            });

        app.listen(PORT, (err) => {
            if (err) throw err;
            console.log(
                `Listening to server:${process.env.NODE_ENV} on ${PORT}`
            );
        });
    })
    .catch((e) => {
        console.error(e.stack);
        process.exit(1);
    });
