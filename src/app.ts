import cors from "cors"
import express from "express"

import Users from "./routes/UsersRoute"

const App = express()
App.use(cors({ origin: true }))
App.use(express.json())
App.set("json spaces", 4)
App.use("/users", Users)
App.use("/", (req, res) => {
    return res.status(200).send({ message: "Welcome ..." })
})
export default App