import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
public users: any;
public user: {};
// firstName: string;
// lastName: string;
// cellPhone: string;
// email: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().then(res=>{
      console.log(res);
      this.users=res;
    }).catch(err=>{
      console.log(err);
    })

  }

}

