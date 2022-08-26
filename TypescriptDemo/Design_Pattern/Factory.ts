abstract class BMW {
    abstract run(): void;
  }
  
  class BMW730 extends BMW {
    run(): void {
      console.log("BMW730 run!");
    }
  }
  
  class BMW840 extends BMW {
    run(): void {
      console.log("BMW840 run!");
    }
  }
  
  class BMWFactory {
    public static produceBMW(model: "730" | "840"): BMW {
      if (model === "730") {
        return new BMW730();
      } else {
        return new BMW840();
      }
    }
  }

  let Car1 = BMWFactory.produceBMW("730");
  Car1.run()
  let Car2 = BMWFactory.produceBMW("840");
  Car2.run()