import Mocha from "./Condiment/Mocha";
import Beverage from "./Beverage/Beverage";
import DarkRoast from "./Beverage/DarkRoast";

const myDarkRoast: Beverage = new DarkRoast();
console.log(myDarkRoast.getDescription(), myDarkRoast.cost());

const myDarkRoastMocha : Beverage = new Mocha(myDarkRoast);
console.log(myDarkRoastMocha.getDescription(), myDarkRoastMocha.cost());