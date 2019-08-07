import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { PropertyComponent } from './components/property/property.component';
import { BookingComponent } from './components/booking/booking.component';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    
    ServiceProviderComponent,
    LoginComponent,
    UserComponent,
    PropertyComponent,
    BookingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
