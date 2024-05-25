import Beverage from "../Beverage/Beverage";
import CondimentDecorator from "./CondimentDecorator";

class Mocha extends CondimentDecorator{
    
    beverage: Beverage;

    constructor(beverage: Beverage){
        super();
        this.beverage = beverage;        
    }

    getDescription(): string {
        return this.beverage.getDescription() + ' + Mocha';
    }

    cost(): number {
        return this.beverage.cost() + 0.2;
    }
}

export default Mocha;