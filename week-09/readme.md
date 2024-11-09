先啟動 nginx，顯示啟動失敗：

<img src="https://github.com/chihsuanyi/113CSD/blob/main/image/debug_1.png" width="800"/>

啟動失敗，去檢查 nginx 設定檔，指出‘unexpected ";" in /etc/nginx/nginx.conf:8‘：

<img src="https://github.com/chihsuanyi/113CSD/blob/main/image/debug_2.png" width="800"/>

修改好 nginx.conf 再次檢查設定檔沒問題，重新啟動卻依然失敗：

<img src="https://github.com/chihsuanyi/113CSD/blob/main/image/debug_3.png" width="800"/>

確認端口是否被佔用，發現端口 80 被佔用了。強制終止所有佔用 TCP 80 端口的 process，nginx 啟動成功：

<img src="https://github.com/chihsuanyi/113CSD/blob/main/image/debug_4.png" width="800"/>

而網頁仍無法正常顯示，檢查防火牆，發現其阻擋 80 端口，將其規則刪除：

<img src="https://github.com/chihsuanyi/113CSD/blob/main/image/debug_5.png" width="800"/>

網頁便能正常運作了！
