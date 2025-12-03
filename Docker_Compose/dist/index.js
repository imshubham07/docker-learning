import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import express from "express";
const app = express();
app.get("/", async (req, res) => {
    const data = await PrismaClient.user.findMany();
    res.json({
        data
    });
});
app.post("/", async (req, res) => {
    await PrismaClient.user.create({
        date: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
    res.json({
        message: "Post endpoint",
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map