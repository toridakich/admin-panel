import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { UserComponent } from './components/user/user.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { PropertyComponent } from './components/property/property.component';
import { BookingComponent } from './components/booking/booking.component';


const routes: Routes = [
  
  {path: '', component:DashBoardComponent, children:[
    {path: 'property', component:PropertyComponent},
    {path: 'booking', component: BookingComponent},
    {path: 'user', component:UserComponent}
  ]},
];

export const routing= RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
