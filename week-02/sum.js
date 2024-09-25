//第一個直觀想到的寫法：取出第一個ary中第一個數字加到sum，並把它刪除，做遞迴直到ary中沒有數字了
function sum(ary) {
  if (ary.length === 0) {
    return 0;
  }

  let n = ary[0];
  ary.shift();
  return n + sum(ary);
}

console.log(sum([1, 5, 3, 2])); // 11
console.log(sum([])); //0

//第二種：pop()出ary中最後一個數字加到sum中，做遞迴直到ary中沒有數字了
function sum2(ary) {
  if (ary.length === 0) {
    return 0;
  }

  let n = ary.pop();
  return n + sum2(ary);
}

console.log(sum2([1, 5, 3, 2])); // 11

//看了 https://www.youtube.com/live/_vFuDQ_6Xt8?si=1Y9GAbDfE-P6ysPc 後學會運用 foreach()、reduce() 以及箭頭函式

//第三種：foreach()，對陣列中的每個元素進行指定操作，是一種函式，不屬於 for迴圈的一種
function sum3(ary) {
  let sum = 0;
  ary.forEach((element) => (sum += element));
  return sum;
}

console.log(sum3([1, 5, 3, 2])); // 11

//第四種：reduce()，對陣列中的所有元素進行迭代，並累積結果到一個單一的值
//如下方 acc 為累計的值，cur為當前處理的值，0 為起始值
function sum4(ary) {
  let sum = ary.reduce((acc, cur) => (acc += cur), 0);
  return sum;
}

console.log(sum4([1, 5, 3, 2])); // 11

// 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
function sum_n(n) {
  if (n === 0) {
    return 0;
  }
  let sum = n;
  n--;
  return sum + sum_n(n);
}

console.log(sum_n(5)); //15

//參考資料
//array介紹影片：https://youtu.be/vDNw0FWL8zw?si=2dXum5b-xzaZ5Qsb&t=7758
