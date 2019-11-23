"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * @class BrowserUtil
*/
class BrowserUtil {
    /**
     * @method BrowserUtil#clickBack
     * @desc click the browser back button
     **/
    clickBack() {
        protractor_1.browser.navigate().back();
    }
    /**
     * @method BrowserUtil#scrollDown
     * @desc scroll down one page
     **/
    scrollDown() {
        protractor_1.browser.actions()
            .sendKeys(protractor_1.protractor.Key.PAGE_DOWN)
            .perform();
    }
}
exports.BrowserUtil = BrowserUtil;
