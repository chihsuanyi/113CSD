### 1. 說明 blob, tree, commit, branch, head 分別是什麼
* **blob**：儲存檔案的內容。
* **tree**：儲存目錄結構，用來記錄目錄下有哪些檔案和子目錄。可以包含多個 blob 和 tree。
* **commit**：紀錄提交的變更，包含指向當前 Tree 的引用，提交的作者、提交訊息、提交時間，以及指向上一個提交的引用，用來記錄檔案在每次變更時的狀態。
* **branch**：分支，每個 branch 會分別指向一個 commit，允許在同一個版本中同時進行不同的開發工作，互不干擾。
* **head**：指向目前 checkout 的分支或 commit。


### 2. 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼
* **config 檔案**：記錄這個 repo 的編輯器、使用者識別資料和 branch。

![image](https://github.com/chihsuanyi/113CSD/blob/main/image/config.png)

* **logs 資料夾**：列出所有 commit 的歷史記錄。會列出每一筆 commit 的 SHA-1 校驗碼、作者名字及電子郵件、寫入日期以及提交訊息。

![image](https://github.com/chihsuanyi/113CSD/blob/main/image/logs.png)

* **refs 資料夾**：在 refs 資料夾中還有數個子資料夾，像是 **heads**, **tags**, **remote**。
  1. heads：裡面有所有 branches 的檔案，檔案裡面存著該 branch pointer 指向的一個 commit hash number。
  2. tags：有各個以 tag 為名稱的檔案，裡面存的也是該 tag 所附著的一個 commit hash number。
  3. remote：有以遠端名稱為名的資料夾，裡面有 remote branch 為命的檔案，裡面一樣存著該 remote branch 目前指向的 commit hash number。

### 3. commit message 應該怎麼寫比較好？應該有什麼 style 嗎？
精簡但能完整表達新增/變更過的工作內容並且保持一致性。
