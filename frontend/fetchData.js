export var ROLES;
(function (ROLES) {
    ROLES[ROLES["DEVELOPER"] = 0] = "DEVELOPER";
    ROLES[ROLES["QA"] = 1] = "QA";
    ROLES[ROLES["DevOps"] = 2] = "DevOps";
})(ROLES || (ROLES = {}));
export class Employee {
    constructor(firstName, middleName, lastName, email, phoneNo, fName, address, customerId) {
        this.firstname = firstName;
        this.middlename = middleName;
        this.lastname = lastName;
        this.email = email;
        this.phoneno = phoneNo;
        this.fname = fName;
        this.address = address;
        this.customer_id = customerId;
    }
}
export class fetchJsonData {
    async fetchdata() {
        let jsonResponse = await fetch("http://localhost:3000/fetchUserData");
        let data = await jsonResponse.json();
        return (data);
    }
}
export class ids {
    async fetchids() {
        let jsonResponse = await fetch('http://localhost:3000/getUserid');
        let id = await jsonResponse.json();
        return id;
    }
}
