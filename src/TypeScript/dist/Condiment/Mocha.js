"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CondimentDecorator_1 = __importDefault(require("./CondimentDecorator"));
class Mocha extends CondimentDecorator_1.default {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ' + Mocha';
    }
    cost() {
        return this.beverage.cost() + 0.2;
    }
}
exports.default = Mocha;
