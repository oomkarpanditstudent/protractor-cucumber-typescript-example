"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
class Utils {
    /**
         * @method isPresent
         * @desc click the link with the given text
         * @param elm the element to check is present
         * @param callback the text the link should contain
         **/
    isPresent(elm, callback) {
        elm.isDisplayed().then((res) => {
            if (!res) {
                throw false;
            }
            else {
                callback();
            }
        }).catch(() => {
            protractor_1.browser.sleep(500).then(() => {
                elm.isDisplayed().then((res) => {
                    if (res) {
                        callback();
                    }
                    else {
                        expect(false, 'element ' + elm.locator() + ' not found').to.be.true;
                    }
                });
            });
        });
    }
}
exports.Utils = Utils;
