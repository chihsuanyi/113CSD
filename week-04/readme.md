## 1. 在 Readme 中提供 instance 的 public IP

   [13.229.119.202 ](http://13.229.119.202)

## 2. 什麼是 instance type?

  instance 是指在雲端平台上運行的虛擬機或虛擬服務。
  
  instance type 就是虛擬機的硬體配置，其中包含:
  
  - vCPU
  - Memory
  - Instance Storage：存取速度快，但是資料儲存非永久性。EC2 損毀或關閉時，裡面的資料會遺失
  - Network Bandwidth：網路頻寬，代表每秒可傳輸的資料量
  - EBS Bandwidth：EBS 頻寬。
    EBS（Elastic Block Storage）資料儲存具永久性，但存取資料速度則相對較慢

## 3. 什麼是 Nginx？有哪些用途與特性？

  非同步框架的 web server，以及其他用途：正向代理、反向代理、Http Cache、負載平衡器。
  
  - **web server**：提供 web 處理**靜態**資源相關服務的伺服器。
  
    在電腦主機上執行 web server，它可以幫主機開一個 80 port，
    
    此時別人就能透過該電腦主機的 IP 與它建立連線。

    而我們常用的 Chrome 瀏覽器就是 web client。
  
    當我們要使用這個網頁時 client 會發起 request 給 server，

    告訴 server 我們想要造訪這個網頁，希望它可以傳送對應的資源給我們，

    而 server 接到 request 後，則會將帶有該網站資源的回應（response）回傳給 client。
    

- **正向代理與反向代理**

  Nginx 可以作為 proxy server（代理伺服器）
  

* **Http Cache**

  Nginx 可以作為 Http Cache

  優點：

  1. 減少 request 次數：直接從 cache 拿出之前暫存的資料，能減少 server 與資料庫端的負擔。
  2. 加快資源載入：向 server 提出 request，需要等網路傳輸資料。

     直接從瀏覽器裡面的 cache 拿，就不用等這一段資料傳輸的時間，會快很多。


* **負載平衡器**
  
  網頁中的靜態資料由 web server 處理，而動態資料交給 Application Server 處理完後，
  
  再丟 response 回去，由 web server 進行回應，最後才回到 client 端。

  Nginx 可以負責 request 的分發，決定 request 要被分到哪一個 Application Server 處理。

**Nginx 的特性：**

   1. 設置簡易：相比於 Apache(另一種 web server)，
      Nginx 因為**模組化**的設計，配置上是較為簡單 
      
   2. 記憶體消耗低

## 4.  pm2 套件是什麼？有什麼用處？

   pm2 是一個 Node.js 應用的運行管理器，pm 是 Process Manager 的意思。

   pm2 可以做的事：

   * 啟動、管理 processes：pm2 以**守護進程方式**運行應用，確保即使關閉終端，應用程式仍然保持運行
   * 自動重啟：當 Node.js 崩潰或出現異常或 server 重啟之後，pm2 會自動幫我們重啟
   * 負載均衡：pm2 可利用 CPU 多核，開啟多程序，已達到類似負載平衡的效果
   * log 管理：pm2 可以幫我們整理 log，讓 log 以我們想要的週期分割檔案，並保存我們想要的數量，若有超過，自動刪除
   * 性能監控：pm2 提供多項資訊，包含已重啟次數、CPU 用量、memory 用量、process id 等等
   * 零停機重載：在不中斷服務的情況下，更新和重啟應用程式

   [pm2 套件指令](https://pm2.keymetrics.io/docs/usage/quick-start/)

## 5.  步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?

   - **proxy server（代理伺服器）**

   a. 提示 `Reverse proxy` vs `Forward Proxy`

   - **Reverse proxy（反向代理）**

     反向代理是 user 和**內部伺服器**之間的中介伺服器。

     當有 request 時，proxy server 會先攔截並檢查流量，確保沒有未授權的活動或威脅，再轉發給 server。

     可以阻擋不安全的流量，讓 server 更安全，也能分配流量，避免過載，讓系統更穩定。

   - **Forward proxy（正向代理）**

     正向代理是 user 和**外部伺服器**（如網站）之間的中介伺服器。

     當 user 想要訪問一個網站時，request 會先連到 proxy server，再由 proxy server 幫你去訪問該網站，
     然後將結果返回給你。

      這時那個網站收到的 request，他只知道請求過來的身分是 proxy server，而不知道真實的 user 的身分。

## 6.  在 readme 中提供步驟 9 的 Nginx 設定檔

```
server {
listen 80;
server_name 18.142.227.163;

    location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    }

    }

```

## 7.  Security Group 是什麼？用途為何？有什麼設定原則嗎？

   Security Group (SG) 就是 EC2 的一層虛擬防火牆，僅有 SG 規則允許的流量才能到達執行 instance。

   - SG 規則是透過允許來設定，無法建立拒絕存取的規則
   - 可自行選擇協定 (TCP、HTTP、HTTPS、SSH) 以及 port 號
   - SG 是 stateful（狀態防火牆），也就是說今天當 instance 發出 request，當 response 流量進來的時候不會管 SG 規則
   - 可以隨時新增或移除 SG 規則
   - 可以套用超過一組的 SG 規則

## 8.  什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

   **sudo =「Super User DO」**
    
   若在指令的前面加上 sudo，就代表這個指令是透過 Super User（最高權限使用者 root）所執行的，
    
   一般在更改電腦的網路設定、查看某些密鑰、更改系統設定、安裝全與套件時才會使用 sudo 指令

## 9.  Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？

   `sudo nano /etc/nginx/nginx.conf` 查看 Nginx 的主配置文件

   `/var/log/nginx` 可以看到 log 文件

   `cat access.log`、`cat error.log` 指令可查看 log 資料

## 10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」

   一開始對虛擬主機的操作非常的不熟悉，但在老師題目的引導下慢慢找出答案了。

## 11. 列出完成本作業時參考的資料

[架設 instance 教學影片](https://youtu.be/kOHiDHb38MU?si=nEphFCaqwdPGJMfj)

[instance type](https://ithelp.ithome.com.tw/m/articles/10295411)

[Instance Storage & EBS 比較](https://ithelp.ithome.com.tw/articles/10264261)

[Nginx-1](https://medium.com/starbugs/web-server-nginx-1-cf5188459108)、[Nginx-2](https://kucw.io/blog/nginx/)

[pm2](https://medium.com/learn-or-die/好-pm2-不用嗎-fc7434cc8821)

[proxy](https://aws.amazon.com/compare/the-difference-between-proxy-and-vpn/?nc1=h_ls)

[設定 Nginx 做 proxy](https://medium.com/前端壹兩三事/聊聊關於基本的-nginx-reverse-proxies-and-nodejs-express-web-server-2a1c8e7e7de1)

[Security Group](https://ithelp.ithome.com.tw/articles/10264200)

[sudo 指令](https://yhtechnote.com/linux-sudo/)

