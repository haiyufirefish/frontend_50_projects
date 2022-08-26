interface Observer {
  notify: Function;
}

class ConcreteObserver implements Observer{
  constructor(private name: string) {}

  notify() {
    console.log(`${this.name} has been notified.`);
  }
}

class Subject { 
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    console.log(observer, "is pushed!");
    this.observers.push(observer);
  }

  public deleteObserver(observer: Observer): void {
    console.log("remove", observer);
    const n: number = this.observers.indexOf(observer);
    n != -1 && this.observers.splice(n, 1);
  }

  public notifyObservers(): void {
    console.log("notify all the observers", this.observers);
    this.observers.forEach(observer => observer.notify());
  }
}

const subject: Subject = new Subject();
const xiaoQin = new ConcreteObserver("xiaoQin");
const xiaoWang = new ConcreteObserver("xiaoWang");
const xiaoNiu = new ConcreteObserver("xiaoNiu");
subject.addObserver(xiaoQin);
subject.addObserver(xiaoWang);
subject.notifyObservers();

console.log("==============================================");
subject.deleteObserver(xiaoQin);
subject.addObserver(xiaoNiu);
subject.notifyObservers();