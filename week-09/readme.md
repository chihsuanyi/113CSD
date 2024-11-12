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

修改 html 文件權限後，網頁便能正常運作了！


心得：

其實我對於直接對終端機下指令非常不熟悉並且非常害怕下錯指令影響整個系統，不過在這幾次作業實際去操作過後，更了解了其指令代表的意義。

像是`curl`指令用來檢查 server 是否有回應，或是測試 url 是否能回傳正確內容。

當網頁打不開時，可以先檢查端口狀態是否被佔用以及是否被 NGINX 正常監聽。

`iptables` 是 Linux 系統中的防火牆管理工具，明明其他設定都好了，網頁卻打不開，往後如果碰到類似情況記得先檢查防火牆。

debug 的過程雖然很慌亂不知所措，但成功 debug 完成真的成就感滿滿，而且會對指令操作更加印象深刻！
