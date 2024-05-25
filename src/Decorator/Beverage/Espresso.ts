import Beverage from './Beverage';

class Espresso extends Beverage{

    constructor(){
        super();
        this.description = 'Espresso';
    }

    cost(): number{
        return 1.49;
    };
}

export default Espresso;