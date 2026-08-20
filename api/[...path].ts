import type { Express, Request, Response } from "express";
import { createApp } from "../server/app.js";

let appPromise: Promise<Express> | undefined;

export default async function handler(req: Request, res: Response) {
  appPromise ??= createApp();
  const app = await appPromise;
  app(req, res);
}