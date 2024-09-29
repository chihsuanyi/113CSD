Amazon 託管 EC2（Elastic Compute Cloud 彈性運算雲）在世界各地的多個地點。這些位置包括：

**AWS Regions**, **Availability Zones**, **Local Zones**, **AWS Outposts**, **Wavelength Zones**。

-----
- **AWS Regions**：

指 AWS 在全球不同地理區域中建立的資料中心，用來將資源就近部署。

每個 Region 都是彼此獨立的地理區域，可以確保跨區域的故障不會互相影響。

-----
- **Availability Zone (AZ)**：
  

是 AWS Region 內的一個或多個獨立的資料中心，目的是提高可用性和容錯能力。

你可以跨 AZ 部署，以確保在某一個 AZ 發生故障時，仍能在其他 AZ 上運行，從而減少停機時間。

-----
- **Local Zones**：

是 AWS Region 的延伸，可將資源放置在更接近最終使用者之處，提供非常低的延遲存取。

適合以下兩種產業：

1. 低延遲需求的產業，如線上遊戲、AR/VR 應用遊戲、社群媒體、電信等產業。
2. 受限台灣法規，資料不能出境的業者，如政府單位、醫療、金融等法遵需求。

_台灣可使用的 Local Zones：Taipei Local Zone_

-----
- **AWS Outposts**：

供客戶在內部部署，進行 AWS 運算、儲存、資料庫和其他服務，同時也能無縫連接至服務廣泛的 AWS 服務。

-----
- **Wavelength Zones**：

專為邊緣計算設計的服務，允許開發者在靠近終端用戶的 5G 網絡中部署應用程式，以實現極低延遲的運算能力。

-----
在選擇 AWS 服務的 Region 時，通常最優先會考慮延遲問題（距用戶越近延遲越低），

所以目前考慮東京、新加坡、香港等亞洲地區。

接著考慮可用性和容災，東京的 AZ 有 4 個 ; 新加坡、香港的 AZ 都是 3 個。

再來可以考慮成本及法規相關的問題，

香港的特殊地理和政治位置，有比較多資料隱私和法規合規的問題，。

新加坡的 AWS 服務非常全面，且成本可能相對於東京稍低。

所以我目前會選擇新加坡地區的 AWS 服務。


參考資料：
https://docs.aws.amazon.com/zh_tw/AWSEC2/latest/UserGuide/using-regions-availability-zones.html
