"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SearchPageObject {
    constructor() {
        this.searchTextBox = protractor_1.$("#search");
        this.searchButton = protractor_1.$("#searchButton");
    }
}
exports.SearchPageObject = SearchPageObject;
