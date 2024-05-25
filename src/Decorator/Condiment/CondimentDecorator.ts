import Beverage from "../Beverage/Beverage";

abstract class CondimentDecorator extends Beverage{
    
    /*
    Why is it necessary for CondimentDecorator to make sure that all its concreteDecoratos implement their own getDescription() ?

    Because, conreteDecorators are inhereting from Beverage which has it's own getDescription() and if we don't make it mandatory, concreteDecorators will depend on Beverage's getDescription() for the calls made to them.
    */

    abstract getDescription(): string;
}

export default CondimentDecorator;