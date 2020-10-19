// const http = require('http');
// const server = http.createServer((req, res)=>{
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!!');
// });
// server.listen(8080);

/**
 * /app.js
 */
// express モジュールのインスタンス作成
const express = require("express");
const app = express();
// // パス指定用モジュール
// const path = require("path");
// // /api/index.js で定義されたミドルウェア
// const api = require("./api/");

// requestを読み込み
const request = require("request");

// 8080番ポートで待ちうける
app.listen(8080, () => {
  console.log("Running at Port 8080...");
});

// // APIルーティング用ミドルウェアを/apiに設定
// app.use("/api", api);

// // 静的ファイルのルーティング
// app.use(express.static(path.join(__dirname, "public")));

// // その他のリクエストに対する404エラー
// app.use((req, res) => {
//   res.sendStatus(404);
// });

// app.get("/nyaaaaaaaan/:width/:height", (req, res) => {
//   // 送受信の設定
//   const options = {
//     url: "http://placekitten.com/" + `${req.params.width}/${req.params.height}`,
//     method: "GET",
//     encoding: null,
//   };

//   request(options, (err, response, body) => {
//     res.set("Content-Type", response.headers["content-type"]);
//     res.send(body);
//   });
// });

//

/**
 * 取得したいサーバのドメイン：https://sample
 * 画像のパス：/thumbnail?id=00000
 */
const TEST_DOMAIN = "http://placekitten.com/";

app.get("/thumbnail", (req, res) => {
  request(TEST_DOMAIN + req.originalUrl).pipe(res);
});

app.get("/nyaaaaaaaan/:width/:height", (req, res) => {
  // 送受信の設定
  const options = {
    url: "http://placekitten.com/" + `${req.params.width}/${req.params.height}`,
    method: "GET",
    encoding: null,
  };

  request(options.url)
    // 成功時
    .on("response", (response) => {
      console.log(response.statusCode);
      console.log(response.headers["content-type"]);
    })
    // 失敗時
    .on("error", function (err) {
      console.log(err);
      res.sendStatus(404);
    })
    .pipe(res);
});
