import {$$} from "protractor";

export class CheckVets {
    vetFullName = $$(".table-striped tr> td:nth-child(1)")

    checkVetPresent(Name) {

        return this.vetFullName.getText().then(message => {
            return message.includes(Name);
        });
    }
}
