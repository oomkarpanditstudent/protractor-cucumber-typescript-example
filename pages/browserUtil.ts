import { browser, protractor } from 'protractor';

/**
 * @class BrowserUtil
*/
export class BrowserUtil {

    /**
     * @method BrowserUtil#clickBack
     * @desc click the browser back button
     **/
    public clickBack(): void {
        browser.navigate().back();
    }

    /**
     * @method BrowserUtil#scrollDown
     * @desc scroll down one page
     **/
    public scrollDown(): void {
        browser.actions()
            .sendKeys(protractor.Key.PAGE_DOWN)
            .perform();
    }
}