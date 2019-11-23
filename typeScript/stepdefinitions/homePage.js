"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const searchPage_1 = require("../pages/searchPage");
const { Given, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new searchPage_1.SearchPageObject();
Given(/^I am on "(.*?)" page$/, (text) => __awaiter(this, void 0, void 0, function* () {
    if (text === "game") {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("GAME | Gaming Specialist For Consoles, Games & Accessories!");
    }
    else if (text === "plp") {
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("GAME - Destination Xbox One | GAME");
    }
    else if (text === "pdp") {
        // var title = browser.findElement(by.css('.productSummary span')).getText();
        var title = protractor_1.browser.getTitle();
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("MotoGP 19");
        console.log('Title: ' + title);
    }
}));
Then(/^I should be taken to "([^"]*)" screen$/, (text) => __awaiter(this, void 0, void 0, function* () {
    let HomePageURL = protractor_1.browser.baseUrl;
    var url = this.HomePageURL + text.toLowerCase();
    console.log("url :    " + url);
    expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal(url);
}));
