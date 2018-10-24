"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CheckVets {
    constructor() {
        this.vetFullName = protractor_1.$$(".table-striped tr> td:nth-child(1)");
    }
    checkVetPresent(Name) {
        return this.vetFullName.getText().then(message => {
            return message.includes(Name);
        });
    }
}
exports.CheckVets = CheckVets;
