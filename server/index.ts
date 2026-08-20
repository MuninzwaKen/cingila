import { createApp } from "./app.js";
import { log, serveStatic, setupVite } from "./vite-dev.js";

(async () => {
  const app = await createApp();

  if (app.get("env") === "development") {
    const { createServer } = await import("http");
    const server = createServer(app);
    const { setupVite } = await import("./vite-dev.js");
    await setupVite(app, server);
    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
      log(`serving on port ${port}`);
    });
  } else {
    const { createServer } = await import("http");
    const server = createServer(app);
    serveStatic(app);
    const port = parseInt(process.env.PORT || "5000", 10);
    server.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
      log(`serving on port ${port}`);
    });
  }
})();
