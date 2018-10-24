"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class NewVetPage {
    constructor() {
        this.firstNameVet = protractor_1.$("#firstName"); //  # cauta dupa ID-ul din CSS
        this.lastNameVet = protractor_1.$("#lastName");
        this.typeVet = protractor_1.$("#specialties");
        this.saveButton = protractor_1.$(".btn.btn-default:nth-child(3)");
    }
    addVetInfo(firstName, lastName, type) {
        this.firstNameVet.sendKeys(firstName);
        this.lastNameVet.sendKeys(lastName);
        this.typeVet.sendKeys(type);
    }
    clickSaveButton() {
        this.saveButton.click();
    }
}
exports.NewVetPage = NewVetPage;
