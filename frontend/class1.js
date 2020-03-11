import * as Imp from "./class2.js";
import * as Imp1 from "./class4.js";
let this1 = new Imp.fetchData();
let obj2 = new Imp1.validations();
class actions {
    //cell:any[]=[];
    constructor() {
        this.copy = [];
        this.arrHeaders = [];
        this.removeRow = [];
        this.arr = [];
        let j = document.getElementById("b1");
        j.addEventListener("click", this.loadData);
    }
    loadData() {
        if (document.getElementById("b1").innerHTML == "LOAD DATA") {
            document.getElementById("b1").innerHTML = "REFRESH DATA";
        }
        else {
            let div = document.getElementById("d1");
            div.innerHTML = " ";
        }
        this1.fetch1().then(data => obj.create(data));
        // let data1=this1.fetch1();
        // this.create(data1);
    }
    create(Emp) {
        // document.getElementById("LOAD").innerHTML = "REFRESH DATA";
        // let div = document.getElementById("id1");
        // div.innerHTML = " ";
        this.Emp = Emp;
        this.table = document.createElement("table");
        this.arrHeaders = [
            "firstname",
            "middlename",
            "lastname",
            "email",
            "phoneno",
            "role",
            "address"
        ];
        this.flag = true;
        this.rows = Emp.length;
        this.cols = this.arrHeaders.length;
        this.removeRow = [];
        let tr = this.table.insertRow(-1);
        for (let h = 0; h < this.cols + 2; h++) {
            let th = document.createElement("th");
            if (h < this.cols) {
                th.innerHTML = this.arrHeaders[h];
                tr.appendChild(th);
            }
            else {
                th.innerHTML = "Action";
                tr.appendChild(th);
            }
        }
        console.log(this.rows);
        for (let c = 0; c < this.rows; c++) {
            tr = this.table.insertRow(-1);
            tr.setAttribute("id", "row" + Emp[c].empid);
            tr.innerHTML =
                '<td class="cell' + Emp[c].empid + '">' + Emp[c].firstname + "</td>" +
                    '<td class="cell' + Emp[c].empid + '">' + Emp[c].middlename + "</td>" +
                    '<td class="cell' + Emp[c].empid + '">' + Emp[c].lastname + "</td>" +
                    '<td class="cell' + Emp[c].empid + '">' + Emp[c].email + "</td>" +
                    '<td class="cell' + Emp[c].empid + '">' + Emp[c].phoneno + "</td>" +
                    '<td class="cell' + Emp[c].empid + '">' + Imp.ROLES[Emp[c].role] + "</td>" +
                    '<td class="cell' + Emp[c].empid + '">' + Emp[c].address + "</td>" +
                    '<td> <button type="button" class="editb" id="edit' + Emp[c].empid + '"> edit data</button></td>' +
                    '<td> <button type="button" class="deleteb" id="delete' + Emp[c].empid + '"> delete data </button></td>';
            console.log(Emp[c].empid);
        }
        document.getElementById("d1").appendChild(this.table);
        let btn = document.createElement("button");
        btn.innerHTML = "ADD ROW";
        btn.setAttribute("id", "newbtn");
        document.getElementById("d1").appendChild(btn);
        for (let i = 0; i < this.rows; i++) {
            let edit_button = "edit" + Emp[i].empid;
            let delete_button = "delete" + Emp[i].empid;
            let n = Emp[i].empid;
            let edit = document.getElementById(edit_button);
            edit.onclick = () => {
                this.editRow(n);
            };
            let deletef = document.getElementById(delete_button);
            deletef.onclick = () => {
                this.deleteRow(n);
            };
        }
        let btn1 = document.getElementById("newbtn");
        btn1.onclick = () => {
            this.addrow();
        };
    }
    editRow(val) {
        document.getElementById("newbtn").setAttribute("disabled", "true");
        let cellClass = "cell" + val;
        let cell = document.getElementsByClassName(cellClass);
        this.copyLastRow(val);
        //console.log(this.copy);
        if (this.flag) {
            this.flag = false;
            for (let i = 0; i < cell.length; i++) {
                // cell[i].setAttribute("contenteditable", "true");
                if (i === 5) {
                    cell[i].innerHTML = `<select id = "role1">
          <option value ="1">QA</option>
          <option value ="0">Developer</option>
          <option value ="2">DevOps</option>
          `;
                }
                else {
                    cell[i].innerHTML = `<input  value = ${this.copy[i]}>`;
                }
            }
            this.changeButton(val);
            this.disableButtons(val);
        }
        else {
            this.flag = true;
            this.arr[val + 1] = 1;
            document.getElementById("newbtn").removeAttribute("disabled");
            let row_array = [];
            for (let i = 0; i < cell.length; i++) {
                if (i === 5) {
                    row_array[i] = +cell[i].childNodes[0].value;
                }
                else {
                    row_array[i] = cell[i].childNodes[0].value;
                }
            }
            if (!obj2.email(row_array[3])) {
                this.flag = false;
                cell[3].innerHTML += '<span id="span1" style="color:red" ></span>';
                let span1 = document.getElementById("span1");
                span1.style.fontSize = "12px";
                span1.innerHTML = "invalid email";
                // alert("invalid email");
            }
            if (!obj2.phoneno(`${row_array[4]}`)) {
                this.flag = false;
                cell[4].innerHTML += '<span id="span2" style="color:red" ></span>';
                let span1 = document.getElementById("span2");
                span1.style.fontSize = "12px";
                span1.innerHTML = "invalid phoneNo.";
                // alert("invalid email");
            }
            if (!obj2.notempty(row_array[0])) {
                this.flag = false;
                cell[0].innerHTML += '<span id="span3" style="color:red" ></span>';
                let span1 = document.getElementById("span3");
                span1.style.fontSize = "12px";
                span1.innerHTML = "enter firstname";
                // alert("invalid email");
            }
            if (!obj2.notempty(row_array[6])) {
                this.flag = false;
                cell[6].innerHTML += '<span id="span4" style="color:red" ></span>';
                let span1 = document.getElementById("span4");
                span1.style.fontSize = "12px";
                span1.innerHTML = "enter address";
                // alert("invalid email");
            }
            if (!obj2.notempty(row_array[2])) {
                this.flag = false;
                cell[2].innerHTML += '<span id="span5" style="color:red" ></span>';
                let span1 = document.getElementById("span5");
                span1.style.fontSize = "12px";
                span1.innerHTML = "enter lastname";
                // alert("invalid email");
            }
            if (obj2.notempty(row_array[2]) && obj2.email(row_array[3]) && obj2.notempty(row_array[6]) && obj2.notempty(row_array[0]) && obj2.phoneno(`${row_array[4]}`)) {
                let newEmployee = new Imp.Employee(row_array[0], row_array[1], row_array[2], row_array[3], +row_array[4], +row_array[5], row_array[6]);
                newEmployee.id = val;
                this.copy = [];
                fetch(`http://localhost:3000/update/${val}`, {
                    method: "put",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newEmployee)
                }).then(res => {
                    for (let i = 0; i < this.cols; i++) {
                        if (i === 5) {
                            cell[i].innerHTML = Imp.ROLES[+cell[i].childNodes[0].value];
                        }
                        else {
                            cell[i].innerHTML = cell[i].childNodes[0].value;
                        }
                    }
                    this.changeAgain(val);
                    this.enableButtons(val);
                });
            }
        }
    }
    deleteRow(val) {
        let row_id = "row" + val;
        let cellClass = "cell" + val;
        let cell = document.getElementsByClassName(cellClass);
        if (this.flag) {
            fetch(`http://localhost:3000/delete/${val}`, {
                method: "delete"
            })
                .then(res => {
                console.log("deleted frontend");
                let delete_row = document.getElementById(row_id);
                delete_row.parentNode.removeChild(delete_row);
                this.removeRow[val] = true;
                this.rows = this.rows - 1;
            });
        }
        else {
            let deletebtn = "delete" + val;
            for (let i = 0; i < this.rows - 1; i++) {
                //console.log(this.Emp[i].empid);
                this.arr[this.Emp[i].empid] = 1;
            }
            let btnid = document.getElementById(deletebtn).innerHTML;
            console.log(btnid);
            console.log(this.arr[val]);
            if ((btnid == "cancel") && this.arr[val] == 0) {
                console.log("entering block");
                fetch(`http://localhost:3000/delete/${val}`, {
                    method: "delete"
                })
                    .then(res => {
                    let delete_row = document.getElementById(row_id);
                    delete_row.parentNode.removeChild(delete_row);
                    this.removeRow[val] = true;
                    this.rows = this.rows - 1;
                });
            }
            else {
                this.pasteLastRow(val);
                this.copy = [];
            }
            this.arr[val + 1] = 1;
            this.flag = true;
            document.getElementById("newbtn").removeAttribute("disabled");
            this.changeAgain(val);
            this.enableButtons(val);
        }
    }
    copyLastRow(val) {
        let cellClass = "cell" + val;
        let cell = document.getElementsByClassName(cellClass);
        //console.log(cell);
        for (let i = 0; i < this.cols; i++) {
            if (i === 5) {
                this.copy[i] = cell[i].innerHTML;
            }
            else if (i == 4) {
                this.copy[i] = cell[i].innerHTML;
                console.log(this.copy[i]);
            }
            else {
                this.copy[i] = (cell[i].innerHTML);
            }
        }
    }
    pasteLastRow(val) {
        let cellClass = "cell" + val;
        let cell = document.getElementsByClassName(cellClass);
        for (let i = 0; i < this.cols; i++) {
            cell[i].innerHTML = this.copy[i];
        }
    }
    changeButton(val) {
        let edit_btn = "edit" + val;
        let delete_btn = "delete" + val;
        document.getElementById(edit_btn).innerHTML = "Save";
        document.getElementById(delete_btn).innerHTML = "cancel";
    }
    changeAgain(val) {
        let edit_btn = "edit" + val;
        let delete_btn = "delete" + val;
        document.getElementById(edit_btn).innerHTML = "edit data";
        document.getElementById(delete_btn).innerHTML = "delete data";
    }
    enableButtons(val) {
        console.log(`This,rows= ${this.rows}`);
        for (let i = 0; i < this.rows; i++) {
            console.log(this.Emp[i].empid);
            if (this.removeRow[this.Emp[i].empid] !== true && this.Emp[i].empid !== val) {
                //console.log(this.Emp[i].empid);
                document.getElementById("edit" + this.Emp[i].empid).toggleAttribute("disabled");
                document.getElementById("delete" + this.Emp[i].empid).toggleAttribute("disabled");
            }
        }
    }
    disableButtons(val) {
        console.log(`This,rows= ${this.rows}`);
        for (let i = 0; i < this.rows; i++) {
            console.log(this.Emp[i].empid);
            if (this.removeRow[this.Emp[i].empid] !== true && this.Emp[i].empid !== val) {
                //console.log(this.Emp[i].empid);
                document.getElementById("edit" + this.Emp[i].empid).toggleAttribute("disabled");
                document.getElementById("delete" + this.Emp[i].empid).toggleAttribute("disabled");
            }
        }
    }
    addrow() {
        //let ind=this.rows
        //console.log(ind);
        let ind;
        let newEmployee = new Imp.Employee("", "", "", "", 9999999999, 2, "");
        console.log(newEmployee);
        fetch(`http://localhost:3000/addrow`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEmployee)
        }).then((res) => res.json())
            .then(res => {
            ind = res.empid;
            this.Emp[this.rows] = { empid: ind };
            let tr = this.table.insertRow(-1);
            tr.setAttribute("id", "row" + ind);
            tr.setAttribute("id", "row" + ind);
            tr.innerHTML =
                '<td class="cell' + ind + '"></td>' +
                    '<td class="cell' + ind + '"></td>' +
                    '<td class="cell' + ind + '"></td>' +
                    '<td class="cell' + ind + '"></td>' +
                    '<td class="cell' + ind + '">9999999999</td>' +
                    '<td class="cell' + ind + '">' + Imp.ROLES[1] + '</td>' +
                    '<td class="cell' + ind + '"></td>' +
                    '<td> <button type="button" class="editb" id="edit' + ind + '">  </button></td>' +
                    '<td> <button type="button" class="deleteb" id="delete' + ind + '"> </button></td>';
            console.log(`ind value = ${ind}`);
            this.arr[ind] = 0;
            let edit_button = "edit" + ind;
            let delete_button = "delete" + ind;
            this.editRow(ind);
            let n = ind;
            let edit = document.getElementById(edit_button);
            edit.onclick = () => {
                this.editRow(n);
            };
            let deletef = document.getElementById(delete_button);
            deletef.onclick = () => {
                this.deleteRow(n);
            };
            this.rows = this.rows + 1;
        });
    }
}
export let obj = new actions();
