import Beverage from "./Beverage";

class DarkRoast extends Beverage{

    constructor(){
        super();
        this.description = 'Dark Roast';
    }

    cost(): number{
        return 1.99;
    }
};

export default DarkRoast;