**我安裝的 nodejs 版本**

Node.js v20.17.0

他是屬於**LTS (Long Term Support) 版本**，系統長期支援並且受維護，可以減少版本不穩定或兼容性問題。


**其他種 JS 執行環境：**
* **Deno**：
與 Node.js 最大的不同為 TypeScript 的支援性，不再像過去 Node.js 一樣，需要安裝各種套件。但運行 TypeScript 代碼的性能仍不及純 JavaScript，特別是在大型項目中，TypeScript 的編譯可能會增加啟動時間。

* **Bun**：
和 Node.js, Deno 不同之處為 Bun 並沒有延續使用 V8 引擎，而是使用 JavaScriptCore 引擎，讓啟動時間更快及內存佔用較低。
不過也因為技術較新，Bun 的生態系統相對較不完整以及兼容性問題，許多工具庫的支持還不如 Node.js 廣泛。

**_基於兼容性問題，我還是選擇安裝 Node.js_**

-----

**nvm 與 npm 分別是什麼**
* **nvm**：Node Version Manager，管理 Node.js 的版本。

常用指令：

1. nvm install <版本>：安裝 Node.js <版本>
2. nvm use <版本>：切換到 Node.js <版本>
3. nvm list：查詢已經安裝的 Node.js 版本。

* **npm**：Node Package Manager，管理 Node.js 的套件。

輸入 npm init 將專案初始化。
填入相關資訊後，產生一個 package.json 檔案，
之後安裝套件的相關配置檔都會存在 package.json 中。

![image](https://github.com/chihsuanyi/113CSD/blob/main/image/package_js.png)

常用指令：

1. npm install <**套件名稱**> <**專案路徑**>：安裝 Node.js <套件名稱>

   _專案路徑可以不打，視同目前所在目錄 or 專案_

   _如果你希望安裝的位置是全域安裝，就將專案路徑打上 -g_

2. npm <**套件名稱**> -v：查看已安裝的套件版本 _npm -v：查看 npm 本身的版本_
3. npm update <**套件名稱**>：更新 <套件名稱> 的版本
4. npm search <**套件名稱**>：搜尋 Node.js 有哪些相關套件可以安裝
5. npm list：查詢已經安裝的套件清單

-----

參考資料：

https://123davidbill.medium.com/筆記-bun-vs-node-js-632b3a87e6a7

https://a0910288060.medium.com/了解node-js-nvm-npm差別-47cda7c1d569

https://linyencheng.github.io/2022/09/27/relationships-between-frontend-and-backend/tool-npm/

https://ithelp.ithome.com.tw/articles/10191682
