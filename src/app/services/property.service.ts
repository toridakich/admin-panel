import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }
  getListItems(){
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      this.http.get('http://localhost:5000/api/property', {headers})
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
