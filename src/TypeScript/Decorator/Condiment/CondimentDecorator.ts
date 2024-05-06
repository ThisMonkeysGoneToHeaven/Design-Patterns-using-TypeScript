import Beverage from "../Beverage/Beverage";

abstract class CondimentDecorator implements Beverage{
    
    abstract getDescription(): string;
    abstract cost(): number;
}

export default CondimentDecorator;