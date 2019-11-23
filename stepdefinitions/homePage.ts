import { browser, by } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given, Then} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am on "(.*?)" page$/, async (text) => {
    if (text === "game") {
        await expect(browser.getTitle()).to.eventually.equal("GAME | Gaming Specialist For Consoles, Games & Accessories!");
    } else if (text === "plp") {
        await expect(browser.getTitle()).to.eventually.equal("GAME - Destination Xbox One | GAME");
    } else if (text === "pdp") {
        // var title = browser.findElement(by.css('.productSummary span')).getText();
        var title = browser.getTitle(); 
        await expect(browser.getTitle()).to.eventually.equal("MotoGP 19");
        console.log('Title: ' + title );
        } 
    });

Then(/^I should be taken to "([^"]*)" screen$/, async (text) => {
    let HomePageURL = browser.baseUrl;
    var url = this.HomePageURL+ text.toLowerCase();
    console.log("url :    "+url);
        expect(browser.getCurrentUrl()).to.eventually.equal(url);
    });