"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utils/Utils");
const protractor_1 = require("protractor");
const MenuPage_1 = require("../Pages/MenuPage");
const OwnersPage_1 = require("../Pages/OwnersPage");
const OwnersData_1 = require("../TestData/OwnersData");
const CheckOwners_1 = require("../Pages/CheckOwners");
const NewVetPage_1 = require("../Pages/NewVetPage");
const VetsData_1 = require("../TestData/VetsData");
const CheckVets_1 = require("../Pages/CheckVets");
let menuPage = new MenuPage_1.MenuPage();
let ownersPage = new OwnersPage_1.OwnersPage();
let checkOwnersPresent = new CheckOwners_1.CheckOwners();
let newVetPage = new NewVetPage_1.NewVetPage();
let checkVeterinarian = new CheckVets_1.CheckVets();
describe("First Describe", () => {
    beforeEach(() => {
        Utils_1.Utils.goToHomepage();
    });
    it("Add a new owner - Happy Path", () => {
        menuPage.clickOwnersButton();
        protractor_1.browser.sleep(1000);
        menuPage.clickAddNewOwnersButton();
        protractor_1.browser.sleep(1000);
        ownersPage.addInformation(OwnersData_1.OwnersData.MateiHappyPath.firstname, OwnersData_1.OwnersData.MateiHappyPath.lastname, OwnersData_1.OwnersData.MateiHappyPath.address, OwnersData_1.OwnersData.MateiHappyPath.city, OwnersData_1.OwnersData.MateiHappyPath.telephone);
        ownersPage.clickOnAddOwnerButton();
        protractor_1.browser.sleep(1000);
    });
    it("Add a new owner - Phone Validation", () => {
        menuPage.clickOwnersButton();
        protractor_1.browser.sleep(1000);
        menuPage.clickAddNewOwnersButton();
        protractor_1.browser.sleep(1000);
        ownersPage.addInformation("Matei", "Popescu", "Str. Muresilor", "Bucresti", "0574965046");
        ownersPage.addTelephone("dgfjg");
        expect(ownersPage.isErrorDisplayed()).toBeTruthy();
        protractor_1.browser.sleep(1000);
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");
        protractor_1.browser.sleep(1000);
    });
    it("Check that new owner was created", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        protractor_1.browser.sleep(1000);
        expect(checkOwnersPresent.checkOwnerPresent(OwnersData_1.OwnersData.MateiHappyPath.firstname + " " + OwnersData_1.OwnersData.MateiHappyPath.lastname)).toBeTruthy();
    });
    it("Create new veterinarian", () => {
        menuPage.clickVetsButton();
        protractor_1.browser.sleep(1000);
        menuPage.clickAddNewVetButton();
        newVetPage.addVetInfo(VetsData_1.VetsData.NewVet.firstName, VetsData_1.VetsData.NewVet.lastName, VetsData_1.VetsData.NewVet.type);
        protractor_1.browser.sleep(1000);
        newVetPage.clickSaveButton();
        protractor_1.browser.sleep(1000);
    });
    it("Check new veterinarian was created", () => {
        menuPage.clickVetsButton();
        protractor_1.browser.sleep(1000);
        menuPage.clickAllVetButton();
        protractor_1.browser.sleep(1000);
        expect(checkVeterinarian.checkVetPresent(VetsData_1.VetsData.NewVet.firstName + " " + VetsData_1.VetsData.NewVet.lastName)).toBeTruthy();
    });
});
