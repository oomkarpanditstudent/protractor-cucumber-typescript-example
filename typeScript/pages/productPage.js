"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class productPageObject {
    constructor() {
        this.productMOTO = protractor_1.$('#biggestreleases > div > div:nth-child(2) > div > p.subHeadline');
    }
}
exports.productPageObject = productPageObject;
