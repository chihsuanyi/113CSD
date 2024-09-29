//CallBack的必要條件：
//1、讓函式成為另一個函式的參數
//2、讓函式控制參數函式的執行時機

function doJob(job, time, cb) {
  //job 為要做的工作，time 為延遲時間，cb 為要 callback 的函式
  setTimeout(() => {
    // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
    let now = new Date();
    cb(`完成工作 ${job} at ${now.toISOString()}`);
  }, time);
}

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here
// 以下是使用範例
doJob("刷牙", 1000, function (data) {
  // 表示 doJob 做完了
  console.log(data);
  doJob("吃早餐", 3000, function (data) {
    console.log(data);
    doJob("寫功課", 1000, function (data) {
      console.log(data);
      doJob("吃午餐", 2000, function (data) {
        console.log(data);
      });
    });
  });
});

//參考資料：https://medium.com/appxtech/什麼是callback函式-callback-function-3a0a972d5f82
