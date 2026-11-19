const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const ENVIRONMENT = process.env.APP_ENV || "development";

app.get("/", (req, res) => {
    res.json({
        application: "Package Management Project",
        version: "1.0.0",
        environment: ENVIRONMENT
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(PORT, () => {
    console.log(
        `Application running in ${ENVIRONMENT} environment on port ${PORT}`
    );
});
