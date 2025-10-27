import http from "http"

import App from "./app"

const PORT = (process.env.PORT || "3000")
const server = http.createServer(App)
server.listen(PORT)
server.on("error", onError)
server.on("listening", () => {
  const addr = server.address()
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`
  console.debug("⚡️[server]: Listening on", bind)
})

function onError(error: unknown) {
  if (error instanceof Error) {
    const err = error as {
      syscall?: string
      code?: string
    }
    if (err.syscall !== "listen") throw err

    const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT

    switch (err.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges")
        process.exit(1)
      case "EADDRINUSE":
        console.error(bind + " is already in use")
        process.exit(1)
      default:
        throw err
    }
  } else {
    console.error("Unknown error:", error)
    process.exit(1)
  }
}
