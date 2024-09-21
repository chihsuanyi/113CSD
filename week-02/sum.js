//第一個直觀想到的寫法:取出第一個ary中第一個數字加到sum，並把它刪除，做遞迴直到ary中沒有數字了
function sum(ary) {
  if (ary.length === 0) {
    return 0;
  }

  let n = ary[0];
  ary.shift();
  return n + sum(ary);
}

console.log(sum([1, 5, 3, 2])); // 11

// 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，一樣不能用 for, while 寫，要怎麼做？
function sum2(n) {
  if (n === 0) {
    return 0;
  }
  let sum = n;
  n--;
  return sum + sum2(n);
}

console.log(sum2(5)); //15

//參考資料
//Arrays：https://youtu.be/vDNw0FWL8zw?si=2dXum5b-xzaZ5Qsb&t=7758
