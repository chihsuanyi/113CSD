// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from "./stack.js";

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print(); //5,8

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
console.log(stack.isEmpty()); //false
console.log(stack.peek()); //8
stack.push(9);
stack.print(); //5,8,9
console.log(stack.size()); //3
stack.pop();
stack.print(); //5,8
stack.clear();
console.log(stack.isEmpty()); //true
