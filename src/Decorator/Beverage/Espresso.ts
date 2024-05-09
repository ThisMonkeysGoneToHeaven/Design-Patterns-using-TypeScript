import Beverage from './Beverage';

class Espresso implements Beverage{

    getDescription(): string{
        return 'Espresso';
    };

    cost(): number{
        return 1.49;
    };
}

export default Espresso;