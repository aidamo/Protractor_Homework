"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class MenuPage {
    constructor() {
        this.menuItems = protractor_1.$$(".nav.navbar-nav li a");
        this.homeButton = this.menuItems.get(0);
        this.ownersButton = this.menuItems.get(1);
        this.veterinariansButton = this.menuItems.get(4);
        this.petTypesButton = this.menuItems.get(7);
        this.specialitiesButton = this.menuItems.get(8);
        this.addNewOwnerButton = this.menuItems.get(3);
        this.allOwnerButton = this.menuItems.get(2);
        this.addNewVetButton = this.menuItems.get(6);
        this.allVetButton = this.menuItems.get(5);
    }
    clickOwnersButton() {
        this.ownersButton.click();
    }
    clickAddNewOwnersButton() {
        this.addNewOwnerButton.click();
    }
    clickAllOwnersButton() {
        this.allOwnerButton.click();
    }
    clickVetsButton() {
        this.veterinariansButton.click();
    }
    clickAddNewVetButton() {
        this.addNewVetButton.click();
    }
    clickAllVetButton() {
        this.allVetButton.click();
    }
}
exports.MenuPage = MenuPage;
