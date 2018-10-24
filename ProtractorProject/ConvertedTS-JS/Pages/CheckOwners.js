"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CheckOwners {
    constructor() {
        this.ownersFullName = protractor_1.$$(".ownerFullName");
    }
    checkOwnerPresent(Name) {
        return this.ownersFullName.getText().then(message => {
            // console.log(message)
            return message.includes(Name);
        });
    }
}
exports.CheckOwners = CheckOwners;
