"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mocha_1 = __importDefault(require("./Condiment/Mocha"));
const DarkRoast_1 = __importDefault(require("./Beverage/DarkRoast"));
const myDarkRoast = new DarkRoast_1.default();
console.log(myDarkRoast.getDescription(), myDarkRoast.cost());
const myDarkRoastMocha = new Mocha_1.default(myDarkRoast);
console.log(myDarkRoastMocha.getDescription(), myDarkRoastMocha.cost());
