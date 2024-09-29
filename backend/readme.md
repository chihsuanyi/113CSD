## 觀察 package.json 的變化

   <img src="https://github.com/chihsuanyi/113CSD/blob/main/image/backend_package.png" width="500"/>

當每次 npm install 時，將安裝的套件寫入 package.json，

這樣以後別人要使用時，就可以很輕易的知道該使用哪些 dependency。

而因為 package.json 紀錄的版本號並不詳細，dependencies 只有大於 xxx 的紀錄。

因此如果是 npm 5 以上的版本，npm install 同時會產生一份 package-lock.json，

用以紀錄當前狀態下實際安裝的各個 npm package 的具體來源和版本號。

## 觀察 node_modules 裡面有什麼

node_modules 資料夾就是每個專案自己的函式庫，保持每個環境(資料夾)不會有相衝突的機會。

node_modules 內包括：

1. **Direct Dependencies**，就是你 npm install 的套件
2. **Nested Dependencies**，Direct Dependencies 的子依賴套件也會被安裝
3. **.bin** 資料夾，統一管理所有本地安裝的**命令行工具**，使它們能夠在專案內被方便地調用

（補充）命令行工具：

* **eslint**：用來檢查和修復 JavaScript 的 code style 和語法錯誤\*

* **webpack**：用來打包 JavaScript、CSS、圖片成一個或多個檔案\*

* **mocha**：用於運行 JavaScript 測試的測試框架\*

* **babel**：JavaScript 編譯器，用來將 ES6+ 代碼轉譯為瀏覽器兼容的 code\*

## package.json 中的 dependencies 與 devDependencies 分別是什麼

* **dependencies**：在已經發布的環境下會使用的套件。

_執行 **npm install <套件>**，套件就會被新增至 dependencies_

* **devDependencies**：只在開發中的環境下會使用的套件，一般是與開發、測試、編譯、打包等過程有關的工具。

1. 測試框架（如 Mocha、Jest）
2. 編譯工具（如 Babel、TypeScript）
3. 開發伺服器工具（如 Webpack、ESLint）

_執行 **npm install <套件> --save-dev**，套件就會被新增至 devDependencies_

_在生產環境中執行 **npm install --<套件>**，這些 devDependencies 不會被安裝，_

_這樣可以避免生產環境中安裝不必要的開發工具_

## package.json 中的 scripts 這個區塊怎麼用？

可以自己定義一些常用指令，例如：
在 scripts 區塊新增 **"start": node app.js**，

就可以使用 **npm run start** 完成 node app.js 。

另外，可以透過 **npm run** 來檢視自己目前的常用指令有哪些。

<img src="https://github.com/chihsuanyi/113CSD/blob/main/image/backend_scripts.png" width="500"/>

## Port number 要怎麼以環境變數來設定？

1. 使用 **_process.env.PORT_** 來讀取環境變數中的埠號，並提供一個預設值。

2. 在啟動應用時通過設置環境變數來更改埠號：

* Linux 或 macOS 中設置環境變數：**_PORT=5000 node app.js_**

* Windows 中設置環境變數：**_set PORT=5000 && node app.js_**

3. 簡化埠號設置：在 package.json 的 scripts 區塊新增 _**"start-dev": "cross-env PORT=5000 node app.js"**_

## 關於哪些檔案應該要被放上 github repo 這個問題，描述看看為什麼你選擇上傳某些檔案、選擇不上傳某些檔案，決策的要素是什麼？

### 不上傳

1. 可再生的檔案

* **node_modules/**：這個資料夾相當於專案的函式庫，而這些可以從 package.json 中自動重建，所以不應該上傳。
* **編譯後的檔案**：如 dist/ 或 build/ 資料夾，這些檔案可以在 CI/CD 或本地構建過程中生成。
* **.log**：檔案內容是應用運行過程中的輸出結果。

2. 環境配置和敏感資訊

* **環境變數檔案**：如 .env 檔案，這些檔案中可能包含敏感憑證和配置訊息。
* **憑證檔案**：如 SSL 憑證或 API 金鑰。

3. 本地開發環境的配置檔案

* **編輯器配置檔**：如 .vscode/、.idea/ 這類 IDE 或文本編輯器的設定檔。
* **操作系統臨時文件**：如 macOS 的 .DS_Store 或 Windows 的 Thumbs.db。

### _要將以上不上傳的檔案加入 .gitignore 檔案中_


### 上傳

1. 原始碼和配置檔案

* **package.json / package-lock.json**：檔案內包括專案用到的所有套件資料。
* **原始碼檔案**：如 src/ 內的所有 JavaScript 或其他程式碼文件。
* **配置範本**：如 .env.example 或 config.sample.json，這些檔案可以指導開發者如何配置環境。

2. 必須版本控制的檔案

* **文檔**：如 README、LICENSE 等，這些文件記錄了項目的說明、使用方法和許可條款，是項目的一部分。
* **測試文件**：包括單元測試、集成測試文件，這些文件有助於保障應用的品質。

_以上規則可以確保 repo 保持輕量、易於管理，並且確保安全性。_

## 範例程式中用 require，但上週的 Stack 是用 import/export，這兩種分別是 JavaScript 引用模組的兩種方式: CJS vs ESM，這兩者分別怎麼用？

* **CJS**：CommonJS 的模塊系統

CJS 使用 **require** 函數來導入模塊，並使用 **module.exports** 或 **exports** 對象來定義導出的內容

CJS 是動態加載，即在運行時根據需要動態加載模塊。

最初是為了在伺服器端使用的 Node.js 開發而設計的，但也被廣泛用於前端開發。

* **ESM**：ECMAScript 的模塊系統

ESM 使用 **import** 和 **export** 關鍵字來定義和導入模塊。

ESM 是靜態加載，即依賴關係在編譯階段已確定。

ESM 可以在現代瀏覽器中使用，但需要在 <script> 標籤上使用 type="module" 屬性；而 CJS 主要用於 Node.js 環境。

參考資料：

https://ithelp.ithome.com.tw/m/articles/10185297

https://ithelp.ithome.com.tw/articles/10191783

https://vocus.cc/article/649cc0e0fd89780001a7d34d

進階題:

- [localhost](http://localhost) 是什麼？
- `curl` 是什麼？查查看怎麼用 curl 來測試網路連線？常用參數有哪些？
