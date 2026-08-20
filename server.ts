import type { Express, Request, Response } from "express";
import { createServer } from "http";
import { createApp } from "./server/app.js";

const appPromise: Promise<Express> = createApp();

export default async function handler(req: Request, res: Response) {
  const app = await appPromise;
  app(req, res);
}

if (!process.env.VERCEL) {
  const port = parseInt(process.env.PORT || "3000", 10);
  appPromise.then((app) => {
    createServer(app).listen(port, "0.0.0.0", () => {
      console.log(`API server running on port ${port}`);
    });
  });
}