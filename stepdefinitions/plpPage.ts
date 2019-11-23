import { protractor, element, by } from 'protractor';
import { Utils } from '../utils';
let http = require('http');
let utils = new Utils();
import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import { async } from 'q';
const { Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
import { BrowserUtil } from '../pages/browserUtil';

const search: SearchPageObject = new SearchPageObject();
const browserutil: BrowserUtil = new BrowserUtil();


Then(/^I scroll to "([^"]*)"$/, async (text)=> {
    await browserutil.scrollDown();     
});

Then(/^I should see "([^"]*)"$/, async (text)=> {
    await this.utils.isPresent(element(by.cssContainingText('h1', text)));
});
Then(/^I click on "([^"]*)"$/, async (text)=> {
    // browser.findElement(by.cssContainingText("span",text)).click();
    browser.findElement(by.css(("//img[contains(@alt," + text + " )"))).click();
});
Then(/^I scroll until "([^"]*)" is in view$/, async(text) => {
        var self=this;
        (function timer(){
           setTimeout(function(){
               element(by.cssContainingText('span', text)).isDisplayed().then(function(res){
                if(!res) {
                    self.utils.scrollIntoView(text).then(function(){
                    timer();
                   });
                }
                });
           }, 100);
       });
    });

