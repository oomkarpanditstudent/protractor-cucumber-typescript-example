import { $, ElementFinder } from "protractor";

export class productPageObject{
    public productMOTO: ElementFinder;

    constructor(){
        this.productMOTO = $('#biggestreleases > div > div:nth-child(2) > div > p.subHeadline');
    }


}