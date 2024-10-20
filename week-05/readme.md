## 1. 你的網址，應該是 https://www.xxx.xxx，點擊過去應該要可以看到個人作業 4 架設的 Express server （由 Nginx proxy 到 Express）

https://www.chihsuan1.site

## 2. 你在哪裡購買網域的

godaddy

## 3. DNS 的 A record 是什麼？

Address record，用於將 Domain Name 解析為 IPv4 地址，讓用戶能夠通過 Domain Name 訪問伺服器。

A record 組成：

1. Host：指定主機名 `＠ (= chihsuan1.site)`、`www (= www.chihsuan1.site)`

2. Type：`A record`

3. Value：IPv4 地址 `18.142.227.163`

4. TTL（ Time to Live）：以秒為單位，用來指定 DNS 伺服器應該緩存該記錄的時間長度。

## 4. DNS 的 NS record 是什麼？

Name Server record，用於指定 哪個 Name Server 負責管理某個 Domain Name 的 DNS 記錄。

NS record 組成：

1. Name：域名或子域名 `example.com`

2. Type：`NS record`

3. Value：Name Server 的域名 `ns1.exampleserver.com`

4. TTL

## 5. Domain Name vs FQDN vs URL 這三者分別為何？

* **Domain Name**：網站的名字，用於替代 IP 地址

    `example.com`, `chihsuan1.site`

* **FQDN**：完整的主機名，包括子域、域名和頂級域名

    `www.example.com.`, `mail.google.com.`

* **URL**：網址，指向網路資源的完整地址

    `https://www.example.com/about?id=123`

## 6. 為什麼應該要為網站加上憑證？而不是直接用 http 就好？

HTTPS，S 代表 Secure，使用 SSL/TLS 憑證，用來在 client 端（如瀏覽器）和 server 之間建立安全加密連接 。

`HTTP` 無加密：資料為明文傳輸，任何人都可以看到用戶提交的所有資料，包括個資、信用卡等敏感資訊。

`HTTPS` 加密傳輸：資料在傳輸過程中會被加密，即使資料在傳輸過程中被攔截，也無法輕易解密。


使用 HTTPS 可確保：

1. 資料傳輸的安全性

2. 保護用戶隱私

3. 防止資料篡改

4. 提高網站的可信度和信任度

5. 提高 SEO（搜尋引擎優化）排名

    Google 和其他搜索引擎將 HTTPS 視為一個排名因素。