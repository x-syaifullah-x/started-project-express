import express from "express"
const { json } = express
import cors from "cors"
const app = express()
app.use(cors({ origin: true }))
app.set("json spaces", 4)

app.get("/", json(), async (req, res) => {
    return res.status(200).send({ message: "Welcome ..." })
})

app.get("/test", json(), async (req, res) => {
    return res.status(200).send({ message: "GET OK." })
})

app.post("/test", json(), async (req, res) => {
    return res.status(200).send({ message: "POST Ok." })
})

const PORT = 3000
app.listen(PORT, () =>
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
)