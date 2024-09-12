## 1. 說明 blob, tree, commit, branch, head 分別是什麼
* **blob**：儲存檔案的內容（blob 單純只存檔案的內容）。
* **tree**：儲存目錄結構，用來記錄目錄下有哪些檔案和子目錄。可以包含多個 blob 和 tree。
* **commit**：紀錄提交的變更，包含指向當前 Tree 的引用，提交的作者、提交訊息、提交時間，以及指向上一個提交的引用，用來記錄檔案在每次變更時的狀態。
* **branch**：分支，每個 branch 指向一個 commit，允許在同一個版本中同時進行不同的開發工作，互不干擾。
* **head**：指向當前 checkout 的分支或 commit。


## 2. 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼
* **config 檔案**：這個檔案會在設置遠端倉庫和設置 upstream 時更新。
！[image](image1.png)

* **logs 資料夾**：push 操作會記錄到 logs/refs/remotes/ 裡，詳細記錄每次 push 和 pull。
* **refs 資料夾**：存放遠端追蹤分支的狀態。

## 3. commit message 應該怎麼寫比較好？應該有什麼 style 嗎？
精簡但能完整表達變更過的功能。