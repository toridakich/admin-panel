import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { User } from '../user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient){}

  getAllUsers(){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.get('http://localhost:5000/api/auth', {headers})
      .subscribe(response =>{
        //localStorage.setItem('userid', response);
        console.log(response);
        resolve(response);
      },
      (err)=> {
        reject("err " +err);
      }

      );

    });

}
}
