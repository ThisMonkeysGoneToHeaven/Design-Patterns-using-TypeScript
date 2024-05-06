import Beverage from "./Beverage";

class DarkRoast implements Beverage{
    getDescription(): string {
        return 'Dark Roast Coffee';
    };

    cost(): number{
        return 1.99;
    }
};

export default DarkRoast;