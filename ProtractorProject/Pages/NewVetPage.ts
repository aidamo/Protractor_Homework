import {$, $$} from "protractor";

export class NewVetPage {

    firstNameVet = $("#firstName");//  # cauta dupa ID-ul din CSS
    lastNameVet = $("#lastName");
    typeVet = $("#specialties");
    saveButton = $(".btn.btn-default:nth-child(3)")

    addVetInfo (firstName: string, lastName: string, type: string) {

        this.firstNameVet.sendKeys(firstName);
        this.lastNameVet.sendKeys(lastName);
        this.typeVet.sendKeys(type)

    }
    clickSaveButton() {
        this.saveButton.click();
    }
}
