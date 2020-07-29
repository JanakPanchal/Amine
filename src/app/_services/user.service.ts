import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  uid
  udata:any = [ 
    {"name":"Basic" , "data": []},{"name":"Entrances" ,"data": []}
  ]
  
  userInit(){
    if (localStorage.getItem("uid") === null) {
      this.uid = this.generator()
      localStorage.setItem('uid', this.uid);
      localStorage.setItem('udata', JSON.stringify(this.udata));
    }
  
  }

  private generator(): string {
    const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;

    return isString;
  }

  private S4(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }


  setUserData(data){
    this.udata = JSON.parse(localStorage.getItem('udata'));
    console.log("userData " , this.udata);
    this.udata.forEach(e => {
        if(e.name == data.name)    {
          console.log(data.name)
        }  
        //e.name.push(localStorage.setItem('udata', JSON.stringify(this.udata)));
    });
  
  }


}
