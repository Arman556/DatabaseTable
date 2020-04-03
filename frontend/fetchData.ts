
export interface CRUD<T> {
  loadData(): void;
  create(val: any): void;
  editRow(val: number): void;
  deleteRow(val: number): void;
}
export enum ROLES {
  DEVELOPER,
  QA,
  DevOps
}
export class Employee {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  phoneno: any;
  fname: number;
  address: string;
  id:number;
  customer_id:number;
  constructor(firstName:string,middleName:string,lastName:string,email:string,phoneNo:number,fName:number,address:string,customerId:number)
  {
    this.firstname = firstName;
    this.middlename = middleName;
    this.lastname = lastName;
    this.email= email;
    this.phoneno=phoneNo;
    this.fname=  fName;
    this.address = address;
    this.customer_id=customerId;
  }
}
export class fetchJsonData {
  async fetchdata() {
    let jsonResponse = await fetch("http://localhost:3000/fetchUserData");
    let data = await jsonResponse.json();
    return(data);
  }
}
  export class ids {
    async fetchids(){
      let jsonResponse=await fetch('http://localhost:3000/getUserid');
      let id=await jsonResponse.json();
      return id;
    }
  } 

