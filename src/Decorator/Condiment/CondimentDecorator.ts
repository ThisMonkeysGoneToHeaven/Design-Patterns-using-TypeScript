import Beverage from "../Beverage/Beverage";

abstract class CondimentDecorator extends Beverage{
    
    abstract getDescription(): string;
}

export default CondimentDecorator;