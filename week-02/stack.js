//export default 用於指定模組的預設匯出內容，也就是這個模組中最主要的功能。
//當其他模組匯入這個模組時，不需要使用大括號 {}

export default class Stack {
  // # 代表私有屬性，只能在這個類別內部使用，無法從外部或繼承的子類別存取它，避免外部的意外修改
  // 注意：私有欄位只能在建立類別時事先宣告
  #items;
  constructor() {
    //用來建立和初始化一個類別的物件
    this.#items = [];
  }

  // 在 stack 頂部加入元素i
  push(element) {
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    this.#items.pop();
  }

  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    return this.#items[this.#items.length - 1];
  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items.toString());
  }
}

//參考資料：
//ESM：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#default_exports_versus_named_exports
//class：https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes
