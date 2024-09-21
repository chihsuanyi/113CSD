**安裝的 nodejs 版本**
Node.js v20.17.0
他是屬於**LTS (Long Term Support) 版本**，系統長期支援並且受維護，可以減少版本不穩定或兼容性問題。

**nvm 與 npm 分別是什麼**
**nvm**：Node Version Manager，管理 Node.js 的版本。
常用指令：

1. nvm install <版本>：安裝 Node.js <版本>
2. nvm use <版本>：切換到 Node.js <版本>
3. nvm list：查詢已經安裝的 Node.js 版本。

**npm**：Node Package Manager，管理 Node.js 的套件。
Node.js 安裝完成後，輸入 npm init 將專案初始化。
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

參考資料：
https://a0910288060.medium.com/了解node-js-nvm-npm差別-47cda7c1d569
https://linyencheng.github.io/2022/09/27/relationships-between-frontend-and-backend/tool-npm/
https://ithelp.ithome.com.tw/articles/10191682
