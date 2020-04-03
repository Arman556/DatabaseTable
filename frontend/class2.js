export var ROLES;
(function (ROLES) {
    ROLES[ROLES["DEVELOPER"] = 0] = "DEVELOPER";
    ROLES[ROLES["QA"] = 1] = "QA";
    ROLES[ROLES["DevOps"] = 2] = "DevOps";
})(ROLES || (ROLES = {}));
export class Employee {
    constructor(fsname, mname, lname, email, phone, fname, address, customer_id) {
        this.firstname = fsname;
        this.middlename = mname;
        this.lastname = lname;
        this.email = email;
        this.phoneno = phone;
        this.fname = fname;
        this.address = address;
        this.customer_id = customer_id;
    }
}
export class fetchData {
    async fetch1() {
        let response = await fetch("http://localhost:3000/class2");
        let data = await response.json();
        return (data);
    }
}
export class ids {
    async fetchids() {
        let response = await fetch('http://localhost:3000/getids');
        let data = await response.json();
        return data;
    }
}
