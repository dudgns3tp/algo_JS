console.log(this, module.exports, exports);
console.log(this === module.exports);
console.log(this === exports);
console.log(module.exports === exports);

console.log(
  globalThis.queueMicrotask(() => setTimeout(() => console.log("asdasd"), 1000))
);
