# Sever (Node.js / Express.js)

JavaScriptのサーバー操作を学びます(下図の①②+(DB③)の操作)

[<img src="https://media.prod.mdn.mozit.cloud/attachments/2016/08/31/13829/3bdb0c966814fc9395d23828a919391a/Web%20Application%20with%20HTML%20and%20Steps.png">](http://google.com.au/)
(参照:[MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview))

---

<br>

### 目次

1. [一文で言い表す](#anchor1)
1. [クイックリビュー](#anchor2)
1. [キーワード](#anchor3)
1. [本サイト(Node.js/Express.js)](#anchor4)
1. [最後に](#anchor5)
1. [記事読了後の感想](#anchor6)
1. [Glossary](#anchor7)

---
<a id="anchor1"></a>

<br>

### 一文で言い表す

<br>

https://stackoverflow.com/questions/459238/when-and-how-do-you-use-server-side-javascript

上記の記事によると、JavaScriptのサーバ操作は主にHTTP通信の操作の事らしいです

---
<a id="anchor2"></a>

<br>

### クイックリビュー (日本語・英語、混濁)

<br>

1. [(techacademy) サーバサイドJavaScriptとは?方法を現役エンジニアが解説【初心者向け】](https://techacademy.jp/magazine/34399)　【読んだ】★ 基礎の基礎の基礎
1. [(persol-tech-s) 【Node.js】サーバーサイドでJavaScriptを使う利点](https://persol-tech-s.co.jp/hatalabo/it_engineer/225.html) 　【読んだ】★ 基礎の基礎の基礎
1. [(digitalidentity) JavaScriptをサーバサイドで動かせる！Node.jsの魅力とは？](https://digitalidentity.co.jp/blog/creative/javascript-nodejs.html)　【読んだ】★★★ 
1. [(pc-koubou) Node.jsでサーバーサイドJavascriptに挑戦](https://www.pc-koubou.jp/magazine/32604)　【読んだ】★★★
1. [(arakan-pgm-ai) Webフロントエンドとサーバーサイドの技術動向をざっくり整理する／JavaScript](https://arakan-pgm-ai.hatenablog.com/entry/2019/04/18/000000)　【読んだ】★★★
1. [(st.jmooc) Node.jsによるサーバ](https://st.jmooc.jp/javascript/s5_javascript_server.html)　【読んだ】★★★★ 特にNode.jsで自作サイトをネットへ接続する方法、ファイアーウォール設定
1. [(node.js) Node.js v14.13 Documentation](https://nodejs.org/api/)　
1. [(MDN) http](https://developer.mozilla.org/ja/docs/Web/HTTP)
1. [(node.js) Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
1. [(medium) HTTP Server: Everything you need to know to Build a simple HTTP server from scratch](https://medium.com/from-the-scratch/http-server-what-do-you-need-to-know-to-build-a-simple-http-server-from-scratch-d1ef8945e4fa)
1. [(alvarezskinner) REST APIs with Node.js and Express - #1: Setup the Project](https://translate.google.com/translate?sl=en&tl=ja&u=https%3A%2F%2Falvarezskinner.com%2Fapi-node-express-part1%2F) 【読んだ】★★★ シンプルなREST APIを作る時に必要な実装順
1. [(javierfernandes) Simple Node App](https://javierfernandes.gitbooks.io/rest-api-babel-express/content/nodeapp.html) 上記 + MongoOSE + Async/Await + Auth + Deploy

### シリーズもの (日本語・英語、混濁)

1. [(atmarkit) サーバサイドJavaScriptの本命「node.js」の基礎知識 (1/3)](https://www.atmarkit.co.jp/ait/articles/1102/28/news105.html)　【読んだ】★ 有益な情報はnode knockoutぐらい
1. [(qiita) Node.jsとExpressでローカルサーバーを構築する(1) ―Node.jsとnpmの導入―](https://qiita.com/koedamon/items/37ea8e9175cf0fd62371)　【読んでる】
1. [(qiita) サルでも分かるExpressでのjsonAPIサーバーの作り方](https://qiita.com/ngmr_mo/items/73cc7160d002a4989416)
1. [(qiita) Node.js + Expressで超簡単API](https://qiita.com/k-penguin-sato/items/5d0db0116843396946bd)
1. [(MDN) サーバサイド Web サイトプログラミング](https://developer.mozilla.org/ja/docs/Learn/Server-side)
1. [(MDN) サーバからのデータ取得](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
1. [(MDN) Express Web フレームワーク (Node.js/JavaScript)](https://developer.mozilla.org/ja/docs/Learn/Server-side/Express_Nodejs)
1. [(w3schools) Node.js Tutorial](https://www.w3schools.com/nodejs/default.asp)
1. [(tutorialspoint) ExpressJS Tutorial](https://www.tutorialspoint.com/expressjs/index.htm)
1. [(tutorialspoint) Node.js - Express Framework](https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)

### Youtube (日本語・英語、混濁)

1. [(PlayList #1-37) Node JS Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)
1. [(PlayList #1-12) Node.js & Express From Scratch](https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp)
1. [(Programming with Mosh) How to build a REST API with Node js & Express](https://www.youtube.com/watch?v=pKd0Rpw7O48)

---
<a id="anchor3"></a>

<br>

### JavaScript & サーバ関連で、気になっている事柄・キーワード

<br>

- Node.js
- Express.js
- React.js
- HTTP通信
- サーバーサイドの操作
- API
- ajax
- npm/npx
- app/アプリケーショーン
- バックエンド　vs サーバ
- フロントエンド vs クライアント
- controller & model & route ???

---
<a id="anchor4"></a>

<br>

### 本サイト(Node.js/Express.js)

Node.js
- [Guides](https://nodejs.org/en/docs/guides/)
- [Introduction to Node.js](https://nodejs.dev/learn)

Express.js
- [Express.js](https://expressjs.com/en/starter/installing.html)

Guides
- General
  - Getting Started Guide <- done!
  - Debugging - Getting Started
  - Easy profiling for Node.js Applications <- done! プロファイリングで、非同期化を最大にし、時間のかかる処理を減らす方法
  - Diagnostics - Flame Graphs
  - Dockerizing a Node.js web app
  - Migrating to safe Buffer constructors

---
<a id="anchor5"></a>

<br>

### 最後に

<br>

全体像を掴む為に、下記の記事（英語）を読んでみた

https://blog.bitsrc.io/a-beginners-guide-to-server-side-web-development-with-node-js-17385da09f93

---
<a id="anchor6"></a>

<br>

### 記事読了後の感想

<br>

nodejs' framework  
----- express  
----- koa  
----- etc  

Node.jsはシングルスレッドで処理(1つのリクエストに対して1つのスレッド)  
Node.jsはNoSQLを使用 -> NoSQL = JSONでデータを管理  
NoSQL - MongoDB  
Node.jsはGoogleV8JavaScriptEngineを使用していて高速  
大量の接続があっても処理速度が落ちない  
小さなデータのやり取りを頻繁に行うWebアプリケーションでの利用に向いている  
ポートは整数で、IP は文字列  
listen メソッドで、 初めて実際にサーバが HTTP request を受付始める  

contentTypeの処理  

色んなcontentType  
msg1.writeHead(200, {'Content-Type': 'text/html'});  
'html': 'text/html',  
'htm' : 'text/htm',  
'css' : 'text/css',  
'js'  : 'text/javaScript; charset=utf-8',  
'jpeg': 'image/jpeg',  
'jpg' : 'image/jpg',  
'gif' : 'image/gif',  
'png' : 'image/png'  
一般に、127.0.0.1 というIPアドレスは localhostという特別なアドレスとされている  

require('fs')  // file system  
require('http')  // http server  
require('url')  

var http_server = (require('http')).createServer();  
// http_server に 'request' イベントを設定  
http_server.on('request',  

ファイアウォールの設定でLAN（ルータ）上で同じWIFIを使っていればマシンに指定されたIPアドレスを指定すればアクセス出来るようになる  
インターネットへの公開  
完成したWebサイトをレンタルサーバ上でデプロイ(稼働)する  
レンタルサーバの維持費は月にコーヒー一杯程度で済む場合が多い。 こうして公開したサーバでも、全世界の利用者にサービスを提供することができる。  

Node knockout  
https://www.nodeknockout.com/  

express  
Router  
route  

middleware

JSON Server使いこなし  
第1回 モックサーバーの起動とリソース処理  
https://app.codegrid.net/entry/2017-json-server-1  

json-server  
https://github.com/typicode/json-server  

hosting???



---
<a id="anchor6"></a>

<br>

### まとめ

Vanilla JavaScript  
--- Node.js  
--------- Express.js  

<br>


---
<a id="anchor7"></a>

<br>

### Node.js modules/methods

- const http = require('http');
- 

---
<a id="anchor8"></a>

<br>

#### Glossary
- ノンブロッキングI/O (Input/Output)
- ブロッキング処理 = 一つの処理が完了するまで他の処理は行わない = sync, async
- WebSocket通信 = ウェブアプリ（インターネットを介して動作するapp）で双方向通信を実現するための技術規格
- サーバサイドの処理において、Googleが開発しているGolangという言語
- CMS = サーバサイドで使われる主な言語 (PHP、Ruby、Python)
- Node.jsで扱えるCMS - KeystoneJS, ButterCMS
- SPA(Single Page Application)
- require('fs')
- require('http')
- 
- 
- 

[comment]: <> (https://qiita.com/miriwo/items/11b717dfc501b5b4e286)
