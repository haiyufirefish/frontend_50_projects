interface Subject_ {
    doSave(): void;
}

class RealSubjectP implements Subject_ {
    doSave() {
      console.log("save operation");
    }
  }

class ProxyClass implements Subject_ {
private realSubject?: RealSubjectP;

doSave() {
if (!this.realSubject) {
this.realSubject = new RealSubjectP();
  }
this.preSave();
this.realSubject.doSave();
this.finishSave();
    }

preSave() {
console.log("before save");
    }

finishSave() {
console.log("after save");
    }
}


class DynamicProxy {
private target: any;
constructor(target: any) {
this.target = target;
    }

getInstance(): any {
return new Proxy(this.target, {
get: (target, propKey) => {
console.log('dynamic proxy save bfore...')
return target[propKey];
  },
  });
    }
​}
// ---- main 函数 ----
// (() => {
const proxy = new ProxyClass();
proxy.doSave();

console.log('-----dynamic proxy-----');
const instance = new DynamicProxy(new   RealSubjectP()).getInstance();
instance.doSave();
// })();

   
   