


### Protractor-Cucumber-TypeScript Setup Guide   


### Features
* No typings.json or typings folder, they have been replaced by better **'@types'** modules in package.json.
* ts-node(typescript execution environment for node) in cucumberOpts. 
* All scripts written with > Typescript2.0 & Cucumber2.0.
* Neat folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation.
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
* Screenshots on failure feature scenarios.


### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```

#### Writing Features
```
Feature: search for game

@OutlineScenario
Scenario Outline: Searching for game
  
  Given I am on "<search>" page
  When  I type "<search keyword>"
  Then  I click on search button
  And   I type "<game name>"
  Then  I click on search button
  And   I scroll to "MOTO GP 19"
  Then  I am on "plp" page
  And   I click on "MOTO GP 19"
  Then  I should be taken to "MotoGP" screen

  Examples:
    | search | search keyword | game name | 
    |  game  | XBOX | XBox one games |
  
```
#### Writing Step Definitions
    
```
import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();

Given(/^I am on "(.*?)" page$/, async (text) => {
    if (text === "game") {
        await expect(browser.getTitle()).to.eventually.equal("GAME | Gaming Specialist For Consoles, Games & Accessories!");
    } else if (text === "plp") {
        await expect(browser.getTitle()).to.eventually.equal("GAME - Destination Xbox One | GAME");
    } else if (text === "pdp") {
        var title = browser.getTitle(); 
        await expect(browser.getTitle()).to.eventually.equal("MotoGP 19");
        console.log('Title: ' + title );
        } 
    });
```

#### Writing Page Objects
```
import { $ } from "protractor";

xport class SearchPageObject {
    public searchTextBox: ElementFinder;
    public searchButton: ElementFinder;
    public logo: ElementFinder;

    constructor() {
        this.searchTextBox = $("#search");
        this.searchButton = $("#searchButton");
    }
}
```
#### Cucumber Hooks
Following method takes screenshot on failure of each scenario
```
After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
```
#### CucumberOpts Tags
Following configuration shows to call specific tags from feature files
```
cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
    strict: true,
    tags: "@OutlineScenario",
},
```
#### HTML Reports
Currently this project has been integrated with [cucumber-html-reporter](https://github.com/gkushang/cucumber-html-reporter), which is generated in the `reports` folder when you run `npm test`.
They can be customized according to user's specific needs.


## Contributions
For contributors who want to improve this repo by contributing some code, reporting bugs, issues or improving documentation - PR's are highly welcome, please maintain the coding style , folder structure , detailed description of documentation and bugs/issues with examples if possible.

## Contributors


## License
```   
MIT License

Copyright (c) 2019 Ram Pasala
```
"# protractor-cucumber-typescript-example" 
