import {$$} from "protractor";

export class CheckOwners {
    ownersFullName = $$(".ownerFullName")

    checkOwnerPresent(Name) {

        return this.ownersFullName.getText().then(message => {
            // console.log(message)
            return message.includes(Name);
        });
    }}