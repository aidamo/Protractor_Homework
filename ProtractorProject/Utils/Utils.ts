import {browser} from "protractor";

export class Utils {
    static goToHomepage() {
        browser.get(browser.baseUrl);
    }
}