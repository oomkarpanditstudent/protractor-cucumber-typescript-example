
import { browser, protractor, $, element, by, ElementFinder, ElementHelper, WebElementPromise, WebDriver } from 'protractor';
import { config } from './config/config';
import { BrowserUtil } from './pages/browserUtil';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export class Utils {
/**
     * @method isPresent
     * @desc click the link with the given text
     * @param elm the element to check is present
     * @param callback the text the link should contain
     **/
    public isPresent (elm: ElementFinder, callback): void {
        elm.isDisplayed().then((res) => {
            if (!res) {
                throw false;
            } else {
                callback();
            }
        }).catch(() => {
            browser.sleep(500).then(() => {
                elm.isDisplayed().then((res) => {
                    if (res){
                        callback();
                    } else {
                        expect(false, 'element '+elm.locator()+' not found').to.be.true;
                    }
                })
            })
        })
    }
}