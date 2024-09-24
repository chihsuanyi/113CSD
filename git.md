Git 是一個 content-addressable (按內容定址，按檔案內容定位) 的檔案系統，這代表 Git 的核心是一個 key-value data store。我們只要提供檔案內容，Git 就會透過一些演算法計算成 key，未來就可透過該 key 來檢索出對應的內容。

## 1. Git objects

1.1 **blob**：儲存檔案的內容，每個 blob 都由其內容的 SHA-1 Hash 值唯一標識。

- 如何建立 blob：

執行 git init 初始化 repo 後，Git 會在 .git 目錄中初始化 objects 目錄，並在裡面建立 pack 和 info 子層的空目錄
![image](https://github.com/chihsuanyi/113CSD/blob/main/image/blob1.png)

使用底層指令 **hash-object** 將資料儲存至 .git 目錄中，並獲得對應的 key (也就是物件名稱，或稱 SHA-1 值)
_hash-object 的指令：_
**_-w_**：將物件寫入至物件資料庫，並輸出該物件的 key

- 若不用此 option，就只會輸出 key，不會儲存物件
  **_--stdin_**：從 stdin (standard input，標準輸入) 讀取內容
- 若不用此 option，hash-object 指令預設會從檔案中讀取，所以必須在 hash-object 指令之後加上指定的檔案路徑 (例如：_git hash-object README.md_)

![image](https://github.com/chihsuanyi/113CSD/blob/main/image/blob2.png)
_在 Git 的儲存方式是一份內容就存成一個檔案，都放在 .git/objects 目錄內，子目錄為 SHA-1 的前 2 個字元_

- 當你建立檔案內容相同，但檔名不同的檔案時，在 repo 內也只會存一份，因為物件的名稱是由檔案內容來決定的，而不是依檔名決定。
  ![image](https://github.com/chihsuanyi/113CSD/blob/main/image/blob3.png)

  1.2 **tree**：儲存目錄結構，用來記錄目錄下有哪些檔案和子目錄。可以包含多個 blob 和 tree。
  1.3 **commit**：紀錄提交的變更，包含指向當前 Tree 的引用，提交的作者、提交訊息、提交時間，以及指向上一個提交的引用，用來記錄檔案在每次變更時的狀態。
  1.4 **branch**：分支，每個 branch 會分別指向一個 commit，允許在同一個版本中同時進行不同的開發工作，互不干擾。
  1.5 **head**：指向目前 checkout 的分支或 commit。

## 2. 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼

- **config 檔案**：記錄這個 repo 的編輯器、使用者識別資料和 branch。

![image](https://github.com/chihsuanyi/113CSD/blob/main/image/config.png)

- **logs 資料夾**：列出所有 commit 的歷史記錄。會列出每一筆 commit 的 SHA-1 校驗碼、作者名字及電子郵件、寫入日期以及提交訊息。

![image](https://github.com/chihsuanyi/113CSD/blob/main/image/logs.png)

- **refs 資料夾**：在 refs 資料夾中還有數個子資料夾，像是 **heads**, **tags**, **remote**。
  1. heads：裡面有所有 branches 的檔案，檔案裡面存著該 branch pointer 指向的一個 commit hash number。
  2. tags：有各個以 tag 為名稱的檔案，裡面存的也是該 tag 所附著的一個 commit hash number。
  3. remote：有以遠端名稱為名的資料夾，裡面有 remote branch 為命的檔案，裡面一樣存著該 remote branch 目前指向的 commit hash number。

## 3. commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

應保持精簡但能完整表達新增/變更過的工作內容並且保持一致性。
一個 Commit Message 主要由 Header + Body + Footer 組成：

1. Message Header: <type>(<scope>): <subject>

### type（必要）：commit 的類別

如：feat 新增或修改功能, fix 修補, docs 文件, style 格式, refactor 重構, perf 改善效能, test 增加測試, chore 不影響程式碼運行，建構程序或輔助工具的變動，例如修改 config、Grunt Task 任務管理工具, revert 撤銷回覆先前的 commit

### scope（可選）：commit 影響的範圍

如：資料庫、控制層、模板層等，視專案不同改變

### subject（必要）：commit 的簡短描述

- 不超過 50 個字元
- 結尾不加句號
- 盡量讓 Commit 單一化，一次只更動一個主題

2. Message Body

- 對本次 Commit 的詳細描述，解釋 What & Why & How
- 可以分成多行，每一行不超過 72 個字元
- 說明程式碼變動的項目與原因，還有與先前行為的對比

3. Message Footer

- 填寫任務編號 issue #1246
- BREAKING CHANGE（可略），記錄不兼容的變動，後面是對變動的描述、以及變動原因和遷移方法

參考資料：https://hackmd.io/@Heidi-Liu/git-commit-message
