import {Utils} from "../Utils/Utils";
import {browser} from "protractor";
import {MenuPage} from "../Pages/MenuPage";
import {OwnersPage} from "../Pages/OwnersPage";
import {OwnersData} from "../TestData/OwnersData";
import {CheckOwners} from "../Pages/CheckOwners";
import {NewVetPage} from "../Pages/NewVetPage";
import {VetsData} from "../TestData/VetsData";
import {CheckVets} from "../Pages/CheckVets";

let menuPage = new MenuPage();
let ownersPage = new OwnersPage();
let checkOwnersPresent = new CheckOwners();
let newVetPage = new NewVetPage();
let checkVeterinarian = new CheckVets();
describe("First Describe", () => {
    beforeEach(() => {
        Utils.goToHomepage()
    })
    it("Add a new owner - Happy Path", () => {
        menuPage.clickOwnersButton();
        browser.sleep(1000);
        menuPage.clickAddNewOwnersButton();
        browser.sleep(1000);
        ownersPage.addInformation(OwnersData.MateiHappyPath.firstname, OwnersData.MateiHappyPath.lastname, OwnersData.MateiHappyPath.address, OwnersData.MateiHappyPath.city, OwnersData.MateiHappyPath.telephone);
        ownersPage.clickOnAddOwnerButton();
        browser.sleep(1000);
    });

    it("Add a new owner - Phone Validation", () => {
        menuPage.clickOwnersButton();
        browser.sleep(1000);
        menuPage.clickAddNewOwnersButton();
        browser.sleep(1000);


        ownersPage.addInformation("Matei", "Popescu", "Str. Muresilor", "Bucresti", "0574965046");
        ownersPage.addTelephone("dgfjg");
        expect(ownersPage.isErrorDisplayed()).toBeTruthy();
        browser.sleep(1000);
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");
        browser.sleep(1000);
    });
    it("Check that new owner was created",()=>{
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        browser.sleep(1000);
        expect(checkOwnersPresent.checkOwnerPresent(OwnersData.MateiHappyPath.firstname + " " + OwnersData.MateiHappyPath.lastname)).toBeTruthy();

    });

    it("Create new veterinarian", ()=>{
        menuPage.clickVetsButton();
        browser.sleep(1000);
        menuPage.clickAddNewVetButton();
        newVetPage.addVetInfo(VetsData.NewVet.firstName, VetsData.NewVet.lastName, VetsData.NewVet.type);
        browser.sleep(1000);
        newVetPage.clickSaveButton();
        browser.sleep(1000);

    });

    it("Check new veterinarian was created", ()=>{
        menuPage.clickVetsButton();
        browser.sleep(1000);
        menuPage.clickAllVetButton()
        browser.sleep(1000);
        expect(checkVeterinarian.checkVetPresent(VetsData.NewVet.firstName + " " + VetsData.NewVet.lastName)).toBeTruthy();

    });
});