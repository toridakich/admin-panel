import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  users: Array<User>;
  navItems: Array<any> = [
    {name: 'user', path:'/user'},
    {name: 'booking', path:'/booking'},
    {name: 'property' , path:'/property' }
  ]

  constructor(private router: Router, private userServices: UserService){
    // this.users = this.userServices.getListItems();
  }


  ngOnInit(){
  }
  navTo(page) {
    this.router.navigate([page.path]);
  }
}
