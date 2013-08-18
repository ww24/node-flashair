FlashAir API Wrapper
====================

`FlashAir` の API を `Node.js` から扱うための API Wrapper です。

Get Started
-----------
### Step 1
```
npm install flashair
```

### Step 2
```js
var flashair = require("flashair")(appname, appmode);
```

>
#### - appname
`CONFIG` で設定された `APPNAME` を指定してください。  
省略可能で、デフォルトは `flashair` に設定されています。

>
#### - appmode
`CONFIG` で設定されて `APPMODE` に合わせて設定します。  
無線 LAN の動作モードに合わせて、 `STA` か `AP` を指定してください。  
省略可能で、デフォルトは `STA` に設定されています。

### Step 3
Write your code!

Support
-------
ファームウェアバージョン `1.00.03+` から実装中です。  
(`2.00.00+` 対応製品の手持ちが無いため)

### command.cgi
- [x] ファイルリストの取得
- [ ] ファイル数の取得
- [ ] アップデート情報の取得
- [ ] SSID の取得
- [ ] ネットワークパスワードの取得
- [ ] MAC アドレスの取得
- [ ] ブラウザ言語の取得
- [ ] ファームウェアバージョン情報の取得
- [ ] 制御イメージの取得
- [ ] 無線 LAN モードの取得
- [ ] 無線 LAN タイムアウト時間の設定
- [ ] アプリケーション独自情報の取得
- [ ] CID の取得
- [ ] 共有メモリからのデータの取得
- [ ] 共有メモリへのデータの書き込み
- [ ] 空セクター数の取得
- [ ] フォトシェアモードの有効化
- [ ] フォトシェアモードの解除
- [ ] フォトシェアモードの取得
- [ ] フォトシェアモードの SSID の取得

### config.cgi
未着手

### thumbnail.cgi
未着手

### upload.cgi
未着手

Document
--------
### command.cgi
#### ファイルリストの取得
##### Example
```js
flashair.command.filelist("/", function (err, files) {
  if (err)
    throw err;

  console.log(files);
});
```

License
-------

The MIT License (MIT)

Copyright (c) 2013 Takenori Nakagawa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
