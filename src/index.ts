import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";

const app = express();
// 設定靜態內容資料夾
app.use(express.static("public"));
// 解析 JSON body 的中間件
app.use(express.json());
// 解析 URL-encoded body 的中間件
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send("首頁");
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Express + TS 啟動 http://localhost:${port}`);
});
