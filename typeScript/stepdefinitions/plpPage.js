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
const utils_1 = require("../utils");
let http = require('http');
let utils = new utils_1.Utils();
const protractor_2 = require("protractor");
const searchPage_1 = require("../pages/searchPage");
const { Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const browserUtil_1 = require("../pages/browserUtil");
const search = new searchPage_1.SearchPageObject();
const browserutil = new browserUtil_1.BrowserUtil();
Then(/^I scroll to "([^"]*)"$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield browserutil.scrollDown();
}));
Then(/^I should see "([^"]*)"$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield this.utils.isPresent(protractor_1.element(protractor_1.by.cssContainingText('h1', text)));
}));
Then(/^I click on "([^"]*)"$/, (text) => __awaiter(this, void 0, void 0, function* () {
    // browser.findElement(by.cssContainingText("span",text)).click();
    protractor_2.browser.findElement(protractor_1.by.css(("//img[contains(@alt," + text + " )"))).click();
}));
Then(/^I scroll until "([^"]*)" is in view$/, (text) => __awaiter(this, void 0, void 0, function* () {
    var self = this;
    (function timer() {
        setTimeout(function () {
            protractor_1.element(protractor_1.by.cssContainingText('span', text)).isDisplayed().then(function (res) {
                if (!res) {
                    self.utils.scrollIntoView(text).then(function () {
                        timer();
                    });
                }
            });
        }, 100);
    });
}));
