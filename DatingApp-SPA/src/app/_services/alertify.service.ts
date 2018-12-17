import { Injectable } from '@angular/core';
declare let alertify: any;


@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string , okCallback :()=> any){
    alertify.confirm(message, function(e){
      if(e){
        okCallback(); // Call back function when user press ok 
      }
      else{
        //If user click cancel
      }
    });
  }
  success(message:string){
    alertify.success(message);
  }
  error(message:string){
    alertify.error(message);
  }
  warning(message:string){
    alertify.warning(message);
  }
  message(message:string){
    alertify.message(message);
  }


}
